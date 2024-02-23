let url = `https://rickandmortyapi.com/api/character`
const container = document.querySelector('.container');
let html = `
   <header class="header">
   <h1 class="titulo">Rick and Morty</h1>
   </header>
`;

async function pegarPersonagens () {
   let resposta = await fetch(url)
   let data = await resposta.json()

   const personagens = data.results

   let indice = 0;
   function imprimirECortar(array, indice) {
      let cincoCard = array.slice(indice, indice + 5);
      return cincoCard;
   }

   function criarCards(array) {
      html = `
         <header class="header">
         <h1 class="titulo">Rick and Morty</h1>
         </header>
      `;
      array.forEach(personagem => {
         html += `
         <section class="card">
         <section>
            <img src="${personagem.image}" alt="personagem" class="personagemImg">
         </section>
         <section class="section">
            <section class="informacoes-principais">
               <h1 class="tituloDoCard">${personagem.name}</h1>
               <span class="status">${status}</span>
            </section>
            <section>
               <h3 class="Localizacao">Última localização conhecida:</h3>
               <p class="IdUltimalocalizazao paragrafo">${personagem.origin.name}</p>
            </section>
            <section>
               <h3 class="Localizacao">Visto pela primeira vez em:</h3>
               <p class="idPrimeiraLocalizacao paragrafo">${personagem.location.name}</p>
            </section>
         </section>
         </section>
         `
      });
      container.innerHTML = html
   }

   let cincoPersonagens = imprimirECortar(personagens, indice);

   criarCards(cincoPersonagens);

   indice = indice + 5;

   let intervalo = setInterval(() => {
      indice = indice % personagens.length;
      cincoPersonagens = imprimirECortar(personagens, indice);
      criarCards(cincoPersonagens);
      indice = indice + 5;
   }, 11000);
   
   
}
pegarPersonagens()






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

