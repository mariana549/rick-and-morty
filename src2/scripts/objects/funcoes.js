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
      defaultFilter.page--
   }

   return dadosRequest(defaultFilter)
}

export function sumir (page) {
   let prevButton = document.querySelector(".prev")
   let nextButton = document.querySelector(".next")
   let imgRickPortal = document.querySelector(".imageRickFooter")

   if (page === 1) {
      prevButton.classList.add("botaoSumir")
   } else {
      prevButton.classList.remove("botaoSumir")
   }

   if (page === 42) {
      nextButton.classList.add("botaoSumir")
      imgRickPortal.classList.add("botaoSumir")
   } else {
      nextButton.classList.remove("botaoSumir")
      imgRickPortal.classList.remove("botaoSumir")
   }
}