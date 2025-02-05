let age = 35

if(age==34){
    console.log("Tu edad está bien")
} else if(age < 18){
    console.log("Menor de edad")
} else {
    console.log("Mayor de edad pero la edad no está bien")
}

// Operador ternario

age == 34 ? console.log("DAVID") : console.log("OTRO")

// Asignando operador ternario
const resultado = age == 34 ? "OK" : "NO"
console.log(resultado)


// switch

let day = 1
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sábado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "Día de la semana incorrecto"
}

console.log(dayName)