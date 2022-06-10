const numeros = [30, 30, 40, 5, 223, 2049, 3034, 5];

function criandoArrayUnico(lista) {
    const numerosUnicos = new Set(lista);

    return [...numerosUnicos]; //spread
}

console.log(criandoArrayUnico(numeros));