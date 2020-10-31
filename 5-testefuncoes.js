//Crie uma função com as seguintes características:
//1. A função deve receber 3 argumentos;
//2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
//    Preencha todos os valores corretamente!
//3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.

function teste(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        return "Preencha todos os valores corretamente!";
    } else {
        return a * b * c + 2;
    }
}

console.log(teste(10, 10, 10));
console.log(teste(10, 10));
