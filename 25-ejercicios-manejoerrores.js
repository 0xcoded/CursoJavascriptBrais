// 1. Captura una excepciÃ³n utilizando try-catch.
let newObject
try{
    console.log(newObject.name)
} catch(error){
    console.log(error.message)
}

// 2. Captura una excepciÃ³n utilizando try-catch y finally.
try{
    console.log(newObject.name)
} catch(error){
    console.log(error.message)
} finally {
    console.log("Fin del try/catch, se ejecuta siempre se cumpla o no")
}
// 3. Lanza una excepciÃ³n genÃ©rica.
a = 0
/*if(a!==10){
    throw new Error("El número " + a + " es diferente de 10")
}*/

// 4. Crea una excepciÃ³n personalizada.
class ErrorPersonalizado extends Error{
    constructor(message,a){
        super(message)
        this.a = a
    }
}

// 5. Lanza una excepciÃ³n personalizada.
//throw new ErrorPersonalizado("Esto es un error personalizado")

// 6. Lanza varias excepciones segÃºn una lÃ³gica definida.
function sumarEnteros(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Se ha producido un error normal, no es un numero")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){
        throw new TypeError("Error de tipo, no es entero")
    }

    console.log(a+b)
}

a=10
b=10
try{
    sumarEnteros(a,b)
} catch(error){
    if(error instanceof TypeError){
        console.log("Error de tipo: " + error.message)
    } else if(error instanceof Error){
        console.log("Error normal: " + error.message)
    }
} finally{
    console.log("FIN")
}


// 7. Captura varias excepciones en un mismo try-catch.
try{
    sumarEnteros(a,b)           //Funcional si es un numero y es entero
    //sumarEnteros(a,"b")       //Error normal
    sumarEnteros(a,10.5)        //Error de tipo
} catch(error){
    if(error instanceof TypeError){
        console.log("Error de tipo: " + error.message)
    } else if(error instanceof Error){
        console.log("Error normal: " + error.message)
    }
} finally{
    console.log("FIN")
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores.
let myArray = [1,2,3]
let myFloat = []
try{
    for(let i = 0;i < myArray.length;i++){
        if(typeof myArray[i] !== "number")
        {
            throw new Error(myArray[i] + " no es un número válido")
        } else {
            myFloat.push(parseFloat(myArray[i]))
        }
    }
} catch (error) {
    console.log("No se ha podido transformar: " + error.message)
} finally{
    console.log(myFloat)
}

// 9. Crea una funciÃ³n que verifique si un objeto tiene una propiedad especÃ­fica y lance una excepciÃ³n personalizada.
function checkProperty(obj,property){
    if(!obj.hasOwnProperty(property)){
        throw new Error("No existe la propiedad en el objeto")
    }

    return obj[property]
}

let person ={
    name: "David",
    edad: 34
}
try{
    console.log(checkProperty(person,"edad"))
    console.log(checkProperty(person,"trabajo"))
} catch (error){
    console.log(error.message)
}
// 10. Crea una funciÃ³n que realice reintentos en caso de error hasta un mÃ¡ximo de 10.

// NO PUDE SOLUCIONAR ESTE EJERCICIO, SOLUCIÓN DADA POR MOUREDEV (¡OJO!)
function unstableOperation() {
    if (Math.random() > 0.9) { // Genera un nÃºmero aleatorio entre 0 y 1 (Si no conoces "Math", el curso tiene una lecciÃ³n sobre mÃ³dulos)
        console.log("OperaciÃ³n correcta")
    } else {
        throw new Error("Error inesperado")
    }
}

function retryOperation() {
    const maxRetries = 10
    let attempts = 0
    let success = false

    while (attempts < maxRetries && !success) {
        try {
            unstableOperation()
            success = true
        } catch (error) {
            attempts++
            console.log(`Intento ${attempts} fallido: ${error.message}`)
        }
    }

    if (!success) {
        console.log("Se ha alcanzado el mÃ¡ximo nÃºmero de intentos. OperaciÃ³n fallida.")
    }
}

retryOperation(10)