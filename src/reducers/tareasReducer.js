import { types } from "../Types/Types";

const initialState = {
    listado : [],
    cargados: false,
};

export const tareasReducer = ( state = initialState, action = {type : null , payload : null})=>{

    switch (action.type) {
        case types.cargarTareas:
            return {
                ...state,
                listado : [
                    ...action.payload
                ],
                cargados: true
            }
        case types.editarTarea:
            return {
                ...state,
                listado : state.listado.map( tarea =>
                    ( tarea.id_tarea === action.payload.id_tarea) 
                    ? { ...action.payload }
                    : tarea
                )
            }
        case types.agreagarTarea :
            return {
                ...state,
                listado : [
                    ...state.listado,
                    {...action.payload}
                ]
            }
        default:
            return state;
    }


}