// Memoria reservada limitada a 3 elementos, 0,1,2
let array = new Array(3)
array[0] = "David"
array[1] = 34
array[2] = true

console.log(array)


// Sin reserva de memoria limitada
let array2 = []

array2[8] = "test"
console.log(array2)

//PUSH y POP

// PUSH: Agregar entradas a array
array2 = []
array2.push("test")
array2.push("david")
console.log(array2)

// POP: Elimina el último elemento del array
console.log("eliminado: " + array2.pop())
console.log(array2)

//SHIFT Y UNSHIFT
// SHIFT: Elimina el primer elemento del array y lo devuelve, si es necesario
array2=[]
array2.push("david")
array2.push("valls")
console.log("Eliminado: " + array2.shift())
console.log(array2)

//UNSHIFT: Agrega elementos al inicio del array
array2.unshift("Elemento 1", "Elemento 2")
array2.pop()        //Elimina el último elemento del array
array2.push("Elemento 3")
console.log(array2)

//LENGTH: Número de entradas en un array
console.log(array2.length)


//Clear
array2 = []
console.log(array2)
console.log(array2.length)

//SLICE: Cortar array
array2.push("david")
array2.push("valls")
array2.push("da costa")
array2.push(34)
let newArray = array2.slice(0,2)
console.log(array2)
console.log(newArray)

//SPLICE: Eliminar elementos
//Eliminar desde el elemento 0, el elemento 1 y 2
array2.splice(0,2)  //Eliminamos el elemento 1 y 2 del array, desde el elemento 0 (1), 2 elementos
console.log(array2)
array2.splice(0,1,"prueba")  // Sustituir posicion de 0 a 1 por "prueba"
console.log(array2)