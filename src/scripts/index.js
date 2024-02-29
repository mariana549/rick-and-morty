import { getCaracter } from "./services/caracter.js"
import { dados } from "./objects/dados.js";

// const container = document.querySelector('.container');
// let html = `
//    <header class="header">
//    <h1 class="titulo">Rick and Morty</h1>
//    </header>
// `;


async function mostrarInfo () {
   const caracterResponse = await getCaracter()
   const results = caracterResponse.results
   
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



// forma de resulção inicial incompleta

// let index = 0;

// async function Mostrar () {
//    let [personagem] = await Promise.all([pegarPersonagens()])

//    let {name, image, status, species, origin, location} = personagem.results[0]
   
//    let nome = document.querySelector(".tituloDoCard")
//    let imagemPersonagem = document.querySelector(".personagemImg")
//    let statusPersonagem = document.querySelector(".status")
//    let origemPersonagem = document.querySelector(".IdUltimalocalizazao")
//    let primeiralocalizazaoPersonagem = document.querySelector(".idPrimeiraLocalizacao")
   
//    nome.innerHTML = name
//    imagemPersonagem.src = image
//    statusPersonagem.innerHTML = `${status} - ${species}`
//    origemPersonagem.innerHTML = origin.name
//    primeiralocalizazaoPersonagem.innerHTML = location.name
// }

// let card = document.querySelector(".card")

// for (let i = 0; i < 3; i++) {
//    let novaDiv = document.createElement("section");
//    novaDiv.classList.add("card")
//    novaDiv.innerHTML = card.innerHTML;
//    let container = document.querySelector(".container")
//    container.appendChild(novaDiv);
//    Mostrar()
// };

