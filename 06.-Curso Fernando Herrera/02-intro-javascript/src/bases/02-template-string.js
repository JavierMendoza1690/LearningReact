

const nombre = 'Javier';
const apellido = 'Mendoza';

const NombreCompleto =`${nombre} ${apellido}
`;

console.log(NombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`esto es un texto ${getSaludo(nombre)}`);