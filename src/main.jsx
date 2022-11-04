import React from "react"; //Importacion de react 
import ReactDOM from "react-dom/client"; //Herramienta de renderizado

//COMPONENTE
function App() {
    return ( <h1>Hola mundo!!</h1> );
}

//Renderizado de un componente en el DOM.
ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);