console.log("\nTrabalhando com condicionais");
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`, `Ceará`); // para adicionar itens na lista (push)
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
const destino = "Ceará";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada;
console.log("Embarque: \n\n");

let contador = 0;
let destinoExiste = false;
while (contador < 5) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste == true) {
    console.log("Boa Viagem!!!");
} else {
    console.log("Desculpe tivemos um erro!!!");
}
