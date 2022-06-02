
function palindromo(string) {
    for (let contador = 0; contador < string.length / 2; contador ++) {
        if (string[contador] !== string[string.length -1 -contador]) {
            return "Não é um palindromo";
        }
    }
    return "É um palindromo";
}

console.log(palindromo("ana"));
