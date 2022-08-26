// Funciones.

// Vamos a crear las funciones de esta manera:
// Lo hacemos de esta manera porque de la forma tradicional podemos sobreescribir funciones por error.
const saludar = function(nombre){
    return `Hola ${nombre}.`;
}

// Arrow Function. Estás funciones son un estilo a los lambda, closures, etc.
// Se usan bastante en map, filter, etc.
// Si la funcion solo tiene un return, puede hacerse en la misma linea sin las llaves y sin el return.
const saludar2 = (nombre) => {
    return `Hola ${nombre}.`;
}

// Arrow function de una sola linea.
const saludar3 = (nombre) => `Hola ${nombre}.`;

console.log(saludar("Ivan"));
console.log(saludar2("Andrés"));
console.log(saludar3("Javier"));


// Como retornar un objeto literal dentro de una arrow function de una sola linea:
// Tenemos que envolver entre parentesis el 'return' para no confundir a js.
const saludar4 = () => ({nombre: "Ivan", edad: 25})

console.log(saludar4());