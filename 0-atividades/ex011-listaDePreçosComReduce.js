const lista = [
    {
        nome: "Bolo",
        preco: 18,
    },
    {
        nome: "Bebida",
        preco: 12,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldo, lista) {
    return lista.reduce(function(saldoAnterior, saldoAtual, index){
        console.log(`rodada ${index +1}`)
        console.log(`Saldo atual: ${saldoAnterior}`);
        console.log(`Saldo a Subtrair: ${saldoAtual.preco}`);
        return saldoAnterior - saldoAtual.preco;
    }, saldo);
}

console.log("Saldo final disponivel: " + calculaSaldo(saldoDisponivel, lista));