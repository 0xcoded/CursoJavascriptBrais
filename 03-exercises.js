// 1. Escribe un comentario en una lÃ­nea.

//Esto es un comentario

// 2. Escribe un comentario en varias lÃ­neas.

/*esto es un
comentario en
varias lineas */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos.
let edad = 34
let nombre = "david"
let estudiante = true
let miSimbolo = Symbol("simbolo")
let miBigInt = BigInt(92847592873957293475923745927349529346110574872938503470523749527308349387693879673459763948769385769387569384756983475968374596873498576938579683794567838057657860287560387506874567)
let noDefinido
let valorNulo = null

// 4. Imprime por consola el valor de todas las variables.
console.log(edad)
console.log(nombre)
console.log(estudiante)
console.log(miSimbolo)
console.log(miBigInt)
console.log(noDefinido)
console.log(valorNulo)

// 5. Imprime por consola el tipo de todas las variables.
console.log(typeof edad)
console.log(typeof nombre)
console.log(typeof estudiante)
console.log(typeof miSimbolo)
console.log(typeof miBigInt)
console.log(typeof noDefinido)
console.log(typeof valorNulo)

// 6. A continuaciÃ³n, modifica los valores de las variables por otros del mismo tipo.
edad = 20
nombre = "Brais"
estudiante = false
miSimbolo = Symbol("testSimbol")
miBigInt = BigInt(1212121212121212121212121212121212121212121212121212121212121212121212)
noDefinido = "Definido como string"
valorNulo = "Ya tiene valor"

// 7. A continuaciÃ³n, modifica los valores de las variables por otros de distinto tipo.
edad = "brais"
nombre = 20
estudiante = "test"
miSimbolo = 12
miBigInt = Symbol("test")
noDefinido = "Da igual la definicion, está a la espera"
valorNulo = true

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos.

const edad2 = 34
const nombre2 = "david"
const estudiante2 = true
const miSimbolo2 = Symbol("simbolo")
const miBigInt2 = BigInt(92847592873957293475923745927349529346110574872938503470523749527308349387693879673459763948769385769387569384756983475968374596873498576938579683794567838057657860287560387506874567)
//const noDefinido2
const valorNulo2 = null

// 9. A continuaciÃ³n, modifica los valores de las constantes.
/*edad2 = 34
nombre2 = "brais"
estudiante2 = false
miSimbolo2 = Symbol("simbolo3")
miBigInt2 = BigInt(928479287492874592873957293475923745927349529346110574872938503470523749527308349387693879673459763948769385769387569384756983475968374596873498576938579683794567838057657860287560387506874567)
noDefinido2 = "test"
valorNulo2 = "String, no nulo, ya tiene valor"*/

// 10. Comenta las lÃ­neas que produzcan algÃºn tipo de error al ejecutarse.