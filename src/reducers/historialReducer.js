import { types } from "../Types/Types";

const initialState = [];

export const  historialReducer = ( state = initialState, action = {type : null , payload : null})=>{
    switch (action.type) {
        case types.cargarHistorial : 
            return [
                ...state,
                ...action.payload
            ]
              
            
            
        default: return state;
    }
}