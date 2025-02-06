// 1. Crea un bucle que imprima los nÃºmeros del 1 al 20.
for(let i = 1;i<21;i++){
    console.log(i)
}
// 2. Crea un bucle que sume todos los nÃºmeros del 1 al 100 y muestre el resultado.
let suma = 0
for(let i = 1;i<101;i++){
    suma+=i
}
console.log("Resultado: " + suma)

// 3. Crea un bucle que imprima todos los nÃºmeros pares entre 1 y 50.
for(let i = 1;i<51;i++){
    if(i%2===0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola.
let nombres = ["david","pedro","alberto","jose"]
for(let i = 0;i<nombres.length;i++){
    console.log(nombres [i])
}
// 5. Escribe un bucle que cuente el nÃºmero de vocales en una cadena de texto.
let cadenaTexto = "Esto es un mensaje de prueba"
cadenaTexto= cadenaTexto.toLowerCase()

for(let i = 0;i<cadenaTexto.length;i++){
    if(cadenaTexto[i] == "a" || cadenaTexto[i] == "e" || cadenaTexto[i] == "i" || cadenaTexto[i] == "o" || cadenaTexto[i] == "u"){
        console.log(cadenaTexto[i])
    }
}

// 6. Dado un array de nÃºmeros, usa un bucle para multiplicar todos los nÃºmeros y mostrar el producto.
let myArray = [1,2,3,4,5,6,12,56]
let multiplicacionArray = 1
for(let i = 0;i<myArray.length;i++){
    multiplicacionArray *= myArray[i]
}
console.log(multiplicacionArray)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5.
for(let i = 1;i<=10;i++){
    console.log("5 * " + i + " = " + 5*i)
}

// 8. Usa un bucle para invertir una cadena de texto.
let cadena = "Hola mundo"
let resultado = ""
for(let i=cadena.length-1;i>=0;i--){
    resultado += cadena[i]
}
console.log(resultado)

// 9. Usa un bucle para generar los primeros 10 nÃºmeros de la secuencia de Fibonacci.
//ESTE EJERCICIO NO ME SALÍA
let fibonacci = [0, 1]
let n = 2
while (n < 10) {
    fibonacci.push(fibonacci[n - 1] + fibonacci[n - 2])
    n++
}
console.log(fibonacci)
// 10. Dado un array de nÃºmeros, usa un bucle para crear un nuevo array que contenga solo los nÃºmeros mayores a 10.
let numArray = [1,2,3,40,56,9,1,32]
for(let i = 0;i<numArray.length;i++){
    if(numArray[i] > 10){
        console.log(numArray[i])
    }
}