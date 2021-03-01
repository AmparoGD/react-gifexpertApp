import React, { useState } from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
//import ReactDOM from 'react-dom'; 

export const GiftExpertApp = () => {
  //const categories = ['One Punch' , 'Avatar' , 'The Office']
    const [categories, setCategories] = useState(['The Office']);
    
    // const handleAdd = () => {
    //     setCategories( [...categories, 'Toy Story']);
    // }
    //setCategories ( cats => [ ...cats, 'Toy Story'] )
    return(
        <div>
            <h2>Gift Expert App</h2>
            <AddCategory  setCategories={ setCategories }/>
            <hr></hr>
            {/*<button onClick={handleAdd}>Agregar</button>*/}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                        key={category}
                        category={category}/>
                   ))
                }
            </ol>
        </div>
    )
}
