//importamos la libreria React para trabajar con codigo JSX
import React from 'react'
//imporamos los componentes de react-roter
import { Redirect, Route, Switch } from 'react-router-dom'
//importamos los functional components de nuestra app
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DCScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
//importamos el functional component de menu de navegacion
import { Navbar } from '../components/ui/Navbar'

//creamos el functional component 
export const DashboardRoutes = () => {
    
    //retornamos el codigo JSX del componente
    return (
        <>       
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/marvel" component= { MarvelScreen } />
                    <Route exact path="/hero/:heroId" component= { HeroScreen } />
                    <Route exact path="/dc" component= { DCScreen } />
                    <Route exact path="/search" component= { SearchScreen } />
                    <Redirect to="/marvel" />
                </Switch>                
            </div>
        </>
    )
}
