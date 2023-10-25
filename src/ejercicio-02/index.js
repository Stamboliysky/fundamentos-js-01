// 1.
const puntuacion = 85
// 2. condicional if/else
if (puntuacion>= 70) {console.log('Aprobado')
 }else{
console.log
('Reprobado')
} 
//3.
const dia = 3
// 4 .
switch (dia) {
    case 1:
        console.log
        ('Lunes')
        break;
    case 2:
    console.log 
    ('Martes')
        break
    case 3:
      console.log 
      ('Miercoles')
    break
    case 4:
      console.log 
      ('Jueves')
      break
    case 5:
      console.log
      ('Viernes')
      break
    case 6:
      console.log 
      ('Sabado')
      break
    case 7:
      console.log
      ('Domingo')
      default:
        console.log
        ('Dia invalido')
}

function
 convertirFahrenheit
(celsius) {
    return (celsius * 9) / 5 +32
   
}

// 6 .
const
temperaturaCelsius = 25
const 
temperaturaFahrenheit = convertirFahrenheit 
(temperaturaCelsius)
console.log 
('Temperatura en Fahrenheit : ' + temperaturaFahrenheit)

// 7.
function esPar(numero) 
{
   return numero % 2
   === 0 
}

// 8.
const numeroPar = 10
if (esPar(numeroPar)){
    console.log 
    (numeroPar + 'es par')
}else{
    console.log (numeroPar + 'es impar'
    )
}














