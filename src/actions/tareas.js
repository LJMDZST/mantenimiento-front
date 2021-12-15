
import { guardarTareas } from '../helpers/guardarTareas';
import { solicitarTareas } from '../helpers/solicitarTareas';
import { solicitarTipoTareas } from '../helpers/solicitarTipoTareas';
import { types } from '../Types/Types';
import { cargarTipoTareas } from './tipoTareas';
import { finalizarGuardarCambios, IniciarguardarCambios } from './ui';



export const startCargarTareas = ()=>{
    return async(dispatch,getState)=>{
        
        try {
            const {detalle} = getState().detalleReducer;

            let resp = await solicitarTipoTareas();
            dispatch( cargarTipoTareas( [...resp.data] ) );

            const {cargados } = getState().tipoTareasReducer;

            if( cargados){
                resp = await solicitarTareas(detalle.id_mantenimiento);
                console.log(resp.data)
                dispatch( cargarTareas( [...resp.data] ) );
            }      

        } catch (error) {
            console.log(error);
            alert('Error durante la carga de Tareas');
        }
        
        
    }
}

export const startGuardarTareas = ()=>{
    return async(dispatch , getState)=>{

        dispatch( IniciarguardarCambios() );

        const {listado} = getState().tareasReducer;

        const resp = await guardarTareas( listado );

        (! resp.ok )
            ? alert(`${resp.status}: Error al guardar los cambios `)
            : alert('Datos guardados')
        

        dispatch( finalizarGuardarCambios() );
    }
}

export const editarTarea = ( tarea = {} )=>({
    type: types.editarTarea,
    payload: {
       ...tarea
    }
});
export const agreagarTarea = ( tarea = {} )=>({
    type: types.agreagarTarea,
    payload: {
        ...tarea
    }
})
export const limpiarTareas = ( )=>({
    type: types.limpiarTareas,
   
})

const cargarTareas = (Tareas = [])=>({
    type: types.cargarTareas,
    payload: [
        ...Tareas
    ]
   
})

