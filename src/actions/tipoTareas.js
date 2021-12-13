import { types } from "../Types/Types"



export const cargarTipoTareas = (TipoTareas = [])=>({
    type: types.cargarTipoTareas,
    payload: [
        ...TipoTareas
    ]
   
})
