import { getCaracter } from "../services/caracter.js";
import { dados } from "./dados.js";
import { defaultFilter } from "./defaultFilters.js";
import { screen } from "./screen.js";

export async function dadosRequest(defaultFilter) {
   try {
      const caracterResponse = await getCaracter(defaultFilter);
      const results = caracterResponse.results;
      dados.setInfo(results);
      screen.cardInfo(dados.personagem);
   } catch (error) {
      console.error("Erro ao obter dados do personagem:", error);
   }
}

async function getPageNumberApi(defaultFilter) {
   try {
      const caracterResponse = await getCaracter(defaultFilter);
      const results = caracterResponse.info.pages;
      return results;
   } catch (error) {
      console.error("Erro ao obter número de páginas:", error);
      return 1; 
   }
}

export async function nextPage(defaultFilter) {
   if (defaultFilter.page <= 42) {
      defaultFilter.page++
   }

   return dadosRequest(defaultFilter)
}

export async function prevPage(defaultFilter) {
   if (defaultFilter.page > 1) {
      defaultFilter.page--
   }

   return dadosRequest(defaultFilter)
}

export async function sumir(defaultFilter) {
   const limit = await getPageNumberApi(defaultFilter) 

   let prevButton = document.querySelector(".prev")
   let nextButton = document.querySelector(".next")

   if (defaultFilter.page === 1) {
      prevButton.classList.add("botaoSumir")
   } else {
      prevButton.classList.remove("botaoSumir")
   }

   if (defaultFilter.page === limit) {
      nextButton.classList.add("botaoSumir")
   } else {
      nextButton.classList.remove("botaoSumir")
   }
}

function handleFilter(event, type) {
   defaultFilter[type] = event.target.value
   dadosRequest(defaultFilter)
}

export function pegarElementos() {
   document.getElementById("species").addEventListener("click", (event) => {
      handleFilter(event, "species")
   })
   document.getElementById("status").addEventListener("click", (event) => {
      handleFilter(event, "status")
   })
   document.getElementById("gender").addEventListener("click", (event) => {
      handleFilter(event, "gender")
   })
}

export function filtros(e) {
   document.getElementById("buttonSubmit").addEventListener("click", (event) => {
      event.preventDefault()
      defaultFilter.name = e.target.value
      dadosRequest(defaultFilter)
   })
}