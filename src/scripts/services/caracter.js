import { baseUrl , quantidade } from "../variaveis.js"

async function getCaracter(){
   const response = await fetch(`${baseUrl}/character?page=${quantidade}`)
   return await response.json()
}

export { getCaracter }