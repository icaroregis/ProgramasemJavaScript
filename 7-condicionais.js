console.log("Trabalhando com consicionais");
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`, `Ceará`); // para adicionar itens na lista (push)
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade, permissão concedida para vender: ");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log(
        "Menor de Idade não pode ser vendido passagens a menores de idade"
    );
}
console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem!!!");
} else {
    consoleçlog("Você não pode embarcar!");
}

console.log(listaDeDestinos);
