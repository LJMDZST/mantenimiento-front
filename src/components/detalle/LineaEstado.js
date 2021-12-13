

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actualizarDetalle } from '../../actions/detalle';
import { useForm } from '../../hooks/useForm';

export const LineaEstado = () => {
    const dispatch = useDispatch();
    
    const {detalle} = useSelector(state => state.detalleReducer);
    const {values, handleInputChange} = useForm({
        estado : detalle.id_estado
    })

    useEffect(() => {
        
        dispatch( actualizarDetalle( {
            ...detalle,
            id_estado: values.estado
        }) );


    }, [values ])

    return (
        <div className="form-check">
            <div className="row  estado">
                <div className="col col-2">
                    <label>Estado:</label>
                </div>
                <div className="col col-3">
                    <input className="form-check-input" 
                        type="radio" 
                        value={2}
                        name="estado" 
                        checked={ values.estado === 2 }
                        onChange={handleInputChange}
                    />
                    <label className="form-check-label text-warning" htmlFor="estado"> Pendiente </label>
                </div>
        
            
                <div className="col col-3">
                    <input className="form-check-input" 
                        type="radio" 
                        value={1}
                        name="estado" 
                        checked={ values.estado === 1 }
                        onChange={handleInputChange}
                    />
                    <label  className="form-check-label text-success" htmlFor="estado"> Completo </label>

                </div>
        
            
                <div className="col col-3">
                    <input className="form-check-input"
                        type="radio" 
                        value={3}
                        name="estado" 
                        checked={ values.estado === 3 }
                        onChange={handleInputChange}
                    />
                    <label className="form-check-label text-danger" htmlFor="estado">Cancelado </label>

                </div>
            </div>
        
        </div>
    )
}
