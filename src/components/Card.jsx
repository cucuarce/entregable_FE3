import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <p className='card-p'>¡Hola {props.nombre}!</p>
        <p className='card-p'>Sabemos que tu equipo favorito es:</p>
        <p className='card-p-equipo'>{props.equipo}</p>
    </div>
  )
}

export default Card