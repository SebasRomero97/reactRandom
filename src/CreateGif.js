import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const CreateGif = () => {

    const [heroes, setHeroes] = useState(['Goku'])
    const handleadd = () => {
        setHeroes( heroes.concat('Goham') );
    }
    return <>
        <h2> GifExpertApp</h2>
        <AddCategory setHeroes={setHeroes}/>
        <hr/>
            {
                heroes.map( categoria => {
                    return  <GifGrid 
                                key={categoria}
                                categoria={categoria}
                            />
                })
            }

    </>
}


export default CreateGif;