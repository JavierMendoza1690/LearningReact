

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 55313,
        latitud: 14.3232,
        longitud: 34.9234,
    }
}

// console.log({persona:persona});
// console.log({persona}); 
//creando un objeto con nombre persona que tiene dentro el objeto persona creado


//imprimiendo en forma de tabla
// console.table({persona}); 

//imprimiendo simplemente persona
// console.log(persona);

//asignación de referencia (MALA PRACTICA)
const persona2 = persona; 

//si se modifica uno se modifican los dos

persona2.nombre = 'Javier';

// console.log(persona);
// console.log(persona2);

//FORMA CORRECTA DE HACER UN CLON (SPREAD OPERATOR)
const persona3 = {...persona}; 

persona3.nombre='Ivonne'

console.log(persona);
console.log(persona3);
