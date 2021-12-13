import { types } from "../Types/Types";

const initialState = {
    listado : []
};

export const  historialReducer = ( state = initialState, action = {type : null , payload : null})=>{
    switch (action.type) {
        case types.cargarHistorial : 
            return {
                ...state,
                listado : [
                    ...action.payload
                ]
            }
              
            
            
        default: return state;
    }
}