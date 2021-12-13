import { types } from "../Types/Types";

const initialState = {
    listado : [],
    cargados: false,
};

export const tipoTareasReducer = ( state = initialState, action = {type : null , payload : null})=>{

    switch (action.type) {
        case types.cargarTipoTareas:
            return {
                ...state,
                listado : [
                    ...action.payload
                ],
                cargados: true
            }
               
        
        default:
            return state;
    }


}