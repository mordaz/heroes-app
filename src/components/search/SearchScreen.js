//importamos la libreria React para trabajar con codigo JSX
import React, { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom';
//importamos el objeto con la busqueda por nombre
import { getHeroesByName } from '../../selectors/getHeroesByName';
//importamos el functional component para mostrar la tarjeta de herores
import { HeroCard } from '../heroes/HeroCard';

//creamos el functional component 
export const SearchScreen = ({history}) => {
    
    //obtenemos los parametros tipo query
    const location = useLocation();
    //obtenemos los parametros de la URL
    const query = new URLSearchParams(location.search);
    const name = query.get("name") || '';
    
    //creamos un HOOK basico para controlar los valores de los inputs
    const [inputValue, setInputValue] = useState('');
    
    //creamos una constante con el resultado de la lista de heroes
    //la grabamos con useMemo para que no se ejecute hasta que cambie el name
    let heroresFiltered = useMemo(() => getHeroesByName(name), [name])

    //creamos una funcion para actualizar los valores del HOOK con los de los inputs
    const handleInputChange = (e) => {
        //obtenemos los nuevos valores del HOOK sincronzandolos con el value de los inputs
        //hacemos una copia de los los valores del HOOK usando spread ...
        const nuevoInputValue = e.target.value;
            
        //actualizamos el valor del HOOK
        setInputValue(nuevoInputValue);
    }

    //creamos una funcion para agregar tareas al hacer submit en el formulario
    const handleSubmit = (e) => {
        //evitamos que la pagina recargue al hacer submit en el formulario
        e.preventDefault();
        //enviamos los parametros a la URL para recargar la pagina
        history.push(`?name=${inputValue}`)
    }

    //retornamos el codigo JSX del componente
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-4">
                    <h4>Search Form</h4>
                    <hr/>
                    <form
                        onSubmit={ handleSubmit }
                    >
                        <input
                            name="search"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            //agregamos el evento onChange para actualizar el HOOK
                            onChange={ handleInputChange }
                        />
                        <button
                            tupe="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <h4>Results</h4>
                    <hr/>
                    { 
                        (name ==='') && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    { 
                        (name !=='' && heroresFiltered.length === 0) && 
                        <div className="alert alert-warning">
                            There is no a hero with {name}
                        </div>
                    }
                    <div className="card-group animate__animated animate__fadeIn"> 
                        {
                            heroresFiltered.map( hero => ( <HeroCard 
                                key={hero.id}
                                hero={hero}
                            /> ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
