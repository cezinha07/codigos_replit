// SET INTERVAL - EXECUTA "A CADA" X MILISEGUNDOS
// let n = 0
//const intervalo1 = setInterval(function() {
// console.clear()
// console.log("Executando a cada 1 segundo", n);
// n = n + 1
//}, 1000)

// SET TIMEOUT - EXECUTA "APÓS" X MILISEGUNDOS
//setTimeout(function() {
// clearInterval(intervalo1) // stop no intervalo 
// window.alert("Ja passou 5 segundos") // Gera um pop up
// .href = "https://www.youtube.com.br" // Redireciona para outra página"
//}, 5000) 



// GERAR O NUMERO ALEATORIO = Math.random() * 10
// A) CRIE UM PROGRAMA QUE MOSTRE UM NUMERO
// RANDOMICO DE 0 A 10 A CADA 3 SEGUNDOS

//B) APOS PASSADOS 15 SEGUNDOS, ENCERRE O INTERVALO
// USANDO clearInterval e setTimeOut



const intervalo2 = setInterval(function() {
  let aleatorio = Math.round(Math.random() * 10)
  console.log(aleatorio)
}, 3000) // 3 segundos

setTimeout(function() {
  alert("Pop up chato!")
  clearInterval(intervalo2)
  location.href = "https://www.youtube.com.br"
}, 15000)









