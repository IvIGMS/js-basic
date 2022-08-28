// Desectructuracion de arrays
const personajes = ["Goku", "Vegetta","Trunks","Picolo"];
const [p1, p2, p3] = personajes;

console.log(p1, p2, p3);

// Como desestructurar solo las posiciones que queremos. Ignoramos el primero y tercero.
const [ , a2, , a4 ] = personajes;

console.log(a2, a4);

// Vamos a desectructurar un array que es el return de una funcion
const retornaArray = () => {
    return ["ABC", 123];
}

const [letras, numeros] = retornaArray();

console.log(letras, numeros);


// Tarea de ejemplo con una funcion en la posicion de un array.
const useState = (valor) => {
    return [valor, () => { console.log("Hola mundo")}];
}

const [nombre, setNombre] = useState("Ivan");

console.log(nombre);
setNombre();