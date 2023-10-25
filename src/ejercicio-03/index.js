// 1.
const numero = 16

// 2.
const tipoNumero = > 0 ?
'positivo' :
'negativo o cero'
console.log ('El numero es positivo  ' + tipoNumero)

// 3 .
const cadena = 'Hola Mundo'

// 4 .

const longitudCadena = cadena.length > 5 ? 'larga' : 'corta'
console.log ('La cadena es' + longitudCadena)

// 5 .
function esVocal(letra) {
    const vocales = 'aeiouAEIOU'
    return 
    vocales.includes (letra )
}

// 6 .
const caracter = 'e'
if
(esVocal(caracter))
{

console.log(caracter + ' es vocal')

}else{

    console.log(caracter + ' no es una vocal')
    
}
}