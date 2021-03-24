//importamos la libreria React para trabajar con codigo JSX
//importamos useContext de React para tener acceso al componente context
import React, { useContext } from 'react';
//importamos Link y NavLink de router-dom para navegar entre componentes
import { Link, NavLink, useHistory } from 'react-router-dom';
//importamos el context para tener acceso al reducer global
import { AuthContext } from '../../auth/authContext';
//importamos los tipos validos de dispatch para el hook reducer
import { types } from '../../types/types';

//creamos el functional component 
export const Navbar = () => {
    
    //obtenemos los elementos de autenticacion declarados en el componente context
    const context = useContext(AuthContext);
    //destructuramos el user y el dispatch declarados en el context
    const {user, dispatch} = context;

    //usamos el custom hook de react-router obtenemos el history para navegar
    const history = useHistory();

    //creamos el handle de logout
    const handleLogout = () => {
        //hacemos logout usando el hook reducer 
        dispatch({
            type: types.logout
        });
        //navegamos a la pagina de login
        history.replace('/login');
    }
    
    //retornamos el codigo JSX del componente
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            

            <Link
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto">
                    <span className="nav-item nav-link text.in">
                    { user.name }
                    </span>
                    <button
                        className="btn btn-sm btn-outline-secondary" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}