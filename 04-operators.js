// Operadores

//Aritméticos

let a = 5
let b = 12

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a ** b)

a++
b--
console.log(a)
console.log(b)

a += 2
a -= 10
b *= 2
b /= 2
a %= 2
a **= 2

// Comprobar igualdad por valor
console.log(a==b)

// Comprobar identidad por valor y tipo de dato
console.log(a===b)
//console.log(a + " - " + b)

console.log(a!=b)
a=b
console.log(a!=b)

console.log(a!==b)


// AND
console.log(b==b && a==a && a == 11)

//OR
console.log(a==1000 || a==a)

// NOT
console.log(!(a==1000) || a==1000)
console.log(!(a==1000 || a==1000))

// Operadores ternarios

const estaLloviendo = false

// if estalloviendo, esta lloviendo, else, no llueve
//Si se cumple la condición, ?, si no se cumple, :

estaLloviendo ? console.log("Esta lloviendo") : console.log("No llueve")
