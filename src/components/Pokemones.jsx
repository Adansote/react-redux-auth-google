import React from 'react'
import DetallePoke from './DetallePoke'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion} from '../Redux/pokeDucks'

const Pokemones = () => {
  const dispatch = useDispatch()
  const pokemones = useSelector(store => store.pokemones.results)
 const next = useSelector(store => store.pokemones.next)
 const previous = useSelector(store => store.pokemones.previous)

 React.useEffect(()=>{
  const fetchData =()=>{
      dispatch(obtenerPokemonesAccion())
  }
  fetchData()
}, [dispatch])

  return (
    <div className='row mt-4'>
      <div className='col-md-6'>



      
     <h3 className='fw-bold '>Lista de Pokemones</h3> 
      <br />
      <div className='d-flex justify-content-between mt-2'>
      {
        pokemones.length === 0 &&   <button onClick={()=> dispatch(obtenerPokemonesAccion())} className='btn btn-primary fw-bold'>Buscar Pokemones</button>
      }
     {
    next && <button onClick={()=> dispatch(siguientePokemonAccion())} className='btn btn-outline-dark fw-bold'>Siguiente</button>
     }
      {
        previous &&   <button onClick={()=> dispatch(anteriorPokemonAccion())} className='btn btn-outline-warning fw-bold'>Anterior</button>
      }

</div>
     
      <ul className='list-group mt-4 bg-secondary-subtle border border-info p-2 mb-2'>
        {
          pokemones.map(item => (

            <li className='list-group-item text-uppercase fw-bolder border border-info p-2 mb-2'
             key={item.name}>{item.name}
             <button onClick={() => dispatch(unPokeDetalleAccion(item.url))} className='btn btn-dark btn-sm d-flex justify-content-between'>
              Info
            </button>
             </li>
          ))
        }
      </ul>
      </div>

      <div className='col-md-6 mt-5'>
          <h3  >Detalle del pokemon </h3>
          <DetallePoke/>
      </div>
    </div>
  )
}

export default Pokemones
