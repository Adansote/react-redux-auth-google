/*import React from "react"
import Pokemones from "./components/Pokemones";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Redirect
} from "react-router-dom";

import { auth } from "./configuracion/firebase";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false)

React.useEffect(() => {
  const fetchUser =()=>{
    auth.onAuthStateChanged(user => {
      console.log(user)
      if(user){
          setFirebaseUser(user)
      }else{
          setFirebaseUser(null)
      }
  })
  }
   fetchUser()
}, [])

const RutaPrivada = ({component, path, ...rest}) => {
  if(localStorage.getItem("usuario")){
   const usuarioStorage = JSON.parse(localStorage.getItem("usuario"))
   if(usuarioStorage.uid === firebaseUser.uid){
     return <Route component={component} path={path} {...rest} />
   }else{
   return <Redirect to="/login" {...rest}/>
   }
  }else{
  return  <Redirect to="/login" {...rest}/>
  }

}
  return  firebaseUser !== false ?(
    <Router>
      <div className="container mt-3">
        <Navbar/>
        <Routes>
          <RutaPrivada path="/" element={<Pokemones />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  ) : (<div>Loading.....</div>)
}

export default App;
*/
import React from "react";
import Pokemones from "./components/Pokemones";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Outlet,
  Navigate
} from "react-router-dom";

import { auth } from "./configuracion/firebase";

function App() {
  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = () => {
      auth.onAuthStateChanged(user => {
        console.log(user);
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      });
    };
    fetchUser();
  }, []);

  const RutaPrivada = ({ children }) => {
    if (localStorage.getItem("usuario")) {
      const usuarioStorage = JSON.parse(localStorage.getItem("usuario"));
      if (usuarioStorage.uid === firebaseUser.uid) {
        return children;
      } else {
        return <Navigate to="/login" replace />;
      }
    } else {
      return <Navigate to="/login" replace />;
    }
  };

  return firebaseUser !== false ? (
    <Router>
      <div className="container mt-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<RutaPrivada><Pokemones /></RutaPrivada>} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  ) : (
    <div>Loading.....</div>
  );
}

export default App;
