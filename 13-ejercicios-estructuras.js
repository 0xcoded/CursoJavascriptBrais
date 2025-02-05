// 1. Crea un array que almacene cinco animales.
myArray = []
myArray.push("cabra")
myArray.push("oveja")
myArray.push("perro")
myArray.push("gato")
myArray.push("serpiente")

// 2. AÃ±ade dos mÃ¡s. Uno al principio y otro al final.
myArray.unshift("animal 1")
myArray.push("animal 7")
console.log(myArray)
// 3. Elimina el que se encuentra en tercera posiciÃ³n.
myArray.splice(3,1)     //En la posición 3 (4) se elimina un elemento
console.log(myArray)

// 4. Crea un set que almacene cinco libros.
let mySet = new Set(["libro 1", "libro 2", "libro 3", "libro 4", "libro 5"])
console.log(mySet)

// 5. AÃ±ade dos mÃ¡s. Uno de ellos repetido.
mySet.add("libro 6")
mySet.add("libro 1")
console.log(mySet)
// 6. Elimina uno concreto a tu elecciÃ³n.

mySet.delete("libro 4")
console.log(mySet)

// 7. Crea un mapa que asocie el nÃºmero del mes a su nombre.
let myMap = new Map()

mymap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(mymap)

// 8. Comprueba si el mes nÃºmero 5 existe en el map e imprime su valor.
if(mymap.has(5)){
    console.log("Existe el mes 5")
} else {
    console.log("Algo anda mal con la Tierra")
}

// 9. AÃ±ade al mapa una clave con un array que almacene los meses de verano.

let mesesVerano = []
mesesVerano.push("Junio")
mesesVerano.push("Julio")
mesesVerano.push("Agosto")
mymap.set("MesesVerano",mesesVerano)


console.log(mymap)

// 10. Crea un Array, transfÃ³rmalo a un Set y almacÃ©nalo en un Map.
let mySet2 = new Set(mesesVerano)
myMap.set("meses",mySet2)
console.log(myMap)