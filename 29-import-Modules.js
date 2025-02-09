//RECORDAR: Módulos extensión MJS (en NODEJS), o usar package.json

import {add,PI,Circle} from "./28-Export-Modules.js"
//Importación por defecto, puede tener cualquier nombre porque JS ya tiene definido que exportar por defecto
import resta from "./28-Export-Modules.js"  //Recordar, no tiene porqué ser el mismo nombre en una exportación default

console.log(add(8,2))
console.log(PI)
console.log(resta(8,2))

//Clases
let circle = new Circle(12)
console.log(circle.area())

//Módulos externos
//const operatingSystem = require("os")     --> ERROR!! No se pueden importar modulos externos y locales juntos
//El módulo os pertenece a NODEJS