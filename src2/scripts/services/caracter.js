import { baseUrl } from "../variaveis.js"

async function getCaracter({name, species, gender, status, page = 1}){
   const response = await fetch(`${baseUrl}character?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`)
   const data = await response.json()
   return data
}

export { getCaracter }