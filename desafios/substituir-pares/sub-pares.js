function substituiPares(array) {
    if (!array) return "Parametro indefinido, adicionando -1.";
    if (!array.length) return "Lista vazia, retornando -1.";

    for (let lista = 0; lista < array.length; lista++) {
        if (array === 0) {
            console.log("Item já é zero"); 
        } else if (array[lista] % 2 === 0) {
            console.log("item é par, substituindo por 0.");
            array[lista] = 0;
        }
    }
    return array;
}
var arr = [2, 3, 4, 5, 9, 6]
console.log(substituiPares(arr));
