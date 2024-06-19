import { getCaracter } from "../services/caracter.js";
import { dados } from "./dados.js";
import { screen } from "./screen.js";

export async function dadosRequest(defaultFilter) {
   const caracterResponse = await getCaracter(defaultFilter)
   dados.setInfo(caracterResponse)
   screen.cardInfo(dados.personagem)
}

export async function nextPage(defaultFilter) {
   if (defaultFilter.page <= 42) {
      defaultFilter.page++
   }

   return dadosRequest(defaultFilter)
}

export async function prevPage(defaultFilter) {
   if (defaultFilter.page > 1) {
      defaultFilter.page --
   }

   return dadosRequest(defaultFilter)
}

export function sumirBotao (page) {
   let prevButton = document.querySelector(".prev")
   let nextButton = document.querySelector(".next")

   if (page === 1) {
      prevButton.classList.add("botaoSumir")
   } else {
      prevButton.classList.add("botaoAparecer")
   }

   if (page === 42) {
      nextButton.classList.add("botaoSumir")
   } else {
      nextButton.classList.add("botaoAparecer")
   }
}