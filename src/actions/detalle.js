import { solicitarDetalle } from "../helpers/solicitarDetalle";
import { solicitarEquipos } from "../helpers/solicitarEquipos"
import { solicitarUsuarios } from "../helpers/solicitarUsuarios";
import { types } from "../Types/Types";


export const startCargarDetalle = (idDet = null)=>{
    return async(dispatch)=>{
        try {
            let resp = await solicitarEquipos();
            
            dispatch( cargarEquipos( resp.data ) );

            resp = await solicitarUsuarios();
            dispatch( cargarUsuarios( resp.data ) );

            resp = await solicitarDetalle(idDet);
            dispatch( selecDetalle( resp.data[0] ) );

        } catch (error) {
            console.log(error);
            alert('Error durante la carga de datos');
        }
      
       
    }
}

const selecDetalle = (det = {})=>({
    type: types.selecDetalle,
    payload : {
        ...det
    }
})


const cargarEquipos = (equipos = [])=>({
    type: types.cargarEquipos,
    payload: [
        ...equipos
    ]
   
})

const cargarUsuarios = ( usuarios = [])=>({
    type: types.cargarUsuarios,
    payload: [
        ...usuarios
    ]
       
  
})