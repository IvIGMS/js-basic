// Arrays

// Array de tamaño fijo. No suele usarse. No significa que no pueda luego tener +100 pos.
const arrayFijo = new Array(100);

// Array variable. El que suele usarse.
const array = [1,2,3,4];

// Copiamos el array a array2 y le añanidos el 5.
// Con este operador, mandamos invidualmente cada valor del array, y luego mandamos también el 5.
let array2 = [...array, 5];

console.log(array)
console.log(array2);

// Usamos map para crear un nuevo array a partir de otro. Con un callback (lambda).
const array3 = array2.map(function(numero){
    return numero * 2;
})

console.log(array3);