// 1. Usa desestructuraciÃ³n para extraer los dos primeros elementos de un array.
let myArray = ["david","valls","valencia"]
let [nombre,apellido] = myArray
console.log(nombre + " " + apellido)
// 2. Usa desestructuraciÃ³n en un array y asigna un valor predeterminado a una variable.
let [name1,surname,,email="davidvallsdacosta1@gmail.com"] = myArray
console.log(email)
// 3. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto.
let persona = {
    name: "david",
    age: 34,
    location: "España",
    job: {
        exp: 15
    }
}

let persona2 = {
    name: "fernando",
    age: 37,
    location: "Alemania",
    job: {
        exp: 16
    }
}

let {name, age} = persona
console.log(name + " " + age)
// 4. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto y asÃ­gnalas a nuevas variables con nombres diferentes.
let {name: nombre2, age:edad} = persona
console.log(nombre2 + " " + edad)
// 5. Usa desestructuraciÃ³n para extraer dos propiedades de un objeto anidado.
let {name: nombre3, age:edad1, job:{exp}} = persona
console.log(nombre3 + " " + edad1 + " " + exp)
// 6. Usa propagaciÃ³n para combinar dos arrays en uno nuevo.
let myArray1 = [1,2,3,4]
let myArray2 = [5,6,7,8]
let myArray3 = [...myArray1,...myArray2]
console.log(myArray3)

// 7. Usa propagaciÃ³n para crear una copia de un array.
let myArray4 = [...myArray1]
console.log(myArray4)

// 8. Usa propagaciÃ³n para combinar dos objetos en uno nuevo.

let newObject = {...persona,...persona2}
console.log(newObject)

// 9. Usa propagaciÃ³n para crear una copia de un objeto.
let copy = {...persona}
console.log(copy)

// 10. Combina desestructuraciÃ³n y propagaciÃ³n.
let numbers = [100, 200, 300, 400, 500]
let [num1, num2, ...rest] = numbers //Toma los dos primeros valores del array y crea un array
console.log(num1)
console.log(num2)
console.log(rest)