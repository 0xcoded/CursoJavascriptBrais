//log
console.log("texto log")

//error
console.error("Este es un mensaje de error")
console.error("Este es un mensaje de error", new Error("Error de ejemplo"))

//warn
console.warn("Mensaje de advertencia")

//info
console.info("Esto es un mensaje de información")

//table
let myTableArray = [
    ["david",34],
    ["noelia",32]
]

console.table(myTableArray)      //Mostar mytable con una representación de tabla de valores con índice

let myTableObject = [
    {name: "david",age:34},
    {name: "noelia",age:32}
]
console.table(myTableObject)

//Grupos (Agrupación de datos mostrados en consola, con formato de grupo de datos)

console.group("Datos:") //INICIA el grupo
console.log("david")
console.log(34)
console.groupEnd()        //Finaliza el grupo

console.log("Fuera del grupo")

//time
console.time("Tiempo Ejecución")
for(i=0;i<10000;i++){

}
console.timeEnd("Tiempo Ejecución")      //IMPORTANTE, MISMO VALOR TIME Y TIMEEND para que js tenga una referencia de qué debe parar


//ASSERT: Error si lo que evalua es falso
let age = 14
console.assert(age >= 18, "El usuario debe ser mayor de edad")      //Se muestra el mensaje si NO se cumple la condición

//COUNT: Número de veces que se ha invocado una clave
console.count("Valor")
console.count("Valor")
console.count("Valor")
console.countReset("Valor")     //Contador a resetear
console.count("Valor")
console.count("Valor")

//TRACE: Muestra el siguimiento de la pila de ejecucion (stack trace)
function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento de la ejecución")
}

funcA()

//CLEAR: Limpiar pantalla
//console.clear()