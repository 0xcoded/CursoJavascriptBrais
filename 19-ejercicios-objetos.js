// 1. Crea un objeto con 3 propiedades.

let persona = {
    name : "david",
    age : 34,
    country : "valencia"
}

// 2. Accede y muestra su valor.
for(key in persona){
    console.log("Clave: " + key + " valor " + persona[key])
}

// 3. Agrega una nueva propiedad.
persona.bebida = "café"
for(key in persona){
    console.log("Clave: " + key + " valor " + persona[key])
}

// 4. Elimina una de las 3 primeras propiedades.
delete persona.bebida

// 5. Agrega una funciÃ³n e invÃ³cala.
persona.myFunction = function(){
    console.log("Esto es una funcion en el objeto persona")
}
persona.myFunction()

// 6. Itera las propiedades del objeto.
for(key in persona){
    console.log(persona[key])
}

// 7. Crea un objeto anidado.
persona.noelia = {
    nombre: "noelia",
    edad: "32"
}
console.log(persona.noelia.edad)

// 8. Accede y muestra el valor de las propiedades anidadas.
for(key in persona.noelia){
    console.log("clave: " + key + ", valor: " + persona.noelia[key] )
}

// 9. Comprueba si los dos objetos creados son iguales.
console.log(persona === persona.noelia)     //Distinta referencia en memoria, aunque los datos fueran idénticos

// 10. Comprueba si dos propiedades diferentes son iguales.
console.log(persona.age === persona.noelia.age) //34 != 32