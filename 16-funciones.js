function miFuncion (){
    console.log("Desde la función")
}
let i = 0
while(i<5){
    miFuncion()
    i++
}

function funcionConParametros(nombre){
    console.log(`Hola ${nombre}`)
}

funcionConParametros("david")

//Funciones anónimas
const func2 = function(name){
    console.log("Valor: "+ name)
}

func2("prueba")

//Arrow functions (Una sola linea de codigo, para abreviar)

const func3 = (name) => console.log("Sólo una linea de codigo, " + name)

func3("david")

//Valores default

function defaultSum(a=0,b=0){
    console.log(a+b)
}

defaultSum()
defaultSum(1)
defaultSum(1,90)
defaultSum(b=10)

//RETORNO  
function funcReturn(name){
    return "Hola, " + name
}

console.log(funcReturn("david"))

//Funciones anidadas

function externa(){
    console.log("Funcion 1")
    function interna(){
        console.log("Funcion 2 dentro de funcion 1")
    }
    interna()
}

externa()
//externa().interna()   ==> ERROR!!

//Funciones de orden superior, pasar funcion y argumentos usados en la funcion

function superFunction(func, param){
    func(param)
}

/*La funcion es un parámetro como tal, a tal funcion se le pasa un nombre que es requerido por la
función superior*/
superFunction(funcionConParametros,"alberto")


//ForEach
let myArray = [1,2,3,4,5]

//Puede iterar arrays, maps, sets... elementos iterables
//cada valor pasa a la variable value, y ejecuta un código, como es una línea uso Arrow Function
myArray.forEach((value) => console.log("valor " + value))

myArray.forEach(function (value){
    console.log(value)
})