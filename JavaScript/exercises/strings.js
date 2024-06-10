//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)

let texto = "hola como estas?";
let textoMayus = texto.toUpperCase();
console.log(palabra);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

let text = "JavaScript"
let primeros5=text.substring(0, 5);
console.log(primeros5);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

let palabra ="programacion";
let ultimos3 = palabra.substring(palabra.length -3);
console.log(ultimos3);

//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

let ejemplo = "programación";
let primeraLetraMayuscula = ejemplo.substring(0, 1).toUpperCase() + ejemplo.substring(1).toLowerCase();
console.log(primeraLetraMayuscula);

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

let espacio = "Hola mundo";
let posicionPrimerEspacio = espacio.indexOf(" ");
console.log("La posición del primer espacio en blanco es: " + posicionPrimerEspacio);

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

// Crear una variable de tipo String con al menos 2 palabras largas y un espacio entre ellas
var textolargo = "programación interesante";


var posicionPrimerEspacio1 = textolargo.indexOf(" ");


var primeraPalabra = texto.substring(0, posicionPrimerEspacio1);
var primeraPalabraCapitalizada = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase();


var segundaPalabra = texto.substring(posicionPrimerEspacio1 + 1);

var segundaPalabraCapitalizada = segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();

var resultadoFinal = primeraPalabraCapitalizada + " " + segundaPalabraCapitalizada;
console.log(resultadoFinal);
