import React, { useState } from 'react';
import AddCategory from "./Components/AddCategory";
import GifGrid from "./Components/GifGrid";

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'BTS']);

    //const handleAdd = () => {
        //setCategories([...categories, 'Exo']);
       //setCategories(categories => [...categories, 'Exo']);
        //Estoy usando el operador spreed para hacer una "copia" de array de categorias y despues agragar
        //el nuevo elemento. Si no lo hago asi estaria cambiando el array por una string y rebemtaria la app
  //  };

    return (
        <>

            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map( category => {
                        return <GifGrid key={category}
                            category={category} />
                    } )
                }
            </ol>

        </>
    );

}

export default GifExpertApp;


