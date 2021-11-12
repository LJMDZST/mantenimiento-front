import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
import thunk from 'redux-thunk'

import {historialReducer} from '../reducers/historialReducer';
import {detalleReducer} from '../reducers/detalleReducer';
import {uiReducer} from '../reducers/uiReducer';
/** Configuracion para trabajar con funciones asincronas en nuestra app */

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    historialReducer,
    detalleReducer,
    uiReducer
});


export const  store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);