const mao1 = [10,/* 2, 12, 2*/];
const mao2 = [7, /*2, 11, 13*/]; 

function verificaMelhorMao(mao1, mao2) {
    
    for(let i = 0; i <= mao1.length; i++) {
        if(mao1[i] > mao2[i]) {
            return mao1[i];
        } else if(mao1[i] < mao2[i]) {
            return mao2[i];
        } else if(mao1[i] === mao2[i]) {
            return mao1[i];
        } else {
            console.log("mãos incorretas, TRAPAÇAAAA!!!")
        }
    }
}

console.log(verificaMelhorMao(mao1, mao2));