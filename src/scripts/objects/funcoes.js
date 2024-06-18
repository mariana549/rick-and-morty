function imprimirECortar(array, indice) {
   let cincoCard = array.personagem.slice(indice, indice + 6);
   return cincoCard;
}

function nextPage (num) {
   return num + 1
}

function prevPage (num) {

}

function passarPaginas (pagina, limit) {
     if (pagina > limit) {
         return 1; 
      } else {
         return pagina ; 
      }
}

export { imprimirECortar, passarPaginas, nextPage, prevPage }