// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).

let num1,num2,resultado
num1 = prompt("Ingrese un numero")
for ( i =0 ; i<11 ; i++){
    resultado = num1 * i
    console.log(num1 + "X" + i + "=" + resultado);
}

//2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

let num1P2, num2P2,resultadoP2
num2P2 = parseInt(prompt("Ingrese un numero"))
resultadoP2 = num2P2
while (num2P2 != 0){
    num2P2 = parseInt(prompt("Ingrese un numero"))
    resultadoP2 = resultadoP2 + num2P2  
}
console.log("La suma total de sus numeros es :");
console.log(resultadoP2)

// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.

 let num1P3,resultadoP3,repeticionesP3=0,numOculto=61
while (num1P3 != numOculto){
    num1P3 = parseInt(prompt("Ingrese un numero del 1 al 100"))
    if (num1P3<numOculto){

        console.log("El numero ingresado es menor al numero oculto");
        repeticionesP3++
    }
    else if(num1P3 > numOculto) {
        console.log("El numero ingresado es mayor");
        repeticionesP3++
    }
    else if (num1P3 == numOculto){
        console.log("Haz adivinado el numero ganador");
        console.log("Numero de intentos realizados: " + repeticionesP3)
    }

}

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

let num1P4,resulP4

num1P4 = parseInt(prompt("Ingrese un numero para averiguar si es primo"))

for (i = 2; i <= 2; i++ ){
    if (num1P4 % i == 0){
        console.log("El numero no es primo");
    }
    else if (num1P4 % i == 1){
        console.log("El numero es primo");
    }
}

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

let num1P5,resulP5,divisoresP5,modlo=1

num1P5 = parseInt(prompt("Ingrese un numero para saber sus divisores"))
console.log("HOLA MUNDO");
    for (modlo = 1; modlo <= num1P5; modlo++) {
        if ( num1P5 % modlo == 0){
            console.log(modlo + " ");

        }
    }

 // 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array. 
    let cArray = 10
    let num1P6 = [cArray]
    for (let i =0; i < cArray ; i++){
        num1P6[i] = parseInt(prompt("Igrese un numero"))
    }
    let iterador = 0
    while ( iterador <= num1P6.length){
            console.log(num1P6[iterador])
            iterador++
    }   

//     7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

let cArrayP7 = 10
let num1P7 = [cArrayP7]
for (let i =0; i < cArrayP7 ; i++){
    num1P7[i] = parseInt(prompt("Igrese un numero"))
}
let resulM
let iteradorP7 = 0
while ( iteradorP7 <= num1P7.length){
       resulM = num1P7[iteradorP7] * 2
        console.log(resulM)
        iteradorP7++
}  

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.

    let obj1 = {
        nombre: "Mauricio",
        edad: 19,
        estudiante: true,
        curso: "JavaScript"
    }
    let obj2 = {
        nombre: "Marlon",
        edad: 20,
        estudiante: true,
        curso: "JavaScript"
    }
    let obj3 = {
        nombre: "Sebastian",
        edad: 26,
        estudiante: true,
        curso: "Pyhton"
    }
    let obj4 = {
        nombre: "Damaris",
        edad: 47,
        estudiante: false,
        curso: "None"
    }
    let obj5 = {
        nombre: "Pedro",
        edad: 50,
        estudiante: true,
        curso: "C++"
    }

    let arrayP8 = [ obj1,obj2,obj3,obj4,obj5]

    for ( let i = 0; i < arrayP8.length; i++){

        console.log(arrayP8[i])
    }



// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

let impar9
let cArrayP9 = 10
let num1P9 = [cArrayP9]
for (let i =0; i < cArrayP9 ; i++){
    num1P9[i] = parseInt(prompt("Igrese un numero"))
}
for (let i =0; i < cArrayP9 ; i++){
    if ( num1P9[i] % 2 == 1){
        console.log(" Numero impar :"+num1P9[i]);
    }
}

// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.


let num1P10, resultImpar=0,resultPar=0
num1P10 = parseInt(prompt("ingrese un numero"))
while (num1P10 != 0){
    if (num1P10 % 2 == 0){
        resultPar =  resultPar + num1P10
    }
    else {
        resultImpar = resultImpar + num1P10
    }
    num1P10 = parseInt(prompt("ingrese un numero"))
}
console.log("Suma de pares: " + resultPar);
console.log("Suma de impares: " + resultImpar)

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande

    let cArray11 = 10
    let arrayP11 = [cArray11]
    let numP11, resulP11 = 0

    for (let i = 0; i < cArray11; i++) {
        arrayP11[i] = parseInt(prompt("Ingrese un numero al array"))
    }

    for (let i = 0; i <cArray11; i++) {

            if ( arrayP11[i] > resulP11){
                resulP11 = arrayP11[i]
            }

    }
    console.log("El numero mayor del arreglo es: " + resulP11);

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.
    let cArray12 = 10
    let arrayP12 = [cArray12]
    let numP12, resulP12 = 999999999

    for (let i = 0; i < cArray12; i++) {
        arrayP12[i] = parseInt(prompt("Ingrese un numero al array"))
    }

    for (let i = 0; i <cArray12; i++) {

            if ( arrayP12[i] < resulP12){
                resulP12 = arrayP12[i]
            }

    }
    console.log("El numero menor del arreglo es: " + resulP12);

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.


let nombreJugador1 = prompt("Ingrese el nombre del Jugador 1: ");

let nombreJugador2 = prompt("Ingrese el nombre del Jugador 2:");

console.log(nombreJugador1 + " vs " + nombreJugador2);

let continuar = true;

while (continuar) {
  let manoJugador1, manoJugador2;

  console.log(nombreJugador1 + " Piedra, papel o tijeras");
  manoJugador1 = prompt().toLowerCase();

  console.log(nombreJugador2 + " Piedra, papel o tijeras");
  manoJugador2 = prompt().toLowerCase();

  if (manoJugador1 === manoJugador2) {
    console.log("Empate");
  } else {
    if (
      (manoJugador1 === "piedra" && manoJugador2 === "tijeras") ||
      (manoJugador1 === "papel" && manoJugador2 === "piedra") ||
      (manoJugador1 === "tijeras" && manoJugador2 === "papel")
    ) {
      console.log("Gana el jugador: " + nombreJugador1);
    } else {
      console.log("Gana el jugador: " + nombreJugador2);
    }
    continuar = false;
  }
}

// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

console.log("Numero 14");
let piramide="*", piramides="*"
for (let i = 0; i <=4 ; i++){
    console.log(piramide);
    piramide =  piramide + piramides

}

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.


console.log("Numero 15");

 let piramide15 = "*****"
 for (let i=0; i<=5;i++){
    console.log(piramide15);
    piramide15 = piramide15.slice(0,-1)
 }

// 16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
// pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

// let cArray16 = 4
// let arrayP16 = [cArray16]
// let temp= 0
// for (let i = 0; i <= cArray16; i++) {
//     arrayP16 = parseInt(prompt("Ingrese numeros al array"))
// }


// let ordenado = false;
// while(!ordenado) {
//     ordenado = true;
//     for (let i = 0; i < arrayP16.length - 1; i++) {
//         if (arrayP16[i] > arrayP16[i + 1]) {
//             temp = arrayP16[i + 1]
//             arrayP16[i + 1] = arrayP16[i]
//             arrayP16[i] = temp

//             ordenado = false
//         }

//     }
// }
// for (let i = 0; i <= cArray16; i++) {
//     console.log(arrayP16[i] + [i])
// }




