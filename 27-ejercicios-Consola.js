// 1. Crea un funciÃ³n que utilice error correctamente.
console.error("Esto es un error")
// 2. Crea una funciÃ³n que utilice warn correctamente.
console.warn("Esto es un warning")

// 3. Crea una funciÃ³n que utilice info correctamente.
function showInfo(name){
    console.info("INFO: El nombre de la variable es " + name)
}

showInfo("david")


// 4. Utiliza table.
let myTable = [
    {name: "david",age:34},
    {name:"brais",age:37}
]
console.table(myTable)

// 5. Utiliza group.
console.group("Datos")
console.log("Nombre: david")
console.groupEnd("Datos")
console.info("INFO: Fuera del grupo")

// 6. Utiliza time.
console.time("Duracion")
for(i=0;i<100000;i++){

}
console.timeEnd("Duracion")

// 7. Valida con assert si un nÃºmero es positivo.

let numero = -2
console.assert(numero>=0,"El número es negativo")

// 8. Utiliza count.
console.count("Contador en")
console.count("Contador en")
console.count("Contador en")
console.count("Contador en")
console.countReset("Contador en")
console.count("Contador en")
console.count("Contador en")

// 9. Utiliza trace.

function funcA(){
    funcB()
}

function funcB(){
    console.trace("Seguimiento: ")
}
funcA()

// 10. Utiliza clear.
console.clear()