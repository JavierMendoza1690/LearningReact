/*
 const personajes = ['Goku', 'Vegeta', 'Trunks'];

 const [ , ,p1] = personajes;

 console.log(p1);
 */

/*
 const retornaArreglo = ()=>{
    return ['ABC', 123]
 }

 const [letras, numeros] = retornaArreglo();
 console.log(letras);
 console.log(numeros);

 */

const UseState = (nombre,setNombre) => {
  return [nombre,() => {console.log("Hola Ivonne")}];
};

const [nombre,setNombre] = UseState('Goku');

console.log(nombre);
// console.log(setNombre);
setNombre();
