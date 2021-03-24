//importamos la libreria React para trabajar con codigo JSX
import React from 'react'
//importamos Redirect de react-router para navegar entre componentes
//importamos Route para generar una ruta de navegacion de react-router
import { Redirect, Route } from 'react-router-dom'
//importamos PropTypes para llamar al componente con parametros correctos
import PropTypes from 'prop-types';

/*
Este componente se encargara de saber si el usario esta correctamente autenticado y retornara 
el menu de navegacion  
*/

//creamos el functional component 
export const PrivateRoute = ({
    isLogged,
    component: Component,
    ...rest}) => {
    
    //cada que analizamos una ruta guardaremos en localStorage la ruta que se analizo
    localStorage.setItem('lastPath', rest.location.pathname);

    //retornamos el componente enviado como props
    return (
        //primero regresamos una ruta y con rest todos los parametros del componente recibido
        <Route { ...rest }
            //para regresar el componente validamos si esta auntenticado
            //render funciona, component(en minuscula) no
            component={ (props) => (
                (isLogged)
                //si esta autenticado regresamos el componente solicitado con todos sus paremtros
                ? (<Component { ...props } />)
                //si no esta auntenticado lo regresamos a la pagina de login
                : (<Redirect to="/login" />)
            )}
        />
    )
}

//asignamos propTypes para llamar al componente de validacion de manera correcta
PrivateRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
