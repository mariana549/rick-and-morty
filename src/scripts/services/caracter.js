import { baseUrl , pagina } from "../variaveis.js"

async function getCaracter(){
   const response = await fetch(`${baseUrl}/character?page=${pagina}`)
   return await response.json()
}

export { getCaracter }