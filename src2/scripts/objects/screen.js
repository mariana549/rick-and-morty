import { defaultFilter } from "./defaultFilters.js";
import { filterNames, nextPage, pegarElementos, prevPage, sumir } from "./funcoes.js";

const screen = {
   cardConteiner: document.querySelector('.main'),
   cardInfo(array) {
      let html = `
      <header class="header">
         <div class="logo"></div>
         </header>
         
         <nav class="nav">
            <form class="FormFilters">
            <div class="boxFilters">
               <select name="species" id="species" class="filter select">
               <option value="" default class="options">Species</option>
               <option value="animal" class="options">Animal</option>
               <option value="alien" class="options">Alien</option>
               <option value="disease" class="options">Doença</option>
               <option value="unknown" class="options">Desconhecido</option>
               <option value="human" class="options">Humano</option>
                     <option value="humanoid" class="options">Humanoide</option>
                     <option value="mythological" class="options">Mitologico</option>
                     <option value="poopybutthole" class="options">Poopybutthole</option>
                     <option value="Robot" class="options">Robo</option>
                  </select>
                  <select name="gender" id="gender" class="filter select">
                     <option value="" class="options">
                     Gender
                     </option>
                     <option value="female" class="options">Feminino</option>
                     <option value="male" class="options">Masculino</option>
                     <option value="genderless" class="options">Sem Genero</option>
                     <option value="unknown" class="options">Desconhecido</option>
                  </select>
                  <select name="status" id="status" class="filter select">
                     <option value="" class="options">
                     Status
                     </option>
                     <option value="alive" class="options">Vivo</option>
                     <option value="dead" class="options">Morto</option>
                     <option value="unknown" class="options">Desconhecido</option>
                     </select>
            </div>
                  <div>
                     <input type="text" id="name" placeholder="Filter by name..." class="filter search">
                     <button type="submit" id="buttonSubmit" class="filter"> Search </button>
                  </div>
                  </form>
            <div class="boxButtons">
            <button class="buttonChangePage prev">◀</button>
            <span class="pageCurrent">Page ${defaultFilter.page}</span>
            <button class="buttonChangePage next">▶</button>
            </div>
         </nav>
`;

      array.forEach(person => {
         const aliveDead = () => {
            if (person.status === "Alive") {
               let alive = `🟢 Alive`
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
                  <table class="table"> 
                     <thead>
                        <tr>
                           <th class="th">Species</th>
                        </tr>
                        <tr>
                           <th class="th">Gender</th>
                        <tr>
                        <tr>
                           <th class="th">Status</th>
                        </tr>
                     </thead>
                     <tbody>
                           <tr>
                              <td class="td">${person.species}</td>
                           </tr>                     
                           <tr>
                              <td class="td">${person.gender}</td>
                           </tr>                     
                           <tr>
                              <td class="td">${aliveDead()}</td>
                           </tr>                     
                     </tbody>
                  </table>
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

      document.querySelector(".prev")
         .addEventListener("click", () => prevPage(defaultFilter));

      document.querySelector(".next")
         .addEventListener("click", () => nextPage(defaultFilter));

      document.getElementById("name")
         .addEventListener("change", (e) => {
            e.preventDefault();
            filterNames(e)
         });

      sumir(defaultFilter)
      pegarElementos()
   }
};

export { screen };
