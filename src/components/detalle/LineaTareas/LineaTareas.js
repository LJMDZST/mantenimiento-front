

import moment from 'moment';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agreagarTarea } from '../../../actions/tareas';
import { LineaFilaTarea } from './LineaFilaTarea';

export const LineaTareas = () => {

    const dispatch = useDispatch();
    const {id_mantenimiento} = useSelector(state => state.detalleReducer.detalle);
    const {listado} = useSelector(state => state.tareasReducer);

    const handleClickAgregarTarea = ( e )=>{
        e.preventDefault();

        dispatch( agreagarTarea( {
            id_tarea : listado.length,
            id_mantenimiento : id_mantenimiento,
            id_tipo_tarea : 1,
            observ: '',
            fecha : moment()
        }))
    }

    return (
        <div className="row ">
           
            <table>
                <colgroup>
                    <col span="1" style={{width: "30%"}} />
                    <col span="1" style={{width: "60%"}} />
                    <col span="1" style={{width: "10%"}} />
                </colgroup>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Observ</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                {
                    listado.map( (tarea,i) => 
                        <LineaFilaTarea tarea = {tarea} key={i} />
                        
                    )
                }
                </tbody>
            </table>
            <div className='row d-flex justify-content-end'>
                <div className=' col col-1  '>
                    <button className='btn btn-success'
                        onClick={ handleClickAgregarTarea}
                    >
                        +
                    </button>
                </div>
            </div>
            
        </div>
    )
}
