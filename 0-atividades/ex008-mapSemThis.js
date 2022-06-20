function mapSemThis(lista) {
    return lista.map(function(item) {
        return item * 2;
    });
}

const numeros = [3, 4, 5, 8, 9];

console.log("A lista de numeros a multiplicar são:", numeros);
console.log("Os numeros multiplicados ficaram:",mapSemThis(numeros));