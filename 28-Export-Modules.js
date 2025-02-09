//RECORDAR: Módulos extensión MJS (en NODEJS), o usar package.json

export function add(a,b){       //EXPORT para que se pueda utilizar en otro js, éste sería el módulo
    return a+b
}

export const PI = 3.1416

//Exportación default (SOLO PUEDE HABER UNA EXPORTACIÓN POR DEFECTO)
//No se pueden exportar propiedades por defecto
//export default name = "David"     --> ERROR, duplicado e inválido

export default function substract(a,b){
    return a-b
}

export class Circle{
    constructor(radious){
        this.radious = radious
    }

    area(){
        return Math.PI * Math.pow(this.radious,2)
    }
}