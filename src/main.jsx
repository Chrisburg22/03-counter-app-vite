import React from "react"; //Importacion de react 
import ReactDOM from "react-dom/client"; //Herramienta de renderizado

import { FirstApp } from "./FirtsApp";
//import HelloWorldApp from './HelloWorldApp';
import './styles.css' //Importando estilos 
//Renderizado de un componente en el DOM.
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="Hola soy goku!" subtitle={123}/>
    </React.StrictMode>
);