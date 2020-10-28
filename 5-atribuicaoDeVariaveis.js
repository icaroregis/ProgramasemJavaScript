console.log("Atribuição de Variáveis");
const idade = 29; //variáveis constantes não podem ser reatribído valores a elas. Não variam
let nome = "Ricardo"; //variáveis lets podem serem reatribuídos valores. Ou seja , pode variar
const sobrenome = "Bugan";
console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);
nome = nome + sobrenome;
console.log(nome);
