
export const getImagen = async() => {

    try {

        const apiKey = 'Co8duB5dyz8UYDyi34vjHIrjHsZyipJE';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {
        // manejo del error
      

        return 'No se encontró la imagen';
    }
    
    
    
}

 getImagen();



