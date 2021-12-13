import { solicitarEquipos } from '../helpers/solicitarEquipos';
import { types } from '../Types/Types';

export const startCargarEquipos = ()=>{
    return async(dispatch)=>{
        
        try {
            const resp = await solicitarEquipos();
            dispatch( cargarEquipos( [...resp.data] ) );
   

        } catch (error) {
            console.log(error);
            alert('Error durante la carga de Equipos');
        }
        
        
    }
}

const cargarEquipos = (Equipos = [])=>({
    type: types.cargarEquipos,
    payload: [
        ...Equipos
    ]
   
})

