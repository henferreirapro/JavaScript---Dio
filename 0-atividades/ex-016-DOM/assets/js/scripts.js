const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const classDark = 'dark-mode';

function alteraModulos() {
    alteraClasses();
    alteraTextos();
}

function alteraClasses() {
    button.classList.toggle(classDark);
    h1.classList.toggle(classDark);
    body.classList.toggle(classDark);
    footer.classList.toggle(classDark);
}

function alteraTextos() {
    const darkMode = "Modo Escuro";
    const lightMode = "Modo Claro";

    if(button.classList.contains(classDark)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + " ON";
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
}

button.addEventListener('click', alteraModulos);