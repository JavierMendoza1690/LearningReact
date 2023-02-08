
// const arreglo = new arreglo(100);

//Crea un objeto literal de 100 posiciones, solo usar cuando se sepa exactamente la cantidad de posiciones vacias necesarias

// ---------Forma normal----------

const arreglo = [1,2,3,4];  

//agregando valor 1 a la ultima posición vacía
// arreglo.push(1); 

// El push es un operador no recomendado, preferible usar spread {...}

let arreglo2 = arreglo;

arreglo2.push(1)  //el push se enfoca en la direaccion

/* arreglo y arreglo2 se modifican, por lo tanto se recomienda el Spread operator*/
// console.log(arreglo);
// console.log(arreglo2);

// -------ANIDANDO ARREGLOS CON SPREAD OPERATOR-------

let arreglo3 = [...arreglo, 10];

// console.log(arreglo);
// console.log(arreglo3);

// -------------OPERADOR MAP-------------

const arreglo4 = arreglo3.map((item)=>{
    return item*2;
})

console.log(arreglo);
console.log(arreglo3);
console.log(arreglo4);