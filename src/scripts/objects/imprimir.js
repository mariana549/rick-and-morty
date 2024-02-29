let indice = 0;
function imprimirECortar(array, indice) {
   let cincoCard = array.slice(indice, indice + 5);
   return cincoCard;
}

export { indice , imprimirECortar }