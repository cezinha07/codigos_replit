const pessoas = [
  { nome: "José", idade: 30, sexo: "M" },
  { nome: "Maria", idade: 16, sexo: "F" },
  { nome: "Pedro", idade: 18, sexo: "M" },
  { nome: "Joana", idade: 35, sexo: "F" },
  { nome: "André", idade: 35, sexo: "M" },
];

const animais = [
  { raça: "cachorro", pelo: "branco", sexo: "M" },
  { raça: "Passaro", pelo: "preto", sexo: "M" },
  { raça: "Gato", pelo: "preto", sexo: "M" },
  { raça: "Cachorro", pelo: "branco", sexo: "F" },
];

const meninas = [];
const meninos = [];
function filtroPessoas(arrPessoas) {
  if (typeof arrPessoas == "object") {
    for (pessoa of arrPessoas) {
      pessoa.sexo == "F" ? meninas.push(pessoa) : meninos.push(pessoa);
    }
  }
}
filtroPessoas(pessoas);
filtroPessoas(animais);

console.log("---meninas---");
console.log(meninas);
console.log("---meninos---");
console.log(meninos);
