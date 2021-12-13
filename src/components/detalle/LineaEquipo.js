import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarDetalle } from '../../actions/detalle';

import { useForm } from '../../hooks/useForm';

export const LineaEquipo = () => {
    const dispatch = useDispatch()

    const {detalle} = useSelector(state => state.detalleReducer);
    const {listado} = useSelector(state => state.equiposReducer);
    
    const { values, handleInputChange } = useForm({
        equipo :  detalle.id_equipo
    })
    
    useEffect(() => {
        
        dispatch( actualizarDetalle( {
            ...detalle,
            id_equipo: values.equipo
        }) );

    }, [values ])


    return (
        <div className="row ">
            <div className="col col-2 ">
                <label className="mt-3" htmlFor="equipo">Equipo</label>
            </div>
            <div className="col col-9 m-1">
                <select className="form-select"
                    name='equipo' 
                    value={values.option}
                    onChange={handleInputChange}
                >
                    {
                        listado.map((equip,i) => 
                            <option 
                                key={i} 
                                value ={equip.id_equipo}
                             > {`${equip.id_equipo} - ${equip.nombre}`}
                             </option> 
                        )
                    }
                </select>
            </div>
        </div>
    )
}
