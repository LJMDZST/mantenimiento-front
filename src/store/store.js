import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import thunk from 'redux-thunk'

import { historialReducer} from '../reducers/historialReducer';
import { detalleReducer} from '../reducers/detalleReducer';
import { uiReducer} from '../reducers/uiReducer';
import { usuariosReducer } from '../reducers/usuariosReducer';
import { tecnicosReducer } from '../reducers/tecnicosReducer';
import { equiposReducer } from '../reducers/equiposReducer';
import { tareasReducer } from '../reducers/tareasReducer';
import { tipoTareasReducer } from '../reducers/tipoTareasReducer';
/** Configuracion para trabajar con funciones asincronas en nuestra app */

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const reducers = combineReducers({
    
    detalleReducer,
    equiposReducer,
    historialReducer,
    tareasReducer,
    tipoTareasReducer,
    tecnicosReducer,
    usuariosReducer,
    uiReducer
});


export const  store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);