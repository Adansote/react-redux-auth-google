/*import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ingreseUsuarioAccion } from '../Redux/usuarioDucks'
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.usuario.loading);
  const activo = useSelector(store => store.usuario.activo);
  
  React.useEffect(() => {
    if(activo) {
      props.history.push("/");
    }
  }, [activo, props.history]);
    
  return (
    <div className='mt-5 text-center '>
       <h3>Ingresando con Google</h3>
       <hr />
       <button
       onClick={() => dispatch(ingreseUsuarioAccion())} 
       disabled={loading} 
       className='btn btn-outline-dark'>Acceder</button>
      
    </div>
  )
}

export default withRouter(Login);

*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ingreseUsuarioAccion } from '../Redux/usuarioDucks';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.usuario.loading);
  const activo = useSelector(store => store.usuario.activo);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (activo) {
      navigate("/");
    }
  }, [activo, navigate]);
    
  return (
    <div className='mt-5 text-center'>
       <h3>Ingresando con Google</h3>
       <hr />
       <button
       onClick={() => dispatch(ingreseUsuarioAccion())} 
       disabled={loading} 
       className='btn btn-outline-dark'>Acceder</button>
      
    </div>
  );
}

export default Login;


