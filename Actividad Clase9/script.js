document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const inputs = form.querySelectorAll('input');
    const submitBtn = document.getElementById('submitBtn');

    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('focus', clearError);
    });

    submitBtn.addEventListener('click', handleSubmit);

    function validateField(event) {
        const field = event.target;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch (field.id) {
            case 'fullName':
                isValid = /^[a-zA-Z]{2,} [a-zA-Z]{2,}$/.test(value);
                errorMessage = isValid ? '' : 'Debe tener más de 6 letras y al menos un espacio entre medio.';
                break;
            case 'email':
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                errorMessage = isValid ? '' : 'Debe tener un formato de email válido.';
                break;
            case 'password':
                isValid = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(value);
                errorMessage = isValid ? '' : 'Al menos 8 caracteres, formados por letras y números.';
                break;
            case 'confirmPassword':
                const password = document.getElementById('password').value.trim();
                isValid = value === password;
                errorMessage = isValid ? '' : 'Las contraseñas no coinciden.';
                break;
            case 'age':
                isValid = Number.isInteger(+value) && +value >= 18;
                errorMessage = isValid ? '' : 'Debe ser un número entero mayor o igual a 18.';
                break;
            case 'phone':
                isValid = /^\d{7,}$/.test(value);
                errorMessage = isValid ? '' : 'Número de al menos 7 dígitos, sin espacios, guiones ni paréntesis.';
                break;
            case 'address':
                isValid = /.{5,} .+/.test(value);
                errorMessage = isValid ? '' : 'Al menos 5 caracteres, con letras, números y un espacio en el medio.';
                break;
            case 'city':
                isValid = value.length >= 3;
                errorMessage = isValid ? '' : 'Al menos 3 caracteres.';
                break;
            case 'postalCode':
                isValid = value.length >= 3;
                errorMessage = isValid ? '' : 'Al menos 3 caracteres.';
                break;
            case 'dni':
                isValid = /^\d{7,8}$/.test(value);
                errorMessage = isValid ? '' : 'Número de 7 u 8 dígitos.';
                break;
        }

        const errorElement = document.getElementById(`${field.id}Error`);
        errorElement.textContent = errorMessage;

        return isValid;
    }

    function clearError(event) {
        const field = event.target;
        const errorElement = document.getElementById(`${field.id}Error`);
        errorElement.textContent = '';
    }

    function handleSubmit() {
        const errors = [];
        let formData = {};

        inputs.forEach(input => {
            if (!validateField({ target: input })) {
                errors.push(input.name);
            } else {
                formData[input.name] = input.value.trim();
            }
        });

        if (errors.length > 0) {
            alert(`Errores en los campos: ${errors.join(', ')}`);
        } else {
            alert(`Formulario enviado con éxito:\n${JSON.stringify(formData, null, 2)}`);
        }
    }
});
