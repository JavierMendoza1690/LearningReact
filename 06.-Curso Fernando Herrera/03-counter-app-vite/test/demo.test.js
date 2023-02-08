describe('Pruebas en <DemoComponent>', () => {

    test ('Esta prueba no debe de fallar', ()=>{
       
        
        //1. Inicialización
        const message1 = 'Hola mundo';
        
        //2. Estimulo
        const message2= message1.trim();
    
        /*
        .trim() quita espacios al inicio y final de una cadena de caracteres
        */
    
        //3. observar el comportamiento
        expect( message1 ).toBe( message2 );
        
    
        //traduce, que el mensaje 1 sea identico al mensaje 2
    
    })

 });
