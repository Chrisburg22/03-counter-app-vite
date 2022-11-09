

const newMessage = {
    message: 'Hola Mundo',
    title: 'Christian'
}

export const FirstApp = () =>{

    const funcionEjemplo = () => {
        const palabraNueva = newMessage.title + " Ramos Peres y así podria crear una función más com pleja";
        return palabraNueva;
    };

    return ( 
        <>
            <h1>{funcionEjemplo()}</h1> 
            {/*<code> { JSON.stringify{ newMessage } } </code> */}
            <p>Curso de React</p>
        </>//Esto es lo mismo que el Fragment
    );
}