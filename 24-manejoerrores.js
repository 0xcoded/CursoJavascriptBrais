//EXCEPCIÓN: Evento anómalo

let newVar

try{
    console.log(newVar.email)
    console.log("Continua el flujo")
} catch{
    console.log("Se ha producido un error, sin log")
}

/*try{
    console.log(newVar.email)
} catch(error){
    console.log("ERROR!: " + error.message)
}*/

try{
    console.log(newVar.email)
} catch(error){
    console.log("ERROR!: " + error.message)
} finally{                              //Se ejecuta se cumpla o no el try/catch
    console.log("Este código se ejecuta siempre")
}

//NOTA: Si no posee catch, el try no sirve de nada, es lo mismo que no utilizarlo
/*try{
    console.log(newVar.email)
} finally{                              //Se ejecuta se cumpla o no el try/catch
    console.log("Este código se ejecuta siempre")
}*/ //Va a lanzar el error, como si el try/catch no existiera ya que no se maneja
    //la excepción

//LANZAMIENTO DE ERRORES
//Útil según la lógica de programación aplicada a la aplicación

//throw new Error("Se ha producido un error a propósito")

function sum(a,b){
    if(typeof a !== "number" || typeof b !== "number"){     //Solo comprueba si son números, no si es un número entero (Number.isInteger(var))
        throw new TypeError("No son números")
    }
    if(!Number.isInteger(a) || !Number.isInteger(b)){   //Comprobar si es un entero y no otro tipo de dato primitivo, como un string de enteros (inválido)
        throw new Error("No es un número entero")       //Al generar un error, finaliza la ejecución de esta función, por lo que no es necesario un "else" para la última línea
    }
    if(a==0 || b==0){
        throw new MiError("Este es un error custom en una clase con herencia de Error")
    }
    console.log(a+b)
    
}

//Crear errores personalizados

class MiError extends Error{
    constructor (message,a,b){
        super(message)
        this.a=a
        this.b=b
    }

    printNumbers(){
        console.log(`${this.a} + ${this.b}`)
    }
}       //La clase se define antes del throw new "ClaseErrorCustom, de lo contrario crea excepción"

try{
    sum(40,10)
    console.log("Todo correcto")
}  catch (error) {
    if (error instanceof TypeError) {
        console.log(`Se ha producido un error de tipo: ${error.message}`);
        error.printNumbers()
    } else if (error instanceof Error) {    //TypeError va antes de Error, ya que un TypeError es un tipo de error, lo cual contaría como error y no typeError
        console.log(`Se ha producido un error: ${error.message}`);
        error.printNumbers()
    }
    
} finally {
    console.log("Fin de la comprobación")
}  


