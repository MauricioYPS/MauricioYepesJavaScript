//Punto 1

let num1, num2
num1 = parseInt(prompt("Ingrese el primer numero"))
num2 = parseInt(prompt("Ingrese el segundo numero"))
if (num1 < num2) {
    console.log("El numero" + " " + num1 + " " + "no es mayor que" + " " + num2)
}
else {
    console.log("El numero" + " " + num1 + " " + "es mayor que" + " " + num2)
}

//Punto 2
let nom1, nom2
nom1 = parseInt(prompt("Ingrese el primer numero"))
nom2 = parseInt(prompt("Ingrese el segundo numero"))

if (num1 == num2) {
    console.log("los numeros son iguales")
}
else {
    console.log("Los numeros no son iguales")
}

//Punto 3

let nim1, nim2

nim1 = parseInt(prompt("Ingrese el primer numero"))
nim2 = parseInt(prompt("Ingrese el segundo numero"))

if (nim1 == nim2) {
    console.log("los numeros son iguales")
}
else if (nim1 > nim2) {
    console.log("El numero " + nim1 + " " + "es el numero mayor")
}
else {
    console.log("El numero " + nim2 + " " + "es el numero mayor")
}

//punto 4
let nam1, nam2, nam3
nam1 = parseInt(prompt("Ingrese el primer numero"))
nam2 = parseInt(prompt("Ingrese el segundo numero"))
nam3 = parseInt(prompt("Ingrese el tercer numero"))

if (nam1 < nam2) {
    if (nam1 < nam3) {
        console.log("El numero" + " " + nam1 + " " + " es el numero menor")
    }
    else {
        console.log("El numero" + " " + nam3 + " " + " es el numero menor")
    }
}
else if (nam2 < nam1) {
    if (nam2 < nam3) {
        console.log("El numero" + " " + nam2 + " " + " es el numero menor")
    }
    else {
        console.log("El numero" + " " + nam3 + " " + " es el numero menor")
    }
}
else if (nam3 < nam2) {
    if (nam3 < nam1) {
        console.log("El numero" + " " + nam3 + " " + " es el numero menor")
    }
    else {
        console.log("El numero" + " " + nam1 + " " + " es el numero menor")
    }
}

// punto 5

let persona1 = {
    nombre: "Maria",
    edad: 35,
    altura: 1.54
}
let persona2 = {
    nombre: "Pedro",
    edad: 38,
    altura: 1.81
}

if (persona1.altura < persona2.altura) {
    console.log("la persona" + " " + persona1.nombre + " " + " es la mas alta")
}
else {
    console.log("la persona" + " " + persona2.nombre + " " + " es la mas alta")

}
if (persona1.edad < persona2.edad) {
    console.log("la persona" + " " + persona1.nombre + " " + " es la mas vieja")
}
else {
    console.log("la persona" + " " + persona2.nombre + " " + " es la mas vieja")
}

// punto 6

let nombreP6, edadP6, alturaP6, vision

nombreP6 = prompt("Ingresa tu nombre")
edadP6 = parseInt(prompt("Ingresa tu edad en cms"))
alturaP6 = prompt("Ingresa tu altura")
vision = prompt("Ingresa tu nivel de vision")

if (edadP6 >= 18) {
    if (alturaP6 >= 150) {
        if (vision >= 8) {
            console.log("Estas capacitado para obtener tu liecencia")
        }
        else {
            console.log("No cumples con los requisitos minimos")
        }

    }
    else {
        console.log("No cumples con los requisitos minimos")
    }

}
else {
    console.log("No cumples con los requisitos minimos")
}

//punto 7


let nombreP7, paseP7, entradaP7
let nombremio = "Mauricio"
let sEntrada
let plata, comprarEntrada


nombreP7 = prompt("Igresa tu nombre")
paseP7 = confirm("Tienes pase VIP?")
entradaP7 = confirm("Tienes entradas?")

