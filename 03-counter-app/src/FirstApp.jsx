import React from 'react';
import PropTypes from 'prop-types'

const newMessage = {
    message: 'Hola Mundo',
    title: 'Kevin'
}

const getResult = () =>{
    return 4+4;
}

export const FirstApp = ({title, subtitle, number}) => { 
  return (
    <>
    <h1 data-testid="test-title">{title}</h1>
    {/* <h1>{getResult()}</h1> */}

    {/* <code>{JSON.stringify(newMessage)}</code> */}
    <p>{subtitle}</p>
    <p>{number+1}</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,

}

FirstApp.defaultProps = {
    subtitle: "No hay subtitulo" 
}