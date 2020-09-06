import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';

import {GifGrid} from './components/GifGrid'

const GifExpertApp = () => {

    //const categorias = ['One Punch','Samurai X','Dragon Ball'];
    const [categorias,setCategorias] = useState(['One Punch'])

   /*  const handleAdd = () => {
        //setCategorias([...categorias,'HunterXHunter']);
        setCategorias(cats=> [...cats,'HunterXHunter']);
    
    } */


    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr></hr>
            {/* <button onClick={handleAdd}>Agregar</button>*/}
            <ol> 
                {
                    categorias.map( category =>(
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))
                    
                
                }
            </ol>
            
        </div>
    )
}


 
export default GifExpertApp;