console.log("Bienvenido a la discoteca")
if (nombreP7 == nombremio || paseP7 == true) {
    console.log("Tienes pase libre, entra a disfrutar")
}
else if (entradaP7 == true) {

    console.log("Deseas utilizar tu entrada?")
    console.log("1 - Utilizar entrada\n 2 - No utilizar entrada")
    sEntrada = parseInt(prompt("Ingresa la eleccion"))

    switch (sEntrada) {
        case 1:
            console.log("Entra a disfrutar")
            break;

        case 2:
            console.log("Gracias por visitar adios")
            break;
    }
}
else {
    console.log("Deseas comprar una entrada?")
    console.log("1 - si\n 2 - no")
    comprar = parseInt(prompt("Ingresa tu eleccion"))
    switch (comprar) {

        case 1:
            plata = prompt("Cuanto dinero tienes?")
            if (plata >= 1000) {
                console.log("Venta exitosa, sigue a disfrutar")
            }
            else {
                console.log("Dinero insuficiente para la compra")
            }
            break;
        case 2: {
            console.log("Gracias por visitar, adios")
        }
            break;
    }
}

//punto 8

let numeroIncognita = 8
let numeroIngresado

console.log("escoge un numero del 1 al 10")


numeroIngresado = parseInt(prompt("ingresa un numero"))
if (numeroIngresado == numeroIncognita) {
    console.log(" ganaste haz adivinado el numero")
}

else if (numeroIngresado < numeroIncognita) {
    console.log("El numero ingresado es menor, vuelve a intentarlo");
}

else if (numeroIngresado > numeroIncognita) {
    console.log("El numero ingresado es mayor, vuelve a intentarlo");
}
numeroIngresado = parseInt(prompt("ingresa un numero"))
if (numeroIngresado == numeroIncognita) {
    console.log(" ganaste haz adivinado el numero")
}

else if (numeroIngresado < numeroIncognita) {
    console.log("El numero ingresado es menor");
}

else if (numeroIngresado > numeroIncognita) {
    console.log("El numero ingresado es mayor");
}
numeroIngresado = parseInt(prompt("ingresa un numero"))
if (numeroIngresado == numeroIncognita) {
    console.log(" ganaste haz adivinado el numero")
}

else if (numeroIngresado < numeroIncognita) {
    console.log("El numero ingresado es menor");
}

else if (numeroIngresado > numeroIncognita) {
    console.log("El numero ingresado es mayor");
}


//Punto 9

let miEdadP9

console.log("Ingresa tu edad porfavor");
miEdadP9 = parseInt(prompt("Edad"))
if (miEdadP9 <= 12) {
    console.log("Tienes " + miEdadP9 + " Eres un infante")
}
else if (miEdadP9 >= 13 && miEdadP9 <= 18) {
    console.log("Tienes " + miEdadP9 + " Eres un adolescente")
}
else if (miEdadP9 >= 19 && miEdadP9 <= 45) {
    console.log("Tienes " + miEdadP9 + " Eres un mayor joven")
}
else if (miEdadP9 >= 46 && miEdadP9 < 100) {
    console.log("Tienes " + miEdadP9 + " Eres un anciano")
}
else if (miEdadP9 >= 100) {
    console.log("Tienes " + miEdadP9)
    miEdadP9 = confirm("Seguro que tienes esa edad?")
    if (miEdadP9 == true) {
        console.log("Lo dudo");
    }
    else {
        console.log("No lo dudo");
    }
}

//punto 10


let jugador1P10, jugador2P10
let papelazo1, papelazo2

console.log("Empieza el jugador Uno");
papelazo1 = prompt("PIEDRA, PAPEL o TIJERAS")
console.log("Continua el jugador Dos");
papelazo2 = prompt("PIEDRA, PAPEL o TIJERAS")

if (papelazo1 == papelazo2) {
    console.log("Empate");
}
else if (papelazo1 == "PIEDRA" && papelazo2 == "PAPEL") {
    console.log("Gana el jugador 2");
}
else if (papelazo1 == "PAPEL" && papelazo2 == "PIEDRA") {
    console.log("Gana el jugador 1");
}
else if (papelazo1 == "TIJERAS" && papelazo2 == "PIEDRA") {
    console.log("Gana el jugador 2");
}
else if (papelazo1 == "PIEDRA" && papelazo2 == "TIJERAS") {
    console.log("Gana el jugador 1");
}
else if (papelazo1 == "PAPEL" && papelazo2 == "TIJERAS") {
    console.log("Gana el jugador 2");
}
else if (papelazo1 == "TIJERAS" && papelazo2 == "PAPEL") {
    console.log("Gana el jugador 1");
}
else if (papelazo1 == "PIEDRA" && papelazo2 == "TIJERAS") {
    console.log("Gana el jugador 1");
}
else if (papelazo1 == "TIJERAS" && papelazo2 == "PIEDRA") {
    console.log("Gana el jugador 2");
}

