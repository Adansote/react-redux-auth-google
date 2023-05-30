/*import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { cerrarSesionAccion } from '../Redux/usuarioDucks'
import { withRouter } from 'react-router-dom';

const Navbar = (props) => {
  const dispatch = useDispatch()
  const cerrarSesion = ()=> {
  
    dispatch(cerrarSesionAccion())
    props.history.push("login")
  }
  return (
    <div className='navbar navbar-dark bg-dark'>
        <Link to="/"  className='navbar-brand' >APP POKEMONES </Link>
        <div>
        <div className='d-flex'>
            <NavLink className="btn btn-outline-dark mr-2 text-white " to="/">Inicio</NavLink>
            <NavLink className="btn btn-outline-dark mr-2 text-white" to="/login" >Login</NavLink>
            <button onClick={()=> cerrarSesion()} className='btn btn-outline-dark text-white mr-2'>Cerrar Sesion </button>
        </div>
    </div>
    </div>
  )
}

export default withRouter(Navbar);
*/

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { cerrarSesionAccion } from '../Redux/usuarioDucks';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cerrarSesion = () => {
    dispatch(cerrarSesionAccion());
    navigate("/login");
  };
   const activo = useSelector(store => store.usuario.activo)

  return (
    <div className='navbar w-auto p-2 shadow-lg  navbar-dark bg-dark'>
      <Link to="/" className='navbar-brand'>APP de Pokemones</Link>
      <div>
        <div className='d-flex'>
         {
          activo ?(
          <>
          <NavLink className="btn btn-outline-dark mr-2 text-white" to="/" end>Inicio</NavLink>
          <button onClick={()=> cerrarSesion()} className='btn btn-outline-dark text-white mr-2'>Cerrar Sesión</button>
          </> 
          ):(
            <NavLink className="btn btn-outline-dark mr-2 text-white" to="/login">Login</NavLink>
          )
         }
          
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;