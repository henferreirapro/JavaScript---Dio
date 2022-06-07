function subtração(num) {
    let contador = 6;
    let numero = num;

    do {
        console.log(`O resultado de ${numero} - ${contador} é ${numero - contador}.`);
        contador++;
    } while(contador <= 5)
}

subtração(4);