// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor.
let nombre = "Antonio"
if(nombre=="David"){
    console.log("Eres david")
} else {
    console.log("No eres david")
}

// 2. Imprime por consola un mensaje si el usuario y contraseÃ±a concide con unos establecidos.
let usuario = "david"
let clave = 1234

if(usuario == "david" && clave==1234){
    console.log("Acceso garantizado")
}

// 3. Verifica si un nÃºmero es positivo, negativo o cero e imprime un mensaje.
let numero = 90
if(numero < 0){
    console.log("Negativo")
} else if(numero == 0){
    console.log("Cero")
} else {
    console.log("Positivo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuÃ¡ntos aÃ±os le faltan.

let age = 12
if(age >= 18){
    console.log("Puede votar")
} else {
    console.log(`Te faltan ${18 - age} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad .
age = 3
let mensaje = age >= 18 ? "Mayor de edad" : "Menor de edad"
console.log(mensaje)

// 6. Muestra en que estaciÃ³n del aÃ±o nos encontramos dependiendo del valor de una variable "mes".
let mes = 1
if(mes >= 0 && mes < 3){
    console.log("Primavera")
} else if (mes >= 3 && mes < 6){
    console.log("Verano")
} else if (mes >= 6 && mes< 9){
    console.log("Otoño")
} else {
    console.log("Invierno")
}

// 7. Muestra el nÃºmero de dÃ­as que tiene un mes dependiendo de la variable del ejercicio anterior.
let month = 2
if (month === 2) {
    console.log("28 o 29 dÃ­as")
} else if ([4, 6, 9, 11].includes(month)) {
    console.log("30 dÃ­as")
} else {
    console.log("31 dÃ­as")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.
let lang = "English"

switch(lang){
    case "Spanish":
        console.log("Hola Mundo")
        break
    case "English":
        console.log("Hello world!")
        break
    default:
        console.log("ERROR DE IDIOMA")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6.
switch (month) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("OtoÃ±o")
        break
    default:
        console.log("Invierno")
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7.

switch (month) {
    case 2:
        console.log("28 o 29 dÃ­as")
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 dÃ­as")
        break
    default:
        console.log("31 dÃ­as")
}