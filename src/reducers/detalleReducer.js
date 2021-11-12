import { types } from "../Types/Types";

const initialState = {
    id_mantenimiento : null,
    id_equipo : null ,
    id_usuario : null ,
    fecIni : null ,
    fecFin : null ,
    tarea : null ,
    observ : null ,
    id_estado : null
}

export const detalleReducer = ( state = initialState, action = {type : null , payload : null})=>{
    switch (action.type) {
        case types.selecDetalle : 
            return {
                ...state,
                id_mantenimiento : action.payload.id_mantenimiento,
                id_equipo : action.payload.id_equipo,
                id_usuario : action.payload.id_usuario,
                fecIni : action.payload.fecIni,
                fecFin : action.payload.fecFin,
                tarea : action.payload.tarea,
                observ : action.payload.observ,
                id_estado : action.payload.id_estado
            }
        case types.limpiarDetalle : 
            return {
                ...initialState
            }
            
        default: return state;
    }
}