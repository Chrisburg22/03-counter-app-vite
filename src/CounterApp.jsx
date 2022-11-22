import Proptypes from 'prop-types'

export const CounterApp = ({value}) => {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </>
  )
}

CounterApp.proptypes = {
    value: Proptypes.number.isRequired
}

