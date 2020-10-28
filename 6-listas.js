console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`; ctr + k + u retira os comentários
// const rioDeJaneiro = `Rio de Janeiro`; ctrl + k + c atalho pra comentar um bloco de códigos

// Acrescentando um item a lista.
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);
listaDeDestinos.push(`Curitiba`, `Ceará`); // para adicionar itens na lista (push)
console.log(listaDeDestinos);

// Removendo um item da lista.
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
