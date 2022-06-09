
const pessoa1 = {
    nome: "Henrique",
    idade: 27,
}

const pessoa2 = {
    nome: "Tayna, Vulgo Golpe",
    idade: 27,
}

const pessoa3 = {
    nome: "Rose",
    idade: 36,
}

const pessoa4 = {
        nome: "Tania",
        idade: 29,
}

const animal1 = {
    nome: "Loro",
    idade: 22,
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.apply(animal1, [14]));