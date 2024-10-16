// OBJETOS SÃO ESTRUTURAS COMPLEXAS DE DADOS EM JAVASCRIPT
// OBJETOS SÃO ORGANIZADOS POR CHAVES-VALORES (key-value)
// CONTEM ATRIBUTOS E METODOS
// OBJETOS LITERIS

const banana = {
  cor: "amarela",
  casca: true,
  peso: 0.5,
  paisesDeOrigem: ["Brasil", "Argentina", "Uruguai"],
  descascar: function () {
    this.casca = false;
    return "Banana descascada com sucesso!";
    // console.log("Funciona?"); NUNCA IRA RODAR....
  },
};
console.log(banana);
console.log("-------------------------");
console.log(Object.keys(banana)); // RETORNA AS CHAVES
console.log("-------------------------");
console.log(Object.values(banana)); // RETORNA OS VALORES
console.log(banana.casca);
console.log(banana.descascar());

// É POSSIVEL FAZER UMA ITERAÇÃO EM OBJETOS
// FOR, FOR IN, FOR OF
