function multiplicador(numero) {
    let lista = [];

    for (let cont = 0; cont < numero.length; cont++) {
        lista.push(numero[cont] * 2);
    }

    return lista;
}

const num = [3, 5, 54, 6, 12, 8, 19];

console.log(`A lista de números que serão multiplicados é: \n - ${num}.`)
console.log(`O resultado dos mumeros multiplicados são: \n - ${multiplicador(num)}.`);
