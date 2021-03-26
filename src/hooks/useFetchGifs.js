import {useState, useEffect} from 'react';
import {getGifs} from "../Helpers/getGifs";

//los hook no son mas que funciones, en este caso cree una carpeta para agruparlos y por convencionalidad nombro el
//archivo con 'use' porque asi comienzan.

const useFetchGifs = (category) => {

    const [objeto, setObjeto] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs(category)
            .then(img => {

                setTimeout(() => {
                    setObjeto({
                        data: img,
                        loading: false
                    })
                }, 1500);

            })
    }, [category]);

    return objeto;
}

export default useFetchGifs;