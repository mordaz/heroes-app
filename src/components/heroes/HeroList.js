//importamos la libreria React para trabajar con codigo JSX
import React, { useMemo } from 'react'
//importamos la funcion para buscar heroes en el objeto que contine la lista de herores
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
//importamos el funcional component para mapear el heroe
import { HeroCard } from './HeroCard';

//creamos el functional component 
export const HeroList = ({ publisher }) => {
    
    //buscamos el heroe usando el publisher recibido
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    //const heroes = getHeroesByPublisher( publisher );

    //retornamos el codigo JSX del componente
    return (
        <div className="card-group animate__animated animate__fadeIn">
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id } hero = { hero } />
                ))
            }          
        </div>
    )
}



