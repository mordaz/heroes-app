//importamos la libreria React para trabajar con codigo JSX
//importamos useEffect para guardar el valor del hook reducer en localStorage
//importamos useReducer para crear en hook global enviado al componente State
import React, { useEffect, useReducer } from 'react'
//importamos el context del hook global
import { AuthContext } from './auth/authContext'
//imporamos el reducer del hook gloval
import { authReducer } from './auth/authReducer'
//importamos el funcional component de navegacion
import { AppRouter } from './routers/AppRouter'

/*
    En este componente vamos a llamar al componente global context que distribuye un hook reducer
    para ello tenemos que declarar el hook en 2 partes
    1.- El contexto "authContext.js" que se envia como un componente en el codigo JSX
    2.- El reducer "authReducer.js" que se envia como funcion al declarar el hook 
*/

//creamos la funcion init del reducer
const init = () => {
    //al iniciar el hook global buscara el valor del usuario en localstorage si no crea uno en false
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

//creamos el functional component 
export const HeroesApp = () => {

    //creamos el hook reducer que sera enviado a travez del context como hook global
    //enviamos la funcion reducer como parametro y el init
    const [user, dispatch] = useReducer(authReducer, {}, init)

    //creamos un efecto para guardar en localstorage los cambios del hook reducer cuando este cambie 
    useEffect(() => {
        //guardamos el local storage
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    
    //retornamos el codigo JSX del componente
    return (
        //a travez del context "authcontext.js" enviamos el hook reducer que vamos a distribuir
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />         
        </AuthContext.Provider>
    )
}
