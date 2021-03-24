//importamos la libreria React para trabajar con codigo JSX
import React from 'react'
//importamos el componente de router para navegar a otro link
import { Link } from 'react-router-dom';
//importamos la plantilla CSS
import './HeroCard.css';

//creamos el functional component 
export const HeroCard = ({ hero }) => {

    //destructuramos el heroe
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = hero

    //retornamos el codigo JSX del componente
    return (
        <Link to={`./hero/${id}`} className="my-card">
            <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero}/>
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
