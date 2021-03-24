//importamos la libreria React para trabajar con codigo JSX
import React, { useMemo } from 'react'
//importamos el customHook de router-dom para obtener el parametro del URL
import { Redirect, useParams } from 'react-router-dom'
//importamos la funcion para buscar los datos del hereo en la data
import { getHeroesById } from '../../selectors/getHeroById';

//creamos el functional component 
//recibimos history para navegar a la ruta anterior
export const HeroScreen = ({ history }) => {

    //extraemos los parametros de la URL
    const params = useParams();
    //destructuramos el parametro del heroe id
    const {heroId} = params;

    //con el id buscamos los datos del hero en la data
    const hero = useMemo(() => getHeroesById(heroId), [heroId]) ;

    //validamos si el heroe existe
    if (!hero){
        //si no existe redirigimos al principio
        return <Redirect to="/" />
    }
    
    //destructuramos el heroe
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = hero
        
    //retornamos el codigo JSX del componente
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${ heroId }.jpg`}
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-8">
                <h3> { superhero} </h3>
                <ul className="list-group list-group-flush">
                <li className="list-group-item"><b> Alter ego: </b>{ alter_ego }</li>
                <li className="list-group-item"><b> Publisher: </b>{ publisher }</li>
                <li className="list-group-item"><b> First appearence: </b>{ first_appearance }</li>
                </ul>

                <h5> Characters </h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ () => { 
                        history.goBack();
                        /*
                        //validamos el origen para regresar a la pagina correcta
                        switch (publisher) {
                            case 'DC Comics':
                                history.push('/dc');
                                break;
                            case 'Marvel Comics':
                                history.push('/marvel');
                                break;
                            default:
                                history.push('/');
                        }
                        */
                    }}
                >
                    Return
                </button>

            </div>
        </div>
    )
}
