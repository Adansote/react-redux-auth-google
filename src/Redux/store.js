
import { combineReducers } from "@reduxjs/toolkit";
import usuarioReducer, { leerUsuarioActivo } from "./usuarioDucks";
//import { applyMiddleware, combineReducers, createStore } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from '@reduxjs/toolkit';

import pokeReducer from "./pokeDucks";
import thunk from "redux-thunk"


const rootReducer = combineReducers ({
    pokemones: pokeReducer,
    usuario: usuarioReducer,
    
});
/*
export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    return store
}
*/
export default function generateStore() {
    const store = configureStore({
      reducer: rootReducer,
      middleware: [thunk],
      devTools: process.env.NODE_ENV !== 'production',
    });
  leerUsuarioActivo()(store.dispatch)
    return store;
  }
//configuracion de la extencion de google chrome
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
*/