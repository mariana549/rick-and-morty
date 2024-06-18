import { passarPaginas } from "../objects/funcoes.js"
import { screen } from "../objects/screen.js"
import { baseUrl , limite, pagina  } from "../variaveis.js"

async function getCaracter(pagina){
   const response = await fetch(`${baseUrl}character?page=${pagina}`)
   return await response.json()
}

export { getCaracter }