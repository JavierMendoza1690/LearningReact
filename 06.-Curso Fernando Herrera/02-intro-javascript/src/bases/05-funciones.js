const saludar = function (nombre) {
  return `Hola soy ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola soy ${nombre}`;
};

//  FUNCIÓN FLECHA REDUCIDA
// si es una sola linea de codigo se sobreentiende el return y no hacen falta las lalves
const saludar3 = (nombre) => `Hola soy ${nombre}`;

//  saludar = 'mamahuevo'; ERROR ASIGNANDO VALORES A UNA CONSTANTE
console.log(saludar3("Goku"));

const getUser = () => {
  return {
    uid: 30214,
    username: "El_PAPI2001",
  };
};

// console.log(getUser);

//TAREA

const getUsuarioActivo =(nombre)=>({
        uid:'ABC567',
        username: nombre,
    })


console.log(getUsuarioActivo('Ivonne Galeano'));
