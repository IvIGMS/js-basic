// Template string

// Concatenacion normal
const nombre = "Ivan";
const apellido = "Frias";
const nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// Interpolacion de String
const nombreCompletoInterpolado = `${nombre} ${apellido}`;

console.log(nombreCompletoInterpolado)

// Interpolacion multilinea. (También tiene en cuenta las tabulaciones).

const interpolacionMultilinea = `
    ${nombre}
${apellido}
${3 * 5}
`;

console.log(interpolacionMultilinea);