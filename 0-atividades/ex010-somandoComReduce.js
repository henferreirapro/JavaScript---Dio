const somaNumeros = function(numeroAnterior, numeroAtual) {
    const resultado = numeroAtual + numeroAnterior;

    return resultado;
}

function somaNumeros2(lista) {
    return lista.reduce(function(numAnterior, numAtual){
        return numAnterior + numAtual;
    })
}

const lista = [2, 3, 5, 7, 8]; //25

//console.log(`O resultado da soma de ${lista} é: ` + lista.reduce(somaNumeros));
console.log(`O resultado da soma de ${lista} é: \n` + somaNumeros2(lista));