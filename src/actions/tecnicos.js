import { solicitarTecnicos } from '../helpers/solicitarTecnicos';
import { types } from '../Types/Types';


export const startCargarTecnicos = ()=>{
    return async(dispatch)=>{
        
        try {
            const resp = await solicitarTecnicos();
            
            dispatch( cargarTecnicos( [...resp.data] ) );

           

        } catch (error) {
            console.log(error);
            alert('Error durante la carga de tecnicos');
        }
        
        
    }
}

const cargarTecnicos = (tecnicos = [])=>({
    type: types.cargarTecnicos,
    payload: [
        ...tecnicos
    ]
   
})

