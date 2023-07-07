import axios from "axios";

const todosPersonajes = async (state) =>{
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results) //guardamos en un ESTADO la petición y a que parte de la Api queremos acceder
}

const unicoPersonaje = async (id, state)=>{
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data)
}
 export{
    todosPersonajes,
    unicoPersonaje
 }