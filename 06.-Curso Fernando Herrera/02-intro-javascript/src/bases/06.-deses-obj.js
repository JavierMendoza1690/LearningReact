

// DESESTRUCTURACIÓN
// ACCIÓN DESESTRUCTURANTE



const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// forma tradicional

/*
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
*/

// desestructurando

/*
const {nombre,edad,clave}=persona;

console.log(nombre);
console.log(edad);
console.log(clave);
*/

// Funcion desestructurante

//FORMA 1
/*
const retornaPersona = (usuario) =>{
    const {nombre,edad,clave}=usuario;
    console.log(nombre);
}
*/

//FORMA 2
/*
const retornaPersona2 = ({nombre,edad, rango ='Capitan',clave}) =>{
    console.log(nombre);
    console.log(edad);
    console.log(rango);  //valor por defecto no necesariamente en el objeto
}
*/

//MISMO EJEMPLO CON USECONTEXT

const UseContext = ({nombre,edad, rango ='Capitan',clave}) =>{
   
    return{
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.212,
            lng: 124.154,
        }
    }
}


const {latLng:{lat,lng}, nombreClave,anios} = UseContext(persona);

//Forma equivalente
/*
const {latLng, nombreClave,anios} = retornaPersona3(persona);
const {lat,lng} = latLng;
*/


console.log(nombreClave);
console.log(anios);
console.log(lat);
console.log(lng);



