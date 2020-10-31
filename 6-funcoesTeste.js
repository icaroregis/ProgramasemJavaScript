//Crie uma função com as seguintes características:
//1. A função deve receber 3 argumentos.
//2. Se somente um argumento for passado, retorne o valor do argumento.
//3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
//4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
//5. Se nenhum argumento for passado, retorne o valor booleano `false`.
//6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
function teste(a, b, c) {
    if (a !== undefined && b === undefined && c === undefined) {
        return a;
    } else if (a !== undefined && b !== undefined && c === undefined) {
        return a + b;
    } else if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    } else if (a === undefined && b === undefined && c === undefined) {
        return false;
    } else {
        return null;
    }
}
console.log(teste(10, 20, 30));
