import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const LineaHistorial = ( {fecIni,id_equipo,tarea,id_estado} ) => {


    return (
        <tr>
            <td>{fecIni}</td>
            <td>{id_equipo}</td>
            <td>{tarea}</td>
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
                <button className="btn btn-link">
                    <Link to='/mant/detalle'> Editar </Link>
                </button>
                <button className="btn btn-link">Cancelar</button> 
            </td>
        </tr>
    )
}