//Punto 11

let colorP11
console.log("Ingresa un color para recibir un mensaje personalziado");
colorP11 = prompt("Color")

switch (colorP11) {
    case "Blanco":
        console.log("Falta de color");
        break;
    case "Negro":
        console.log("Falta de color");
        break;
    case "Verde":
        console.log("El color de la naturaleza");
        break;
    case "Azul":
        console.log("El color del agua");
        break;
    case "Amarillo":
        console.log("El color del sol");
        break;
    case "Rojo":
        console.log("El color del fuego");
        break;
    case "Marron":
        console.log("El color de la tierra");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");

}


//punto 12

let num1P12, num2P12, operacionP12,resultadoP12

console.log("Ingresa 2 numeros y luego la operacion a realizar");
num1P12 = parseInt(prompt("Numero 1"))
num2P12 = parseInt(prompt("Numero 2"))
console.log("Ingresa el tipo de operacion a realizar");
operacionP12 = prompt("suma, resta, multiplicacion, division")

if (operacionP12 == "division" && num2P12 == 0){
    console.log("Error, no se puede dividir por 0");
}

else if (operacionP12 == "division" && num2P12 >= 1){
    resultadoP12 = num1P12 / num2P12
    console.log("El resultado de la divison es: " + resultadoP12);
}

else if (operacionP12 == "suma"){
    resultadoP12 = num1P12 + num2P12
    console.log("El resultado de la suma es: " + resultadoP12)
}
else if (operacionP12 == "resta"){
    resultadoP12 = num1P12 - num2P12
    console.log("El resultado de la resta es: " + resultadoP12)
}
else if (operacionP12 == "multiplicacion"){
    resultadoP12 = num1P12 * num2P12
    console.log("El resultado de la multiplicacion es: " + resultadoP12)
}

// punto 13


let apellidosP13, nombresP13, nacionalidadP13, estaturaP13, sexoP13
let fNacimientoP13, LNacimientoP13, lExpedicionp13, fExpedicionP13, fExpiracionP13,confirmacionp13

console.log("Completa los siguientes datos de manera correcta");
apellidosP13 = prompt("Apellidos")
nombresP13 = prompt("Nombres")
nacionalidadP13 = prompt("Nacionalidad")
estaturaP13 = parseInt(prompt("Estatura en cm"))
sexoP13 = prompt("Sexo")
fNacimientoP13 = prompt("Fecha de nacimiento")
LNacimientoP13 = prompt ("Lugar de nacimiento")
fExpedicionP13 = prompt("Fecha de expedicion")
lExpedicionp13 = prompt ("Lugar de expedicion")
fExpiracionP13 = prompt ("Fecha de expiracion")

console.log("Confirma que los siguientes datos sean correctos");

console.log("Apellidos: " + apellidosP13);
console.log("Nombres: " + nombresP13);
console.log("Nacionalidad: " +nacionalidadP13);
console.log("Estatura en cm: " + estaturaP13);
console.log("Sexo: " + sexoP13);
console.log("Fecha de nacimiento: " + fNacimientoP13);
console.log("Lugar de nacimiento: " + LNacimientoP13);
console.log("Fecha de expedicion: " + fExpedicionP13);
console.log("Lugar de expedicion: " + lExpedicionp13);
console.log("Fecha de expiracion: " + fExpiracionP13);

confirmacionp13 = confirm ("¿Los datos son correctos?")

if (confirmacionp13 == false) {
    console.log("Vuelve a intentarlo dentro de 1 mes");
}
else { 
    let dni = {
        apellido: apellidosP13,
        nombres: nombresP13,
        nacionalidad: nacionalidadP13,
        estatura: estaturaP13,
        sexo: sexoP13,
        fechaDeNacimiento: fNacimientoP13,
        lugarDeNacimiento: LNacimientoP13,
        fechaDeExpedicion: fExpedicionP13,
        lugarDeExpedicion: lExpedicionp13,
        fechaDeExpiracion: fExpiracionP13
    }
    console.table(dni);
}
