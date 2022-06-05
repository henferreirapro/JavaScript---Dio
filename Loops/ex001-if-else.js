function mensagem(string) {
    let resposta;
    if (string == "Henrique") {
        resposta = console.log("Olá Henrique, prazer em conhece-lo!");
    } else {
        resposta = console.log(`Olá ${string}, seja bem vindo(a)!`);
    }
    return resposta;
}

mensagem("Henrique")
mensagem("Gilma")