function funcionario() {
  return {
    nome: "Caio",
    profissao: "Garoto de Programa",
    idade: 18,
  };
}
setInterval(() => {
  console.log(funcionario());
}, 2000);


const intervalo1 = setInterval(() => {
  console.log(funcionario());
}, 2000);
// setTimeout - clearTimeout
// setInterval - clearInterval
// clearInterval(intervalo1) // Roda imediatamente

setTimeout(function() {
  clearInterval(intervalo1);
  console.info("Intervalo 1 foi cancelado")
}, 5000)