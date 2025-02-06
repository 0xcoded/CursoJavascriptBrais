// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una funciÃ³n que reciba dos nÃºmeros y devuelva su suma.
function suma(a=0,b=0){
    return a+b
}

let resultadoSuma = suma(1,3)
console.log(resultadoSuma)

// 2. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva el mayor de ellos.
let numMaximo = 0
function maxArray(array){
    array.forEach((numero) => {
        if(numero > numMaximo){
            numMaximo=numero
        }
    });
    return numMaximo
}

let myArray = [1,2,3,24,4,5]
let resultado = maxArray(myArray)
console.log(resultado)

// 3. Crea una funciÃ³n que reciba un string y devuelva el nÃºmero de vocales que contiene.
let numVocales = 0
const vocales = function(cadena){
    cadena = Array.from(cadena)
    cadena.forEach((caracter) => {
        if(caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u"){
            numVocales++
        }
    })
    return numVocales
}

console.log("el nombre david tiene " + vocales("david") + " vocales")

// 4. Crea una funciÃ³n que reciba un array de strings y devuelva un nuevo array con las strings en mayÃºsculas.
function stringToArray(arrayStrings){
    let stringsMayusculas = []
    for(i=0;i<arrayStrings.length;i++){
        stringsMayusculas.push(arrayStrings[i].toUpperCase())
    }
    return stringsMayusculas
}

let stringArray = ["ejemplo","test","david"]
let resultadoArrayToUpper = stringToArray(stringArray)
console.log(resultadoArrayToUpper)

// 5. Crea una funciÃ³n que reciba un nÃºmero y devuelva true si es primo, y false en caso contrario.
function primos(num){
    if(num<=0) { return false }
    for(let i = 2;i<num;i++){
        if(num % i == 0){
            return false
        }
    }
    return true
}

console.log(primos(5))
// 6. Crea una funciÃ³n que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
function comunes(array1,array2){
    let resultado = []
    for(let i = 0;i<array1.length;i++){
        for(let j=0; j<array2.length;j++){
            if(array1[i] === array2[j]){
                resultado.push(array1[i])
            }
        }
    }
    return resultado
}

let myArray1 = ["david","perro","puerta","jaja"]
let myArray2 = ["jaja","perro","madera","david"]
console.log(comunes(myArray1,myArray2))

// 7. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva la suma de todos los nÃºmeros pares.
const sumArray = function (arrayNumeros){
    let suma = 0
    arrayNumeros.forEach((numero) => {
        if(numero%2==0){
            suma += numero
        }
    })
    return suma
}

let numeroArray = [2,3,4,5,6]
console.log(sumArray(numeroArray))
// 8. Crea una funciÃ³n que reciba un array de nÃºmeros y devuelva un nuevo array con cada nÃºmero elevado al cuadrado.
const expoNum = function (myArray){
    let resultado = []
    myArray.forEach((numero) => {
        resultado.push(numero**2)
    })
    return resultado
}

console.log(expoNum([1,2,3,4]))

// 9. Crea una funciÃ³n que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
let myArray3 = []

function stringInversa(cadena){
    for(let i=cadena.length-1;i>=0;i--){
        myArray3.push(cadena[i])
        console.log(cadena[i])
    }
    return myArray3.toString()
}

console.log(stringInversa("david"))

// 10. Crea una funciÃ³n que calcule el factorial de un nÃºmero dado.

//No lo pude resolver, revisar cuando usar recursividad
function factorial(num) {
    if (num === 0 || num === 1) return 1
    return num * factorial(num - 1) // Recursividad
}

console.log(factorial(38))