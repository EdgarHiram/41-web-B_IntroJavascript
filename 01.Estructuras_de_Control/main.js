// trabajar toda nuestra lógica

//
//

// /// Ejercicio 1. Declarar una variable
// let age = 20;

// // implemento una condicional/estructura de control/ if ... else
// if (age >= 18) {
//     console.log("Eres mayor de edad");
// }
// else {
//     console.log("Eres menor de edad");
// }

//Vamos a escribir un programa que le pida/solicite a un usuario que ingrese su edad y saber si esa persona
//es mayor o menor de edad

// promt nos sirve para pedirle datos al usuario
// let ageUser = window.prompt("¿Cuántos años tienes?");
// if (ageUser >= 18){
//     console.log("Eres mayor de edad");
    
// } else {
//     console.log("Eres menor de edad");
    
// }

// Ejercicio 3. Vamos a escribir un programa para que un usuario nos de su nombre
// y vamos a guardar ese dato y vamos a solicitar que nos de su nombre otra vez
// y vamos a compararlo si el nombre es igual o no.

// 1. Pedirle al usuario que nos de su nombre
// const user = window.prompt("¿Cuál es tu nombre?");
// const baseDeDatos = "Adriana";

// 2. Mostramos mensajes en consola, para ello usamos console.log
// console.log(); nos sirve para mostar mensaje en consola y nos ayuda
// a ver los datos que se tienen en un instante del código
// console.log("¿El usuario es el mismo?");
// console.log(user == baseDeDatos); //true or false

// console.log("Si son diferentes, debo echarlo de la base de datos");
// console.log(user != baseDeDatos); //true or false

// console.log("El usuario es bienvenido a la app");
// // Validamos una condición para saber si es el usuario correcto
// if (user != baseDeDatos) //true or false
// {
//     console.log("El usuario no el mismo");
//     alert("Adiós :c, no eres bienvenido a la app");
// } else {
//     console.log("El usuario es el mismo");
//     alert("Eres bienvenido a la app :D");
// }

// Ejercicio 4.

//Convertimos la entrada a entero
let edad = parseInt(window.prompt("¿Cuántos años tienes?"));

if (edad >= 18) {
    console.log("Eres mayor de edad ;D");
    //alert("Eres mayor de edad");    
} else if (edad < 0) {
    console.log("Edad no válida :v. Ingresa un número positivo");
} else if (isNaN(edad)) {
    console.log("Edad no válida. Ingresa un número.");    
} else {
    console.log("Eres menor de edad :c");  
}

