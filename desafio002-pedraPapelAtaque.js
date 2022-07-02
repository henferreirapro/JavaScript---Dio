const jogador1 = ["Ataque", "Pedra", "Pedra", "Papel",
 "Ataque", "Papel", "Papel", "Pedra", "Ataque"];

const jogador2 = ["Pedra", "Ataque", "Papel", "Pedra",
 "Papel", "Ataque", "Papel", "Pedra", "Ataque"];

//ataque>pedra, pedra>papel, ataque>papel,
function verificaJogadas(jogador1, jogador2) {
    for(let i = 0; i <= jogador1.length; i++) {
        if(jogador1[i] === "Ataque" && jogador2[i] === "Pedra") {
            console.log("Jogador 1 venceu");
        } else if(jogador1[i] === "Pedra" && jogador2[i] === "Ataque") {
            console.log("Jogador 2 venceu");
        } else if(jogador1[i] === "Pedra" && jogador2[i] === "Papel") {
            console.log("Jogador 1 venceu");
        } else if(jogador1[i] === "Papel" && jogador2[i] === "Pedra") {
            console.log("Jogador 2 venceu");
        } else if(jogador1[i] === "Ataque" && jogador2[i] === "Papel") {
            console.log("Jogador 1 venceu");
        } else if(jogador1[i] === "Papel" && jogador2[i] === "Ataque") {
            console.log("Jogador 2 venceu");
        } else if(jogador1[i] === "Papel" && jogador2[i] === "Papel") {
            console.log("Ambos venceram");
        } else if(jogador1[i] ==="Pedra" && jogador2[i] === "Pedra") {
            console.log("Sem ganhador");
        } else if(jogador1[i] === "Ataque" && jogador2[i] === "Ataque") {
            console.log("Aniquilacao mutua");
        }
    }
}

verificaJogadas(jogador1, jogador2)