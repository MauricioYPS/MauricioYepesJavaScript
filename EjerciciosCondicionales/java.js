// //Punto 1

// let num1,num2
// num1 = parseInt(prompt("Ingrese el primer numero"))
// num2 = parseInt(prompt("Ingrese el segundo numero"))
// if (num1<num2){
//     console.log("El numero"+ " " + num1 + " " + "no es mayor que" + " " + num2)
// }
// else{
//     console.log("El numero"+ " " + num1 + " " + "es mayor que" + " " + num2)
// }

// //Punto 2
// let nom1,nom2
// nom1 = parseInt(prompt("Ingrese el primer numero"))
// nom2 = parseInt(prompt("Ingrese el segundo numero"))

// if ( num1 == num2){
//     console.log("los numeros son iguales")
// }
// else{
//     console.log("Los numeros no son iguales")
// }

// //Punto 3

// let nim1,nim2

// nim1 = parseInt(prompt("Ingrese el primer numero"))
// nim2 = parseInt(prompt("Ingrese el segundo numero"))

// if ( nim1 == nim2){
//     console.log("los numeros son iguales")
// }
// else if( nim1 > nim2){
//     console.log("El numero " + nim1 + " " + "es el numero mayor" )
// }
// else{
//     console.log("El numero " + nim2 + " " +"es el numero mayor")
// }

// //punto 4
//  let nam1,nam2,nam3
//  nam1 = parseInt(prompt("Ingrese el primer numero"))
//  nam2 = parseInt(prompt("Ingrese el segundo numero"))
//  nam3 = parseInt(prompt("Ingrese el tercer numero"))

//  if ( nam1 < nam2) {
//     if (nam1 < nam3){
//         console.log ("El numero" + " " + nam1 + " " + " es el numero menor")
//     }
//     else{
//         console.log ("El numero" + " " + nam3 + " " + " es el numero menor")
//     }
//  }
//  else if (nam2 < nam1 ){
//     if (nam2 < nam3) {
//         console.log ("El numero" + " " + nam2 + " " + " es el numero menor")
//     }
//     else {
//         console.log ("El numero" + " " + nam3 + " " + " es el numero menor")
//     }
//  }
//  else if ( nam3 < nam2){
//     if (nam3 < nam1){
//         console.log ("El numero" + " " + nam3 + " " + " es el numero menor")
//     }
//     else{
//         console.log ("El numero" + " " + nam1 + " " + " es el numero menor")
//     }
//  }

// // punto 5

// let persona1={
//     nombre: "Maria",
//     edad: 35,
//     altura: 1.54
// }
// let persona2={
//     nombre: "Pedro",
//     edad: 38,
//     altura: 1.81
// }

// if (persona1.altura < persona2.altura){
//     console.log("la persona" + " " + persona1.nombre + " " + " es la mas alta")
// }
// else{
//     console.log("la persona" + " " + persona2.nombre + " " + " es la mas alta")

// }
// if ( persona1.edad < persona2.edad){
//     console.log("la persona" + " " + persona1.nombre + " " + " es la mas vieja")
// }
// else{
//     console.log("la persona" + " " + persona2.nombre + " " + " es la mas vieja")
// }

// // punto 6

// let nombreP6, edadP6, alturaP6,vision

//  nombreP6 = prompt("Ingresa tu nombre")
//  edadP6 = parseInt(prompt("Ingresa tu edad en cms"))
//  alturaP6 = prompt("Ingresa tu altura")
//  vision = prompt("Ingresa tu nivel de vision")

// if (edadP6 >= 18){
//     if( alturaP6 >= 150){
//         if (vision >= 8){
//             console.log("Estas capacitado para obtener tu liecencia")
//         }
//         else{
//             console.log("No cumples con los requisitos minimos")
//         }

//     }
//     else {
//         console.log("No cumples con los requisitos minimos")
//     }

// }
// else{ 
//     console.log("No cumples con los requisitos minimos")
// }

// //punto 7


// let nombreP7, paseP7,entradaP7
// let nombremio = "Mauricio"
// let sEntrada
// let plata,comprarEntrada


// nombreP7 = prompt("Igresa tu nombre")
// paseP7 = confirm ( "Tienes pase VIP?")
// entradaP7 = confirm ("Tienes entradas?")

// console.log ("Bienvenido a la discoteca")
// if ( nombreP7 == nombremio || paseP7 == true){
//     console.log("Tienes pase libre, entra a disfrutar")
// }
//  else if ( entradaP7 == true){

//     console.log("Deseas utilizar tu entrada?")
//     console.log ("1 - Utilizar entrada\n 2 - No utilizar entrada")
//     sEntrada = parseInt( prompt ("Ingresa la eleccion"))

//     switch (sEntrada){
//         case 1:
//             console.log("Entra a disfrutar")
//             break;

//         case 2: 
//         console.log ("Gracias por visitar adios")
//         break;
//     }
// }
// else {
//     console.log("Deseas comprar una entrada?")
//     console.log ("1 - si\n 2 - no")
//     comprar = parseInt(prompt("Ingresa tu eleccion") ) 
//     switch (comprar){

//         case 1:
//             plata = prompt("Cuanto dinero tienes?")
//             if (plata >= 1000){
//                console.log("Venta exitosa, sigue a disfrutar")
//             }
//             else{
//                 console.log("Dinero insuficiente para la compra")
//             }
//         break;
//         case 2 :{
//             console.log("Gracias por visitar, adios")
//         }
//         break;
//     }
// }

//punto 8

// Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera más eficiente.
let numeroIncognita = 8
let numeroIngresado

console.log("escoge un numero del 1 al 10")


numeroIngresado = parseInt(prompt("ingresa un numero"))
if (numeroIngresado == numeroIncognita) {
    console.log(" ganaste haz adivinado el numero")
}

else if (numeroIngresado < numeroIncognita){
    console.log("El numero ingresado es menor");
    
}


