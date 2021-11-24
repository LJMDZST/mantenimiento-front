import { types } from "../Types/Types";

const initialState = {
    detalle : {
        id_mantenimiento : null,
        id_equipo : null ,
        id_usuario : null ,
        fecIni : null ,
        fecFin : null ,
        tarea : null ,
        observ : null ,
        id_estado : null
    },
    equipos : [],
    usuarios : []
    
}

export const detalleReducer = ( state = initialState, action = {type : null , payload : null})=>{
    switch (action.type) {
        case types.selecDetalle : 
            return {
                ...state,
                detalle: {
                    ...state.detalle,
                    ...action.payload
                }
              
            }
        case types.limpiarDetalle : 
            return {
                ...initialState
            }
        case types.cargarEquipos:
            return {
                ...state,
                equipos : [
                    ...state.equipos,
                    ...action.payload
                ]
            }
        case types.cargarUsuarios:
            return {
                ...state,
                usuarios : [
                    ...state.usuarios,
                    ...action.payload
                ]
            }   
        default: return state;
    }
}