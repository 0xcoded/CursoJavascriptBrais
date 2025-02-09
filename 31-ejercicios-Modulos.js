/* 1. Exporta una funciÃ³n.
export function add(a,b){
    return a+b
}
// 2. Exporta una constante.
export const PI = 3.1416
// 3. Exporta una clase.
export class Perro{
    constructor(name){
        this.name = name
    }
    ladra(){
        console.log("El perro ladra")
    }
}
// 4. Importa una funciÃ³n.*/
import {suma} from "./modulos-ejercicio.js"
// 5. Importa una constante.
import {PI2} from "./modulos-ejercicio.js"

// 6. Importa una clase.
import { Perro2 } from "./modulos-ejercicio.js"
let perro2 = new Perro2("Simba")
perro2.ladra()

// 7. Exporta una funciÃ³n, una constante y una clase por defecto (en caso de que lo permita).
//Solo se puede una exportacion
// 8. Importa una funciÃ³n, una constante y una clase por defecto (en caso de que lo permita).
//Solo se puede una exportacion
// 9. Exporta una funciÃ³n, una constante y una clase desde una carpeta.
export function resta(a,b){
    return a-b
}

export const NOMBRE = "david"

export class Animal{
    constructor(name){
        this.name = name
    }
}

// 10. Importa una funciÃ³n, una constante y una clase desde un directorio diferente al anterior.
import {suma3,PI3,Perro3} from "./clases/export.js"
let perro3 = new Perro3("Simba")
perro3.ladra()