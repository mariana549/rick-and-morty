import { dadosRequest } from "./objects/funcoes.js";
import { defaultFilter } from "./objects/defaultFilters.js";

async function mostrarInfo() { dadosRequest(defaultFilter) }

mostrarInfo()