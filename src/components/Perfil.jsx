import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actualizarUsuarioAccion, editarFotoAccion } from '../Redux/usuarioDucks'



const Perfil = () => {
  const usuario = useSelector(store => store.usuario.user)
 const  loading = useSelector(store => store.usuario.loading)
  const [nombreUsuario, setNombreUsuario]= React.useState(usuario.displayName)
  const [activarFormulario, setActivarFormulario] = React.useState(false)
  const dispatch = useDispatch()
  
  const actualizarUsuario =() =>{
    if(!nombreUsuario.trim()){
      console.log("nombre vacio")
      return
    }

   dispatch(actualizarUsuarioAccion(nombreUsuario))
   setActivarFormulario(false)
  }

  const [error, setError] =React.useState(false)

  const seleccionarArchivo = imagen =>{
    console.log(imagen.target.files[0])
    const imagenCliente =imagen.target.files[0]
    if(imagenCliente===undefined){
      console.log("no se selecciono imagen")
      return
    }
    if(imagenCliente.type ==="image/jpeg" || imagenCliente.type ==="image/png" || imagenCliente.type ==="image/jpg"){
   dispatch(editarFotoAccion(imagenCliente))
   setError(false)
    }else{
   setError(true)
    }
  }
  return (
   
     <div className='mt-5 text-center'>
     <div className="card">
        <div className="card-body ">
            <img  src={usuario.photoURL} alt='' width="100px" className= " img-fluid" />
            <h5 className='card-title'>Nombre: {usuario.displayName}</h5>
            <p className='card-text'>Email: {usuario.email}</p>
            <button className='btn btn-dark' onClick={()=> setActivarFormulario(true)}>Editar Nombre </button>
       

         {

        error && 
        <div className='alert alert-warning mt-3'>solo archivos png, jpeg, jpg</div>

          }

     <div className="input-group mb-3 mt-2 ">
            <input 
            type="file" 
            className="form-control "
             placeholder="Recipient's username" 
             aria-describedby="button-addon2 "
             onChange={e =>seleccionarArchivo(e)}
             disable={loading.toString()}
             />
         <button className={loading ? "btn btn-outline-dark disable" : "btn btn-outline-dark"} 
            type="button" id="button-addon2 ">
              Actualizar Imagen
          </button>
     </div>

        </div>
          {
            loading &&
        <div className="card-body">
             <div className="text-center my-3">
             <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
             </div>
             </div>
       </div>
          }
        
          {
            activarFormulario &&
            <div className='card-body'>
            <div className="row justify-content-center">
              <div className="col-md-5">
              <div className="input-group mb-3">
              <input 
              type="text" 
              className="form-control" 
              placeholder="Recipient's username"
              value={nombreUsuario}
              onChange={e => setNombreUsuario(e.target.value)}
              
              />
              <div className='input-group-append'>
              <button className="btn btn-dark"
              type="button"
              onClick={()=> actualizarUsuario()}
              >
                Actualizar
                </button>
              </div>
              </div>
              </div>
            </div>
          </div>
          
          }
        </div> 

     
   
         </div>

  )
}


export default Perfil
