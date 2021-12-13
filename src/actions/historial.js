import { solicitarHistorial } from '../helpers/solicitarHistorial';
import { types } from '../Types/Types';


export const startCargarHistorial = ()=>{
    return async(dispatch)=>{
        const resp = await solicitarHistorial();
        if(resp.ok){
            dispatch( cargarHistorial(resp.data.data) );

            
        } else {
            alert('Error al cargar historial de la BD');
        }
    }
}


const cargarHistorial = ( historial = [])=>({
    type : types.cargarHistorial,
    payload: [...historial]
});
