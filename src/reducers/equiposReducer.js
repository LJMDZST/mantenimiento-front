import { types } from "../Types/Types";

const initialState = {
    listado : [],
    cargados: false,
};

export const equiposReducer = ( state = initialState, action = {type : null , payload : null})=>{

    switch (action.type) {
        case types.cargarEquipos:
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