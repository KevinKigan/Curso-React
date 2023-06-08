export const getImagen = async() => {

    try {

        const resp   = await fetch(`https://www.google.com/imgres?imgurl=https%3A%2F%2Fimagenesparapeques.com%2Fwp-content%2Fuploads%2F2021%2F05%2FMario-Bros-png-transparente.png&tbnid=L5eaBKA7I503NM&vet=10CAIQxiAoAGoXChMImKfX8Z6Q_wIVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fimagenesparapeques.com%2Fimagenes-de-mario-bros%2F&docid=Yd_jZC5TTizjxM&w=668&h=850&itg=1&q=imagen&ved=0CAIQxiAoAGoXChMImKfX8Z6Q_wIVAAAAAB0AAAAAEAc`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        
    } catch (error) {
        // manejo del error
        console.error(error)
    }
    
    
    
}

 getImagen();



