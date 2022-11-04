import React from "react"; //Importacion de react 
import ReactDOM from "react-dom/client"; //Herramienta de renderizado

import {App} from './HelloWordApp';

//Renderizado de un componente en el DOM.
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);