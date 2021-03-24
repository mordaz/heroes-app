//importamos la libreria React para trabajar con codigo JSX
import React, { useContext } from 'react'
//importamos los componentes de react-router
import { BrowserRouter as Router, Switch } from 'react-router-dom'
//importamos el context para tener acceso a las hooks globlaes
import { AuthContext } from '../auth/authContext'
//importamos el funcional component de login
import { LoginScreen } from '../components/login/LoginScreen'
//importamos el router de la aplicacion
import { DashboardRoutes } from './DashboardRoutes'
//importamos nuestro Funtional Component para mostrar componentes solo si el usario hizo login
import { PrivateRoute } from './PrivateRoute'
//importamos nuestro Funtional Component para no mostrar el login si ya esta autenticado
import { PublicRoute } from './PublicRoute'

//creamos el functional component 
export const AppRouter = () => {

    //antes de abrir el menu de la app verificamos si el usuario esta autenticado
    //para ello abrimos el context para leer el hook reducer global almacenado ahi
    const context = useContext(AuthContext);
    //descruturamos el usuario del hook montado en el context
    const { user } = context;
    
    //retornamos el codigo JSX del componente
    return (
        // Router solo se usa en el router principal
        <Router>
            <div>
                <Switch>
                    {/* si esta en /login no muestra el menu de navegacion  */}
                    <PublicRoute 
                        exact path ="/login" 
                        component = { LoginScreen }
                        isLogged = { user.logged }
                    />
                    {/* si esta en cualquier otra ruta si muestra el menu de navegacion */}
                    <PrivateRoute
                        path = "/" 
                        component = { DashboardRoutes } 
                        isLogged = { user.logged }  
                    />
                </Switch>
            </div>
        </Router>        
    )
}
