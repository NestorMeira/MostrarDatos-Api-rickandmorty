import React, { useEffect, useState } from 'react'
import { todosPersonajes } from '../funciones/funciones'
import { Link } from 'react-router-dom'

const Inicio = () => {

const [personajes, setPersonajes] = useState(null)

useEffect(()=>{
  todosPersonajes(setPersonajes)
},[])

  return (
    <>
  {personajes != null ? (
    personajes.map(personaje =>(
      <div key={personaje.id}>
       <Link to={`/personaje/${personaje.id}`}><h2>{personaje.name}</h2></Link>
     
      </div>
    ))
  ) : ('no hay  personajes')}


    </>
  )
}

export default Inicio