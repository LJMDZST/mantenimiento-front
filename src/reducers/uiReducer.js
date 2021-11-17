import { types } from "../Types/Types";



const initialState = {
    cargandoDetalle : false,
    guardandoDatos : false,
    msgError : null,
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
            guardandoDatos : action.payload.guardandoDatos,
            msgError : action.payload.msgError,
        } 
            
        default:
            return state;
    }
}