function verificaPatinhos(num) {
    let i = 0;
    while(i <= num.length) {
        if(num[i] == 0) {
            console.log(num[i]);
            i++
        } else if(num[i] != -1) {
            let sub = num[i] - 1;
            console.log(sub);
            i++
        } else {
            return;
        }
    }
}

const lista1 = [0, 1, 2, 10000, -1];
const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20, 30, 40, 50, 60, -1];

verificaPatinhos(lista1);
verificaPatinhos(lista2);