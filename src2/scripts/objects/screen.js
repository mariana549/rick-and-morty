import { defaultFilter } from "./defaultFilters.js";
import { nextPage, prevPage, sumirBotao } from "./funcoes.js";

const screen = {
   cardConteiner: document.querySelector('.main'),
   cardInfo(array) {
      let html = `
      <header class="header">
         <h1 class="titulo">Rick and Morty</h1>
         <div class="boxButtons">
            <button class="buttonChangePage prev">◀</button>
            <span class="pageCurrent">Page ${defaultFilter.page}</span>
            <button class="buttonChangePage next">▶</button>
         </div>
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

      let prevButton = document.querySelector(".prev").addEventListener("click", () => prevPage(defaultFilter));
      let nextButton = document.querySelector(".next").addEventListener("click", () => nextPage(defaultFilter));

      sumirBotao(defaultFilter.page, prevButton, nextButton)
   } 
};

export { screen };
