function getAdmins(usuarios) {
    let admins = [];
    for([pessoa, funcao] of usuarios) {
        if(funcao == "Admin") {
            admins.push(" " + pessoa);
        }
    }
    return `Admins são:\n ${admins}.`;
}

const usuarios = new Map();

usuarios.set("Henrique", "Admin");
usuarios.set("Gilma", "Admin");
usuarios.set("Loro", "Senior");
usuarios.set("Paçoca", "Junior");

console.log(getAdmins(usuarios));