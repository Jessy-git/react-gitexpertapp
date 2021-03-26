import React from 'react';
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);

    //en la carpeta Helpers esta la funcion de la promesa de la api, lo unico que hace esta funcion es retornar lo que necesito
    //asi no complico mas el codigo y en este componente solo tengo lo que expecificamente hace el componente

    return (
        <>
            <h3> {category} </h3>

            { loading && <p>Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>

        </>

    )
}

export default GifGrid;