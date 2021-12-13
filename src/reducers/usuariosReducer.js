import { types } from "../Types/Types";

const initialState = {
    listado : [],
    cargados : false
};

export const usuariosReducer = ( state = initialState, action = {type : null , payload : null})=>{

    switch (action.type) {
        case types.cargarUsuarios:
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