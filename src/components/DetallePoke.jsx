/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { unPokeDetalleAccion } from '../Redux/pokeDucks'
import { useDispatch, useSelector } from 'react-redux'


const DetallePoke = () => {
    const dispatch = useDispatch()
    React.useEffect(()=>{
        const fetchData =()=>{
            dispatch(unPokeDetalleAccion())
        }
        fetchData()
    }, [dispatch])

    const pokemon= useSelector(store => store.pokemones.unPokemon)
   

  return pokemon ?(
    <div className='card mt-5  text-center'>
      <div  className='card-body '>
        <img src={pokemon.foto} className='img-fluid w-50 height: 80px' alt=''/>
        <div className='card-title fw-bolder text-uppercase'>{pokemon.nombre}</div>
         <p className='card-text'>Alto: {pokemon.alto} | Ancho: {pokemon.ancho}</p>
      </div>
    </div>
  ) : null
}

export default DetallePoke
