

const screen = {
   cardConteiner: document.querySelector('.container'),
   cardInfo(array) {
      let html = `
      <header class="header">
         <h1 class="titulo">Rick and Morty</h1>
      </header>`;
   
      array.forEach(person => {
         const aliveDead = () => {
            if (person.status === "Alive"){
               let alive = `🟢 Alive`
               return alive
            } else if (person.status === "Dead"){
               let dead = `🔴 Dead`
               return dead
            } else {
               let unknown = `Unknown`
               return unknown
            }
         }

         html += `
            <section class="card">
            <section>
                  <span class="id">${person.id}</span>
                  <img src="${person.image}" alt="personagem" class="personagemImg">
               </section>
               <section class="section">
                  <section class="informacoes-principais">
                     <h1 class="tituloDoCard">${person.name}</h1>
                     <span class="status">${aliveDead()} - ${person.species}</span>
                  </section>
                  <section>
                     <h3 class="Localizacao">Last known location:</h3>
                     <p class="IdUltimalocalizazao paragrafo">${person.origin.name}</p>
                  </section>
                  <section>
                     <h3 class="Localizacao">First seen in:</h3>
                     <p class="idPrimeiraLocalizacao paragrafo">${person.location.name}</p>
                  </section>
               </section>
            </section>`;
      });
      this.cardConteiner.innerHTML = html

   } 
};

export { screen };






// const container = document.querySelector('.container');
// let html = `
//    <header class="header">
//    <h1 class="titulo">Rick and Morty</h1>
//    </header>
// `;
// function criarCards(array) {
//    html = `
//       <header class="header">
//       <h1 class="titulo">Rick and Morty</h1>
//       </header>
//    `;
//    array.forEach(personagem => {
//       html += `
//       <section class="card">
//       <section>
//          <img src="${personagem.image}" alt="personagem" class="personagemImg">
//       </section>
//       <section class="section">
//          <section class="informacoes-principais">
//             <h1 class="tituloDoCard">${personagem.name}</h1>
//             <span class="status">${status}</span>
//          </section>
//          <section>
//             <h3 class="Localizacao">Última localização conhecida:</h3>
//             <p class="IdUltimalocalizazao paragrafo">${personagem.origin.name}</p>
//          </section>
//          <section>
//             <h3 class="Localizacao">Visto pela primeira vez em:</h3>
//             <p class="idPrimeiraLocalizacao paragrafo">${personagem.location.name}</p>
//          </section>
//       </section>
//       </section>
//       `
//    });
//    container.innerHTML = html
// }

// let cincoPersonagens = imprimirECortar(personagens, indice);

// criarCards(cincoPersonagens);

// indice = indice + 5;

// let intervalo = setInterval(() => {
//    indice = indice % personagens.length;
//    cincoPersonagens = imprimirECortar(personagens, indice);
//    criarCards(cincoPersonagens);
//    indice = indice + 5;
// }, 11000);
