import { types } from "../Types/Types";



const initialState = {
    cargandoHistorial : false,
    cargandoDetalle : false,
    msgError : null,
    msgModal : null,
}
export const uiReducer = ( state = initialState, action)=>{

    switch (action.type) {
        case types.clickAgregar:
            return {
                ...state,
                cargandoDetalle : action.payload.cargandoDetalle,
                msgError : action.payload.msgError
            }
        case types.clickEditar:
            return {
                ...state,
                cargandoDetalle : action.payload.cargandoDetalle,
                msgError : action.payload.msgError
            }
        case types.clickCancelar:
            return {
                ...initialState,
                msgError : action.payload.msgError
            }
        case types.GuardarCambios:
        return {
            ...state,
            msgError : action.payload.msgError,
            msgModal : action.payload.msgModal
        } 
            
        default:
            return state;
    }
}