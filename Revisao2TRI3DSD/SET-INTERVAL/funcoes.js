// DECLARAÇÃO DE FUNÇÕES
function dizOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log("Olá," + nome);
}
const salario = 2500;
function formataSalario() {
  return "R$" + salario + ",00";
}

//FUNÇÕES DO TIPO ARROW (FUNÇÃO SETA)
const imprimeMeuTime = () => {
  return "Encapados FC";
};

// INVOCAÇÃO DE FUNÇÕES
dizOla();
olaPessoa("João");
//formataSalario();
console.log(formataSalario());
// olaPessoa("Maria");

console.log(imprimeMeuTime());
