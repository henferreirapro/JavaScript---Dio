/*1 - Crie uma função que recebe um array alunos e um numero 
que irá representar a média final*/

const alunos = [
    {
        nome: "Henrique",
        nota: 7
    },
    {
        nome: "Giovanna",
        nota: 9
    },
    {
        nome: "Jessy",
        nota: 6
    },
    {
        nome: "Jhona",
        nota: 4
    },
];


function retornaNomeNota({primeiroAluno: {primeiroNome: nome, notaBase: nota}}) {
    return `Nome: ${nome}, nota ${nota}`;
}

function retornaAprovados(indice, media) {
    let aprovados = [];

    for(let cont = 0; cont < indice.length; cont++) {
        const {nome, nota} = indice[cont];
        
        if(nota >= media) {
            aprovados.push(" " + nome);
        }
    }
    return `Aprovados:\n ${aprovados}.`;
}

console.log(retornaAprovados(alunos, 5));