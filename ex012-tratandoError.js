function verificaErros(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Envie os Parametros!");

        if(typeof arr !== "object") 
            throw new TypeError("Parametro Array precisa ser do tipo 'object'.");
        
        if(typeof num !== "number") 
            throw new TypeError("Parametro Num precisa ser do tipo 'Number'.");
        
        if(arr.length !== num)
            throw new RangeError("Parametros Array e Num tem tamanhos diferentes!");
        
        return arr;
    }
    catch (item) {
        if(item instanceof ReferenceError) {
            return "Esse erro é do tipo ReferenceError! " + item.message;
        } else if(item instanceof TypeError) {
            console.log("Esse erro é do tipo TypeError! " + item.message);
        } else if(item instanceof RangeError) {
            return "Esse erro é do tipo RangeError! " + item.message;
        } else {
            console.log("Erro inesperado!!! " + item.message);
        }
    }
}

console.log(verificaErros([1, "Olá, Mundo"], 2));
console.log(verificaErros([], 3));