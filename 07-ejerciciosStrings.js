// 1. Concatena dos cadenas de texto.
let a = "Texto 1 "
let b = "y dos"
let total = a + b
console.log(total)
// 2. Muestra la longitud de una cadena de texto.
let longitud = total.length
console.log(longitud)
// 3. Muestra el primer y Ãºltimo carÃ¡cter de un string.
console.log(total[0] + " - " + total[longitud-1])

// 4. Convierte a mayÃºsculas y minÃºsculas un string.
let mayusculas = total.toUpperCase()
let minusculas = total.toLowerCase()
console.log(mayusculas)
console.log(minusculas)

// 5. Crea una cadena de texto en varias lÃ­neas.
let variasLineas = `Esto es
una
prueba`
console.log(variasLineas)

// 6. Interpola el valor de una variable en un string.
console.log(`En mayúsculas es ${mayusculas}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones.
mayusculas = mayusculas.replace(/ /g, "-")
console.log(mayusculas)

// 8. Comprueba si una cadena de texto contiene una palabra concreta.
console.log(mayusculas.includes("TEXTO"))

// 9. Comprueba si dos strings son iguales.
console.log(mayusculas === minusculas)

// 10. Comprueba si dos strings tienen la misma longitud.
console.log(a.length == b.length)