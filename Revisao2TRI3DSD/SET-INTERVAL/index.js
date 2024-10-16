// EX01
let salario = 1000;
const nome = "João";
const sobrenome = "Silva";

function imprimeDados() {
  const pessoa = "João: ${nome} ${sobrenome}";
  const salarioFormatado = "R$ ${salario},00";
  console.log(pessoa);
  console.log("Ganha: ", salarioFormatado);
}

imprimeDados();

// setInterval(function () {
//   console.clear()
//   console.log(salario)
//   salario = salario + 100;
// }, 200);
