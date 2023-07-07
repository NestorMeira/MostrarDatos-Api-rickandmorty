import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { unicoPersonaje } from "../funciones/funciones"
const Personaje = () => {

const [personaje, setPersonaje] = useState(null)

const {id} = useParams()

useEffect(()=>{
  unicoPersonaje(id, setPersonaje)
},[])

  return (
    <>
 {personaje != null ? (
  <div>
      <h2>Personaje con el id {id}</h2>
      <p>con el nombre{personaje.name}</p>
      <img src={personaje.image} alt="imagen"/>
      </div>

 ) : ('no hay personajes')}
    </>
  )
}

export default Personaje