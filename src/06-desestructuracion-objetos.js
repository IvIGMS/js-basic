// Desestructuracion de objetos

const persona = {
    nombre: "Ivan",
    apellido: "Frias",
    edad: 25,
    direccion: {
        calle: "Falsa",
        numero: 123,
    },
};

// Normalmente vamos a desestructurar de esta forma
const {nombre, apellido, edad} = persona;

console.log(nombre);
console.log(apellido);
console.log(edad);

// Tambien podemos cambiar el nombre a las variables
const {nombre: nombre1, apellido: apellido1, edad: edad1} = persona;

// También podemos cambiar el orden en los que desestructuramos
const {edad: edad2, nombre: nombre2, apellido: apellido2} = persona;

// Es muy usado la desestructuracion en funciones por parámetro, el lugar de desarrollarlo dentro de la función. Tambien le podemos poner rangos por default (aunque no existan dentro de la persona). Si asignamos un default a una propiedad que tiene se queda con la que tiene ya.

const retornaPersona = ({nombre, edad, genero = "Hombre"}) => {
    console.log(nombre, edad, genero)
}

retornaPersona(persona);

// En react es muy usado lo siguiente. Desestructurar un objeto que nos retorna una funcion. También ponemos como ejemplo desestructurar un objeto dentro de otro objeto, se puede hacer en la misma linea pero lo normal es desestructurar de esta manera.

const useContext = ({nombre, edad}) => {
    return {
        names: nombre,
        age: edad,
        direction: {
            street: "Falsa",
            number: 123,
        },
    }
}

const {names, age, direction} = useContext(persona);
const {street, number} = direction;

console.log("Imprimimos el objeto desestructurado");
console.log(names, age, street, number);
