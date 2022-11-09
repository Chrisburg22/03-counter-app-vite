
const getResult = (a,b) => {
    return a + b;
}

export const FirstApp = () =>{

    return ( 
        <>
            <h1>{getResult(10,11)}</h1> 
            {/*<code> { JSON.stringify{ newMessage } } </code> */}
            <p>Curso de React</p>
        </>
    );
}