function tabuada(num) {
    let numero = num;
    let contador = 0;

    console.log(`Tabuada do número ${numero}:`);
    while(contador <= 10) {
        console.log(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
    }
}

tabuada(2);