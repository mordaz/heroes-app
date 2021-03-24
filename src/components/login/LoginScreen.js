//importamos la libreria React para trabajar con codigo JSX
import React, { useContext } from 'react'
//importamos el context para tener acceso al reducer global
import { AuthContext } from '../../auth/authContext';
//importamos los tipos validos para usar el dispatch del reducer
import { types } from '../../types/types';

//creamos el functional component 
//destructuramos history para navegar entre componentes de react-router
export const LoginScreen = ({ history }) => {

    //obtenemos los elementos de autenticacion declarados en el componente context
    const context = useContext(AuthContext);

    //funcion para hacer login
    const handleLogin = () => {
        //creamos un usuario provisional para hacer login
        const user = {
            name: 'Admin'
        }
        //destructuramos el dipatch del reducer usando el context
        const {dispatch} = context;
        //hacemos login usando el dispatch del reducer
        dispatch({
            type: types.login,
            payload: user
        });

        //verificamos en localStorage cual fue la ultima ruta donde se quedo
        //esta ruta se guardo en PrivateRoute.js
        //a travez de history navegamos al home del router
        const lastPath = localStorage.getItem('lastPath') || '/';

        //una vez que hizo login lo enviamos a la ultima pagina visitada
        history.replace(lastPath);
    }

    //retornamos el codigo JSX del componente
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
