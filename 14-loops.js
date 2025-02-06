//FOR

for(let i=0;i<5;i++){
    console.log(i+1)
}

let myArray = []
myArray.push("david")

for(let j=0;j<myArray.length;j++){
    console.log(`Elemento ${j}: ${myArray[j]}`)
}

//WHILE

let i = 0
while(i<10){
    console.log(i)
    i++
}



//do while

i=90

do {
    console.log("Almenos se ejecuta una vez")
    i++
} while(i<5)

//Bucle infinito (while true)

/*while(true){
    console.log("Saliendo del while true")
    return false
}*/


//FOR OF (recorrer estructuras)

let array = new Array(3)
array[0] = "David"
array[1] = 34
array[2] = true

let mySet = new Set(['david','valls','test','da costa'])

let myMap = new Map()

myMap = new Map([
    ['name', 'david'],
    ['edad', 34]
])

let nombre = "David"
nombre = nombre.toUpperCase()

for(let valor of array) {       //Recorremos array y asignamos el valor a la variable "valor"
    console.log(valor)
}

for(name of nombre){
    console.log(name)
}

for(i=0;i<10;i++){
    if(i==5){
        continue    //NO HACER NADA SI VALE 5
    }
    console.log(i)
    if(i==8){
        break       //SI VALE 8 SE ROMPE EL BUCLE
    }
}