// LOOPS SÃO LAÇOS DE REPETIÇÃO INFINITA
// for, for in, for of, foreach,  while, do while
// LOOP: INICIALIZAÇÃO, CONDIÇÃO DE PARADA, INCREMENTO
const pokedex = ["PIKACHU", "BULBASAUR", "CHARMANDER", "SQUIRTLE"];
//     0           1             2            3
const valores = [150, 250, 1000, 3500];

const pokemonList = [
  { nome: "PIKACHU", tipo: "ELÉTRICO" },
  { nome: "BULBASAUR", tipo: "GRAMA" },
  { nome: "CHARMANDER", tipo: "FOGO" },
  { nome: "SQUIRTLE", tipo: "ÁGUA" },
];
// FAÇA UM LOOP E RETORNE NOME+TIPO DE CADA POKEMON
for (let pokemon of pokemonList) {
  const nome = pokemon.nome;
  const tipo = pokemon.tipo;
  console.log("Nome: ${nome} Tipo: ${tipo}");
}

// for (let i = 0; i < pokedex.length; i++)

for (let i = 0; i < pokedex.length; i++) {
  //ALGUMA COISA....
}
// RETORNA OS INDICES
for (let i in valores) {
  console.log(valores[i]);
}
// RETORNA OS VALORES RELACIONADOS AOS INDICES
for (let i of pokedex) {
  console.log(pokedex[i]);
}
