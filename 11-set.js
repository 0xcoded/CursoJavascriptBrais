// SET NO ADMITE VALORES DUPLICADOS Y SON LISTAS ORDENADAS
// CASE SENSITIVE

let mySet = new Set(['david','valls','test','da costa'])

console.log(mySet)

//ADD y DELETE
mySet.add("prueba") //Agregamos el elemento string "pruena"
console.log(mySet)

mySet.delete("da costa")     //Elimina el elemento "da cosra", no actua por índice
console.log(mySet.delete("david"))
console.log(mySet)

//HAS: ¿Existe el valor?
console.log(mySet.has("valls"))

//SIZE: Longitud del set
console.log(mySet.size)

// Convertir set a array
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir array a set
let mySet2 = new Set(myArray)
console.log(mySet2)