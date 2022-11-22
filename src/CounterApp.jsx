import { useState } from 'react'
import Proptypes from 'prop-types'

//HOOK
export const CounterApp = ({ value }) => {
    
    const [counter, setCounter] = useState(value);
    
    const handleAdd = () => {
        /**
         * event nos servira para conocer imformacion del evento
         * console.log(event);
         * 
         * Esta es una alternativa para cambiar el estado 
         * setCounter( (c) => c+1 );
         */
        setCounter( counter+1 );
    }

    return (
    <>
      <h1>CounterApp</h1>
      <h2>{ counter }</h2>

      <button onClick={ handleAdd }>
        +1
      </button>
    </>
  )
}

CounterApp.proptypes = {
    value: Proptypes.number.isRequired
}

