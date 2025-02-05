// Diccionario de clave y valor (key, value)

//Las claves no pueden estar repetidos, los valores si

let myMap = new Map()

myMap = new Map([
    ['name', 'david'],
    ['edad', 34]
])

console.log(myMap)

// Métodos y propiedades

//SET: Actualizar o agregar elemento
myMap.set('name','antonio')             //Reemplaza si existe
myMap.set("email","david@test.com")     //Sino, agrega
console.log(myMap)

//GET: Obtener valor de una clave
console.log(myMap.get("name"))      //antonio, ya que fue cambiado con el set

//HAS: Comprobar si existe una clave
console.log(myMap.has("test"))      //FALSE
console.log(myMap.has("email"))     //TRUE

//DELETE: Elimina una clave
myMap.delete("email")
console.log(myMap)

//CLEAR: Limpia el mapa
myMap.clear()
console.log(myMap)

//KEYS: Obtener lista de claves

myMap = new Map([
    ['name', 'david'],
    ['edad', 34]
])


console.log(myMap.keys())

//VALUES: Obtener lista de valores
console.log(myMap.values())

//SIZE: Obtener tamaño (no es funcion)
console.log(myMap.size)

//ENTRIES: Todas las claves y valores
console.log(myMap.entries())