// 1. Crea una variable para cada operaciÃ³n aritmÃ©tica.
let a = 10
let b = 20
let suma = a + b
let resta = a - b
let multip = a * b
let division = a / b
let exponente = a ** b
let resto = a % b

// 2. Crea una variable para cada tipo de operaciÃ³n de asignaciÃ³n, que haga uso de las variables utilizadas para las operaciones aritmÃ©ticas.
suma += 1
resta -= 1
multip *= 2
division /= 2
exponente **= 2
resto %= 2
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparaciÃ³n.
console.log(suma - 1 == (a+b))
console.log(resta + 1 == (a-b))
console.log(multip / 2 == (a*b))
console.log(division * 2 == (a/b))
console.log(5=="5")


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparaciÃ³n.
console.log(!(suma - 1 == (a+b)))
console.log(!(resta + 1 == (a-b)))
console.log(!(multip / 2 == (a*b)))
console.log(!(division * 2 == (a/b)))
console.log(!(5=="5"))
// 5. Utiliza el operador lÃ³gico and.
console.log(5==5 && a ==b)

// 6. Utiliza el operador lÃ³gico or.
console.log(5==5 || a ==b)
// 7. Combina ambos operadores lÃ³gicos.
console.log((5==5 && a==b) || b==a)
// 8. AÃ±ade alguna negaciÃ³n.
console.log((5==5 && a==b) || b!=a)
// 9. Utiliza el operador ternario.

let estaLloviendo = false
estaLloviendo ? console.log("Esta lloviendo") : console.log("No está lloviendo")

!estaLloviendo ? console.log("Esta lloviendo") : console.log("No está lloviendo")

// 10. Combina operadores aritmÃ©ticos, de comparÃ¡ciÃ³n y lÃ³gicas.
let resultado = (5 + 3) * 2 > 10 && (4 * 2) === 8;
console.log(resultado)