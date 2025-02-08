// 1. Crea una clase que reciba dos propiedades.
class Person{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad = edad
    }
}

// 2. AÃ±ade un mÃ©todo a la clase que utilice las propiedades.
class Person2{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad = edad
    }

    nombreEdad(){
        console.log(this.nombre + " tiene " + this.edad + " años")
    }
}

// 3. Muestra los valores de las propiedades e invoca a la funciÃ³n.
let newPersona = new Person2("david",34)
newPersona.nombreEdad()

// 4. AÃ±ade un mÃ©todo estÃ¡tico a la primera clase.
class Person3{
    constructor(nombre,edad){
        this.nombre=nombre
        this.edad = edad
    }

    nombreEdad(){
        console.log(this.nombre + " tiene " + this.edad + " años")
    }

    static saludo(){
        console.log("Hola Mundo!")
    }
}

// 5. Haz uso del mÃ©todo estÃ¡tico.
Person3.saludo()

// 6. Crea una clase que haga uso de herencia.
class Genero extends Person3{
    static saludo(){
        console.log("Hola mundo 2!")
    }
}

Genero.saludo()

// 7. Crea una clase que haga uso de getters y setters.
class Person4{
    #nombre
    constructor(nombre,edad){
        this.#nombre=nombre
        this.edad = edad
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nombre){
        this.#nombre = nombre
    }
}



// 8. Modifica la clase con getters y setters para que use propiedades privadas.
class Person5{
    #nombre
    constructor(nombre,edad){
        this.#nombre=nombre
        this.edad = edad
    }

    get nombre(){
        return this.#nombre
    }

    set nombre(nombre){
        this.#nombre = nombre
    }
}
// 9. Utiliza los get y set y muestra sus valores.
let myPerson2 = new Person4("david",34)
myPerson2.nombre = "Noelia"
console.log(myPerson2.nombre)
// 10. Sobrescribe un mÃ©todo de una clase que utilice herencia.

class Person6 extends Person2{
    nombreEdad(){
        console.log("Es un secreto")
    }
}
let myPerson3 = new Person6("david",34)
myPerson3.nombreEdad()