
export const getImagen = async() => {

    try {

        const apiKey = 'wjd5ibnR6qaOJ03QjYF33xiFcb9eVD63';//wjd5ibnR6qaOJ03QjYF33xiFcb9eVD62
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



