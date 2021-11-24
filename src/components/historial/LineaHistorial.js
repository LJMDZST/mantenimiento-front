import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startCargarDetalle } from '../../actions/detalle';

export const LineaHistorial = ( {idDetalle,fecIni,id_equipo,tarea,id_estado} ) => {
    const dispatch = useDispatch();

    const handleClickEditar = ( e )=>{
        e.preventDefault();
        dispatch( startCargarDetalle(idDetalle) )
    }

    const handleClickCancelar = ()=>{}
    return (
        <tr >
            <td>{ fecIni }</td>
            <td>{ id_equipo }</td>
            <td>{ tarea }</td>
            <td>
                {
                    id_estado === 1 && <span className="text-success ">Terminado</span>
                }
                {
                    id_estado === 2 && <span className="text-warning ">Pendiente</span>
                }
                {
                    id_estado === 3 && <span className="text-danger ">Cancelado</span>
                }
            
            </td>
            <td>
                <button className="btn btn-link"
                    onClick = {handleClickEditar}
                >
                    <Link to='/mant/detalle'> Editar </Link>
                </button>
                <button className="btn btn-link"
                     onClick = {handleClickCancelar}
                >Cancelar</button> 
            </td>
        </tr>
    )
}
