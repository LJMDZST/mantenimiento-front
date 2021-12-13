import { solicitarDetalle } from '../helpers/solicitarDetalle';
import { types } from '../Types/Types';
import { FinalizarCargarDetalle, iniciarCargarDetalle } from './ui';


export const startCargarDetalle = (idDet = null)=>{
    return async(dispatch)=>{
        try {
            dispatch( iniciarCargarDetalle() );
            
            const resp = await solicitarDetalle(idDet);

            dispatch( selecDetalle( resp.data[0]) );
            
            setTimeout(() => {
                
                dispatch(FinalizarCargarDetalle(''));
            }, 1000);

        } catch (error) {
            console.log(error);
            dispatch(FinalizarCargarDetalle('Error durante la carga de datos'));
        }
      
       
    }
}

export const actualizarDetalle = ( det = {} )=>({
    type: types.actualizarDetalle,
    payload: {
        ...det
    }
})

export const limpiarDetalle = ()=>({
    type: types.limpiarDetalle
})


const selecDetalle = (det = {})=>({
    type: types.selecDetalle,
    payload : {
        ...det
    }
});

