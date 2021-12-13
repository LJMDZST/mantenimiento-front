import { types } from "../Types/Types";



const initialState = {
    cargandoDetalle : false,
    guardandoDatos : false,
    msgError : null,
}
export const uiReducer = ( state = initialState, action)=>{

    switch (action.type) {
        case types.iniciarCarga:
            return {
                ...state,
                cargandoDetalle: true
            }
        case types.finalizarCarga:
            return {
                ...state,
                cargandoDetalle: false,
                msgError: action.payload
            }
        case types.iniciarGuardarCambios:
        return {
            ...state,
            guardandoDatos : true,
        } 
        case types.finalizarGuardarCambios:
        return {
            ...state,
            guardandoDatos : false,
            msgError: action.payload
        } 
            
        default:
            return state;
    }
}