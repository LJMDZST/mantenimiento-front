import { types } from "../Types/Types";

const initialState = {
    detalle : {
        id_mantenimiento : null,
        id_equipo : null ,
        id_usuario : null ,
        id_tecnico: null,
        fecIni : null ,
        fecFin : null ,
        tarea : null ,
        observ : null ,
        id_estado : null
    }
    
}

export const detalleReducer = ( state = initialState, action = {type : null , payload : null})=>{
    switch (action.type) {
        case types.selecDetalle : 
            return {
                ...state,
                detalle: {
                    ...action.payload
                }
              
            }
        case types.actualizarDetalle: 
            return {
                ...state,
                detalle : {
                    ...action.payload
                }
            }
        case types.limpiarDetalle : 
        return {
            ...initialState
        }
        default: return state;
    }
}