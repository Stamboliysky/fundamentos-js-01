// 1. Variable 'hora .
const hora = 15

// 2. Constantes aniladas para determinar el momento del dia.
if (hora<12){
    console.log ('Buenos dias')
}else if (hora >= 12 && hora< 18) {
    console.log('Buenas tardes')
}else {
    console.log('Buenas noches')
} 
// 3 Funccion esMayorDeEdad.
function esMayorDeEdad(edad) {
    return edad >= 18
}

// 4. Condicionales anilados con operador logico para verificar mayor de edad y estudiante.
const esEstudiante = 20
const edadPersona = 20

if (esMayorDeEdad(edadPersona) && esEstudiante) {
    console.log('Es mayor de edad y estudiante ')
}else{
    console.log ('No cumple ambas condiciones')
}
// 5. Función esVocal.
function esVocal(letra) {
    const vocales = 'aeiouAEIOU'
    return vocales.includes(letra)
}

// 6. Utiliza la funcion esVocal.
const letraCaracter = 'A'
if (esVocal(letraCaracter)) {
    console.log (letraCaracter + ' es una vocal')
    
}else{
    console.log(letraCaracter + ' no es una vocal')
}




















0