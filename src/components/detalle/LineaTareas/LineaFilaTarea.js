
import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../hooks/useForm';
import moment from 'moment';
import { editarTarea } from '../../../actions/tareas';

export const LineaFilaTarea = ({ tarea }) => {


    const dispatch = useDispatch();
    

    const {listado: lTipoTareas} = useSelector(state => state.tipoTareasReducer);


    const {values,handleInputChange} = useForm({
        tipo_tarea : tarea.id_tipo_tarea,
        observ : tarea.observ,
        fecha : tarea.fecha
    });
    
    useEffect(() => {
        dispatch( editarTarea({
            ...tarea,
            id_tipo_tarea: values.tipo_tarea,
            observ: values.observ,
            fecha: values.fecha
        }));
        

    }, [values])
    
    return (
        <tr >
            <td>
                <select className="form-select" 
                    name='tipo_tarea'
                    value={values.tipo_tarea}
                    onChange={handleInputChange}
                >
                    {
                        lTipoTareas.map((tipoTarea,i) => 
                            <option 
                                key={i} 
                                value ={tipoTarea.id_tipo_tarea}
                            > {`${tipoTarea.id_tipo_tarea} - ${tipoTarea.nombre}`}
                            </option> 
                        )
                    }
                </select>
            </td>
            <td>
                <input 
                    className='form-control'
                    type='text' 
                    name='observ' 
                    value={values.observ}
                    onChange={handleInputChange}
                ></input>
            </td>
            <td>
                <input
                    className='form-control'
                    type='date'
                    name='fecha'
                    value={ moment(values.fecha).format('YYYY-MM-DD') }
                    onChange={handleInputChange}
                ></input>
            </td>
        </tr>
    )
}
