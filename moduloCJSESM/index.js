//IMPORT
import { getGuilda } from "./lib/personagem.js";
import getPersonagem from "./lib/personagem.js";
import { fs, path, http } from "./lib/nativos.cjs";
// CHAMANDO FUNÇÃO DO MOD. PERSONAGEM
console.log(getPersonagem());
getGuilda(); // CONSOLE.LOG()

//CHAMANDO MODULO CJS
console.log(fs);
console.log(path);
console.log(http);
