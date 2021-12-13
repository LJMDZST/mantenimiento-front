import { types } from "../Types/Types";

const initialState = {
    listado : [],
    cargados: false
};

export const tecnicosReducer = ( state = initialState, action = {type : null , payload : null})=>{

    switch (action.type) {
        case types.cargarTecnicos:
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