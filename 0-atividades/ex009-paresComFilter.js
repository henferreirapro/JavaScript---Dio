function filtraPares(lista) {
    const filtro = lista.filter((item) => item % 2 === 0);

    return filtro;
}

const lista = [1, 3, 5, 18, 6, 22, 99];

console.log("Lista de números:", lista);
console.log("Os números pares dessa lista é:", filtraPares(lista));