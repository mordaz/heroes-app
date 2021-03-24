//libreria para trabajar con elementos JSX de REACT
import React from 'react';
//libreria para manipular los elementos del documento HTML
import ReactDOM from 'react-dom';
//importamos el functional component principal
import { HeroesApp } from './HeroesApp';
//importamos la plantilla CSS
import './index.css';

//referenciamos el <div id="app"></div> del documento principal index.html
//para poder hacer esta referencia se requiere importar el react-dom
const divRoot = document.querySelector('#root');

//enviamos el componente principal al documento HTML usando el ReactDOM
//los componentes de react se deben enviar envueltos con <>
ReactDOM.render( <HeroesApp /> , divRoot ); 