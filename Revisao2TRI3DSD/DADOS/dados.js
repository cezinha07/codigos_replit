/**
 * ARRAYS - LISTAS MISTAS OU UNIFORMES
 * PODEM SER ITERADOS
 * SÃO ORDENADOS POR INDICE (A PARTIR DO 0))
 * PODEMOS ALTERA-LOS EM TEMPO REAL
 * TEM METODOS PROPRIOS
 */
const jogos = ["Fifa", "GTA", false, 33, "LOL"];
// indice:        0      1      2     3    4
console.log(jogos);
console.log([3]); //33
jogos[12] = "GOD";
console.log(jogos[12]); // GOD
//METODOS
jogos.push("COD"); // INSERE NO FINAL DA FILA
jogos.shift(); // REMOVE O PRIMEIRO DA ELEMENTO
jogos.unshift("MINECRAFT"); // INSERE NO INICIO DA FILA
jogos.pop(); // RETIRA DO FINAL DA FILA
console.log(jogos.length); // MEDE COMPRIMENTO DA FILA

console.log(jogos); // RESULTADO FINAL

for (let i = 0; i < jogos.length; i++) {
  // console.log(i)
  console.log(jogos[i]); // ACESSA O ELEMENTO DO INDICE is
}
