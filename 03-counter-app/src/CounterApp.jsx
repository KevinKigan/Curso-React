import React from 'react';
import PropTypes from 'prop-types'
import {useState} from 'react'

export const CounterApp = ({value}) => {

    const[ counter, setCounter ] = useState(value);

    const addOne = () => {
        setCounter(counter + 1)
    }
    const substractOne = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(value)
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button aria-label='btn-add' onClick={addOne}>+1</button>
        <button aria-label='btn-substract' onClick={substractOne}>-1</button>
        <button aria-label='btn-reset' onClick={reset}>Reset</button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}