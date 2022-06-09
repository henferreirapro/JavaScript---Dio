function classesListas(valores) {
    console.log("Informe por favor os seguintes dados:")
    for(propriedades in valores) {
        //console.log(`Informe por favor o seguinte dado: ${propriedades}.`);
        console.log(`${propriedades}:`);
    }
}

function valoresCadastro(dados) {
    for(valores in dados) {
        //console.log(`Os dados Cadastrais são: ${dados[valores]}.`);
        console.log(`${valores} é: ${dados[valores]}.`);
    }
}

const cadastro = {
    nome: "Henrique",
    idade: 27,
    profissão: "Dev Full Stack"
}

classesListas(cadastro);
valoresCadastro(cadastro);