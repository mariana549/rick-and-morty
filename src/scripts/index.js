import { getCaracter } from "./services/caracter.js"
import { dados } from "./objects/dados.js";
import { screen } from "./objects/screen.js";

async function mostrarInfo () {
   const caracterResponse = await getCaracter()
   const results = caracterResponse.results

   dados.setInfo(results)

   screen.cardInfo(dados)
}
mostrarInfo()