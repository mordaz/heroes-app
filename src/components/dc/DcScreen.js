//importamos la libreria React para trabajar con codigo JSX
import React from 'react'
//importamos el functional component que contiene la lista de heroes
import { HeroList } from '../heroes/HeroList'

//creamos el functional component 
export const DCScreen = () => {
    
    //retornamos el codigo JSX del componente
    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
            <HeroList publisher="DC Comics"/>        
        </div>
    )
}
