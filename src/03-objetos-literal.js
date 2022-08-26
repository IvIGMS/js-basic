// objetos literales. Son como los dicts de python
// La coma al final del ultimo elemento del objeto es una muy buena práctica.
// Este tipo de dato es por referencia, no por copia.

const persona = {
    nombre: "Ivan",
    apellido: "Frias",
    edad: 25,
    casado: false,
    direccion: {
        localidad: "Springfield",
        calle: "Calle Falsa",
        numero: 123,
    }
};

console.table(persona); // Imprimir en forma de tabla.
console.log(persona); // Los navegadores al mostrar el objeto, muestran alfabeticamente los elementos.


// Como clonar un objeto para que ocupe diferente espacio en la memoria.

const persona2 = {...persona}; // Clonamos el objeto (copiamos)
persona2.nombre = "Manuel";
persona2.apellido = "Dominguez";

console.log(persona2)