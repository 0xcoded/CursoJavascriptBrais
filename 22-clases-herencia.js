class Persona{
    #bank       //DECLARACIÓN DE LA PROPIEDAD PRIVADA
    constructor(nombre="Sin nombre",edad=null,poblacion="Ninguna",bank){
        this.nombre = nombre
        this.edad = edad
        this.poblacion = poblacion
        this.#bank = bank       //Propiedad privada, utilizar this.#var, declarada antes del constructor
    }

    mayorEdad(edad){
        if(edad>=18){
            console.log("Mayor de edad")
        } else {
            console.log("Menor de edad")
        }
    }

}

let persona = new Persona("David",17,"Valencia","IBAN123456789")
let datosDefault = new Persona()
console.log(persona)
console.log(datosDefault)

console.log(typeof persona)     //¡¡OBJETO!! No es un dato primitivo

//Acceso a propiedades
persona.nombre = "Lorena"

console.log(persona)

//Metodos
persona.mayorEdad(persona.edad)

console.log(persona.bank)       //UNDEFINED porque la propiedad es privada

//GETTER Y SETTER

class GetPersona{
    #nombre
    #edad
    #poblacion
    constructor(nombre="Sin nombre",edad=null,poblacion="Ninguna",bank){
        this.#nombre = nombre
        this.#edad = edad
        this.#poblacion = poblacion
    }

    get nombre(){
        return this.#nombre
    }

    get poblacion(){
        return this.#poblacion
    }

    set poblacion(nuevaPoblacion){
        this.#poblacion = nuevaPoblacion
    }
}

persona1 = new GetPersona("david",34,"valencia")
console.log(persona1.nombre)
persona1.poblacion ="Madrid"
console.log(persona1.poblacion)


//HERENCIA
class Animal{
    constructor(name){
        this.name = name
    }

    sound(){
        console.log("Sonido")
    }
}

class Cat extends Animal{

    constructor(name,raza){
        super(name)
        this.raza=raza
    }

    run(){
        console.log("El gato esta corriendo")
    }

    sound(){        //SOBRESCRIBIMOS EL METODO SOUND para esta subclase heredada
        console.log("Maullando")
    }
}

let myAnimal = new Cat("chusty","breton")
myAnimal.sound()        //Metodo de cat
myAnimal.run()          //Metodo de Animal, el cual lo hereda cat de Animal
console.log(myAnimal.name)  //Podemos acceder al nombre sin problemas, a menos que la hagamos privada con #
console.log(myAnimal.raza)

class Operaciones{
    static suma(a,b){
        return a + b
    }
}

console.log(Operaciones.suma(1,3))       //STATIC: No requiere instanciar la clase