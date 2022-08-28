// Exportacion simple

// Tenemos un array dentro de la ruta 'data/heroes.js'. Queremos importarlo
// Dos pasos:
// 1. En el archivo heroes marcar con export el array.
// 2. Lo impotamos con la siguiente linea con {heroes}

// Otra forma:
// 1. al final del documento 'heroes.js' ponemos: 'export default heroes'
// 2. Lo importamos con la siguiente linea sin {}.

// NOTA: tambien podemos hacerlo de manera auto poniendo 'heroes'.
// IMPORTANTE: cuando sea default sin llaves, cuando sea un export normal, con llaves.
// NOTA: el profesor prefiere hacer un 'export default' y los demas con 'export', al final de la linea.

import heroes, {owners} from "./data/heroes";

// Find:
const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id == id);
}

const {id, name, owner} = getHeroeById(2);

console.log(id, name, owner);

// Filter:

const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe)=> heroe.owner == owner);
}

const dc = getHeroesByOwner('DC');
console.log(dc);

const marvel = getHeroesByOwner('Marvel');
console.log(marvel);
