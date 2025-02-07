//TODOS LOS DATOS NO PRIMITIVOS SON OBJETOS

// Creación de un objeto, Persona

let persona = {
    name: "david",
    age: 34,
    location: "España"
}

//Acceder a propiedades del objeto
console.log(persona.name + " tiene " + persona.age + " años")
console.log("y es de " + persona["location"])       //Acceso mendiante corchetes

//Los objetos no son inmutables, pueden ser modificados
persona.location = "Finlandia"
console.log("Nueva valor de location: " + persona["location"])       //Acceso mendiante corchetes

//También se puede mutar el tipo de dato
console.log(typeof persona.age)
persona.age = "10"
console.log(typeof persona.age)
console.log(persona.age)

//Eliminar propiedad de un objeto
delete persona.location
console.log(persona["location"])        //NO EXISTE ESTE DATO, lo hemos eliminado del objeto Persona
console.log(persona)                    //No contiene, verificación

//Agregar propiedad a un objeto, en este caso un correo
//No requiere instrucción, asignación automatica al objeto Persona
persona.email = "davidvallsdacosta1@gmail.com"
console.log(persona.email)

persona.walk = function(){
    //Utilizamos this para indicar que es una clave interna del objeto en cuestión
    console.log(`${this.name} está caminando`)
}

persona.walk()

//Podemos crear un objeto dentro de un objeto
persona.objeto2= {
    bebiendo: "cafe"
}

console.log("Está bebiendo " + persona.objeto2.bebiendo) //Objeto persona tiene el objeto objeto2 y obtengo "bebiendo" con el valor asignado

let persona2 = {
    name: "david",
    age: 34,
    location: "España"
}

console.log(persona == persona2)        //Deberian ser iguales
console.log(persona === persona2)        //Pero tienen distinta dirección de memoria, compara la referencia en memoria


console.log(persona.name === persona2.name)     //Al comparar la propiedad de name, retorna true ya que accedemos a un tipo de dato primitivo

//Recorrer propiedades, como un mapa, un set, etc
/*for(let value of persona){
    console.log("Valor: " + value)
}*/         //NO ITERABLE CON OF, SUSTITUIR POR IN
for(let value in persona){
    console.log("Clave: " + value + " = " + persona[value])
}


//Funciones como objeto
/*No es buena práctica a menos que tratemos con clases, los constructores son propios
de ellas*/
function funcObjeto(nombre,edad){
    this.nombre = nombre
    this.edad = edad
}

let persona3 = new funcObjeto("antonio",42)
console.log(persona3.nombre + " tiene " + persona3.edad + " años")