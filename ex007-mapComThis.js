const banana = {
    valor: 3,
}

const pao = {
    valor: 2,
}

const numeros = [1, 2, 3, 4, 5];

function mapComThis(array, thisArg) {
    return array.map(function (item) {
        return item * this.valor;
    }, thisArg);
}

console.log("Os numeros que serão multiplicados são:", numeros);
console.log(`A QTD de banana multiplicada por ${banana.valor} são:`,mapComThis(numeros, banana));
console.log(`A QTD de pão multiplicada por ${pao.valor} são:`, mapComThis(numeros, pao));
