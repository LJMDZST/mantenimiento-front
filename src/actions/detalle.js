import { solicitarDetalle } from '../helpers/solicitarDetalle';
import { types } from '../Types/Types';
import { FinalizarCargarDetalle, iniciarCargarDetalle, IniciarguardarCambios } from './ui';


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

export const startGuardarDetalle = ()=>{
    return async ( dispatch,getState )=>{

        try {

            dispatch( IniciarguardarCambios() );

            const { detalle } = getState().detalleReducer;

            


        } catch (error) {
            
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

