// Js basico. No vamos a usar 'var'

// Constantes
const name = "Ivan";
const apellido = "Frias";

//Variables
let valorDado = 5; // Inicializamos
valorDado = 4; // Le cambiamos el valor a la variable.

console.log(name, apellido, valorDado);

// Variables dentro de un scope, en este caso dentro del if.

if (true){
    let valorDado = 6;
    console.log(valorDado); // Nos referimos al scope de dentro del if
}

console.log(valorDado) // Nos referimos al scope global