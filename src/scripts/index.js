import { getCaracter } from "./services/caracter.js"
import { dados } from "./objects/dados.js";
import { screen } from "./objects/screen.js";
// import { imprimirECortar } from "./objects/imprimir.js";

async function mostrarInfo () {
   const caracterResponse = await getCaracter()
   const results = caracterResponse.results

   dados.setInfo(results)

   screen.cardInfo(dados)

}
mostrarInfo()



// async function pegaroutros(){
//    let response = await fetch(`https://rickandmortyapi.com/api/location`)
//    let data = await response.json();
//    console.log("pegando localização",data);
// }
// pegaroutros()

// async function pegarEpisode(){
//    let response = await fetch(`https://rickandmortyapi.com/api/episode?page=3`)
//    let data = await response.json();
//    console.log("pegando epsodios",data);
// }
// pegarEpisode()


