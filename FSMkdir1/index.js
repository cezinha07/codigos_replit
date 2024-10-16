//UTILIZAR O MODULO
import { pastaEstetica, pastaDinamica } from "./lib/gerenciadorArquivos.cjs";

//pastaEstetica("./reltorio");
//pastaEstetica("./contratos");

//pastaEstetica("./reltorio");
//pastaEstetica("./arquivos");
//pastaDinamica("./contas");
//pastaDinamica("./contratos");

// DENTRO DA PASTA ATUAL
pastaDinamica("/Novoreltorio");
pastaDinamica("/ArquivoX");

// CRIA UM NIVEL ACIMA DA PASTA ATUAL
pastaDinamica("../Novoreltorio");
pastaDinamica("../ArquivoX");
