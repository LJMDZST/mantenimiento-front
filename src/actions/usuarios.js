import { solicitarUsuarios } from '../helpers/solicitarUsuarios';
import { types } from '../Types/Types';


export const startCargarUsuarios = ()=>{
    return async(dispatch)=>{
        
        try {

            const resp = await solicitarUsuarios();

    
            dispatch( cargarUsuarios( [...resp.data] ) );

      
        
           
        } catch (error) {
            console.log(error);
            alert('Error durante la carga de Usuarios');
        }
        
        
    }
}



const cargarUsuarios = (usuarios = [])=>({
    type: types.cargarUsuarios,
    payload: [
        ...usuarios
    ]
   
})

