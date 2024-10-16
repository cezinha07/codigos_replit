// CRIAR PASTAS COM NODEJS
const fs = require('fs');
const path = require('path');

// CRIANDO COM CAMINHOS ESTATICOS 
function pastaEstetica(nomePasta) {
  fs.mkdir(nomePasta, function(err) {
    console.log("Erro ao criar a pasta")
    console.log(err)
  })

}
// CRIANDO COM CAMINHOS DINAMICOS
function pastaDinamica(nomePasta) {
  if (!fs.existsSync(nomePasta)) {
   fs.mkdirSync(path.join(__dirname, nomePasta))
    console.log("--- CRIADO COM SUCESSO ---")
    return true
  }else{
    console.log('A Pasta "${nomePasta}" ja existe')
    return false
  }
}


module.exports = { pastaEstetica, pastaDinamica }