import React from 'react';
import { useFetchGifs } from '../hooks/useFecthGifs';
import { GifGridItem } from './GifGridItem';
//import {getGifs} from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );
    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category ).then(setImages);
    // }, [] )
    

    // getGifs();

    return (
    <>
        <h3>{ category }</h3>
        {loading && <p>loading...</p>}
        <div className="container">
            <div className="row">
        <div className="card_grid">
            
            { images.map (img =>               
            <GifGridItem
             key={img.id}
             {...img}
            />
             )}
        </div></div></div>
    </>
    )
}

