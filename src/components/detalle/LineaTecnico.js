


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarDetalle } from '../../actions/detalle';
import { useForm } from '../../hooks/useForm';

export const LineaTecnico = () => {

    const dispatch = useDispatch();

    const {detalle} = useSelector(state => state.detalleReducer);
    const {listado } = useSelector(state => state.tecnicosReducer);

    const { values, handleInputChange} = useForm({
        tecnico : detalle.id_tecnico
    })
    
    useEffect(() => {

        dispatch( actualizarDetalle( {
            ...detalle,
            id_tecnico : values.tecnico
        }) );

    }, [values ])

    return (
        <div className="row ">
            <div className="col col-2 ">
                <label className="mt-3" htmlFor="usuario">Tecnico</label>
            </div>
            <div className="col col-9 m-1">
                <select className="form-select" aria-label="Default select example"
                    name="tecnico"
                    value={ values.tecnico }
                    onChange={ handleInputChange }
                >
                    {
                        listado.map( tec =>                         
                            <option key={tec.id_tecnico} value={ tec.id_tecnico }>{tec.nombre}</option>
                        )
                    }
                </select>
            </div>
        </div>
    )
}
