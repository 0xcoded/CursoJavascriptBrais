//Desestructuración: Sintaxis que permite extraer valores de arrays o objetos y asignar a variable
let persona = {
    name: "david",
    age: 34,
    location: "España",
    job: {
        exp: 15
    }
}

let myArray = ["david",34,"Valencia"]

//ERROR: let var0,var1,var2 = myArray
//No se puede redeclarar, incluso sin let o const
let [var0,var1,var2,var3="no existe"] = myArray     //No existe un cuarto valor, se asigna un dato primitivo
//la variable puede tener cualquier normbre
console.log(var0)
console.log(var1)
console.log(var2)
console.log(var3)

//Ignorar elementos, no asignar nombre de variable
//elementos 1 y 3
let [var4,,var5] = myArray
console.log(var4)
console.log(var5)

//Desestructuración de objetos
//La variable debe ser la clave (key) del objeto a declarar
let {name,age,location,email="davidvallsdacosta1@gmail.com"} = persona   //Los objetos empiezan con llaves al crearse, recordar
//email no existe, pero tiene un valor por defecto, lo cual no retorna "undefined"
console.log(email)


//Desestructuración de objetos con nuevo nombre de variable
let {name:nombre,age:edad,location:pais} = persona
console.log(pais)

//Desestructuración de objetos anidados
let {job:{exp: experiencia}} = persona
console.log(experiencia)

//Propagación
//operador: ... (tres puntos) Permite expandir un objeto o array a otros arrays u objetos
let myArray2 = [...myArray] //Copia
console.log(myArray2)

let myExtendedArray = [...myArray2,"test"]  //Creamos la copia pero agregamos "test" al array
console.log(myExtendedArray)

//Combinación de arrays
let myArray3 = [...myArray,...myArray2]
console.log(myArray3)

//Propagación de objetos
let objectoPersona = {...persona,email:"davidvallsdacosta1@gmail.com"}
console.log(objectoPersona)