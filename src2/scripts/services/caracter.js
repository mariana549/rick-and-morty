import { baseUrl } from "../variaveis.js"

async function getCaracter({page = 1}){
   const response = await fetch(`${baseUrl}character?page=${page}`)
   const data = await response.json()
   const results = data.results
   return results
}

export { getCaracter }