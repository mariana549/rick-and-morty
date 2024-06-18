import { getCaracter } from "./services/caracter.js"
import { dados } from "./objects/dados.js";
import { screen } from "./objects/screen.js";
import { imprimirECortar} from "./objects/funcoes.js";

async function mostrarInfo () {
   let indice = 0;
   const caracterResponse = await getCaracter()

   const results = caracterResponse.results
   dados.setInfo(results)
   console.log(caracterResponse)

   // const inforApi = caracterResponse.info

   function atualizarPersonagens() {
      let cincoPersonagens = imprimirECortar(dados, indice);
      screen.cardInfo(cincoPersonagens);
      indice = (indice + 5) % dados.personagem.length;
   }
   atualizarPersonagens();

   setInterval(atualizarPersonagens, 11000); 
}
mostrarInfo()