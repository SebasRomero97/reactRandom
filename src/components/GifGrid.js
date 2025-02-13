import React, { useEffect, useState } from 'react'
import { MostrarImagenes } from './MostrarImagenes'

export const GifGrid = ({categoria}) => {

    
    const [images, setImages] = useState([])

    const urlGetGif = `https://api.giphy.com/v1/gifs/search?q=${categoria}&limit=5&api_key=Lmo5FtZQ56x5o10cplAkEqbC0C2X8gX2`
    const getGif = async () => {
        const resultado = await fetch(urlGetGif);
        const {data} = await resultado.json();
        // data.forEach(dato => {
        //     console.log(dato.id);
        //     console.log(dato.images.downsized_medium.url);
        //     console.log(dato.title);
        // });
        const gifs = data.map( gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images.downsized_medium.url
            }
        });

        setImages(gifs);
    }



    useEffect(() => {getGif()}, []);
    console.log(images);
    return (
        <>
            <h3>{categoria}</h3>

            <div className='card-grid'>
                {images.map( img => {
                    return <MostrarImagenes key={img.id} img={img} />
                })}
            </div>
        </>
    )
}
