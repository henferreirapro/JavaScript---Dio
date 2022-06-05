function aumento(valor) {
    const menosDeDois = valor <= 2000;
    const MenosDeMil = valor <= 1000;

    if (MenosDeMil) {
        return "Voce recebe muito pouco, iremos adicionar 10% no seu salario.";
    } else if (!MenosDeMil && menosDeDois) {
        return "Seu salario está entre 1000 e 2000, então receberá um aumento de 5%.";
    }
    return "Seu salario já é muito alto para receber aumento no momento.";
}

console.log(aumento(1670))
console.log(aumento(2450))
console.log(aumento(900))
