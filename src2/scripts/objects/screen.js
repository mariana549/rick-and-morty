import { defaultFilter } from "./defaultFilters.js";
import { nextPage, prevPage, sumir } from "./funcoes.js";

const screen = {
   cardConteiner: document.querySelector('.main'),
   cardInfo(array) {
      let html = `
      <header class="header">
      <div class="logo"></div>
      <div class="boxButtons">
            <button class="buttonChangePage prev">◀</button>
            <span class="pageCurrent">Page ${defaultFilter.page}</span>
            <button class="buttonChangePage next">▶</button>
         </div>
      </header>`;
      console.log(array)

      array.forEach(person => {
         const aliveDead = () => {
            if (person.status === "Alive") {
               let alive = `🟡 Alive`
               return alive
            } else if (person.status === "Dead") {
               let dead = `💀 Dead`
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
               <section class="informacoes-principais">
                  <h1 class="tituloDoCard">${person.name}</h1>
                  <span>${person.species} - ${person.gender}</span>
                  <p class="genero">${aliveDead()}</p>
               </section>
               <section class="dadosLocalização">
                  <h3 class="Localizacao">Last known location:</h3>
                  <p class="paragrafo">${person.origin.name}</p>
                  <h3 class="Localizacao">First seen in:</h3>
                  <p class="paragrafo">${person.location.name}</p>
               </section>
            </section>
         `
      });
      this.cardConteiner.innerHTML = html
      document.querySelector(".prev").addEventListener("click", () => prevPage(defaultFilter));
      document.querySelector(".next").addEventListener("click", () => nextPage(defaultFilter));

      sumir(defaultFilter.page)
   }
};

export { screen };
