
import React from 'react';
import moment from 'moment'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export const LineaFechas = () => {

    const {detalle} = useSelector(state => state.detalleReducer);
    const { values, handleInputChange } = useForm({
        fecIni : detalle.fecIni ,
        fecFin : detalle.fecFin
    })


    return (
        <div className="row">
        
            <div className="col col-1  mt-1">
                <label className="mt-3"  htmlFor="FecIni" >Fecha Inicio:</label>
            </div>
            <div className="col col-2 m-3">
                <input className="form-control" 
                    name= "FecIni" 
                    type="date" 
                    value={moment(values.fecIni).format('YYYY-MM-DD')}
                    onChange={handleInputChange}
                />
            </div>
        
            <div className="col col-1 mt-1">
                <label className="mt-3" htmlFor="fechaFin">Fecha fin:</label>
            </div>
            <div className="col col-2 m-3">
                <input className="form-control" 
                    name="fechaFin" 
                    type="date" 
                    value={moment(values.fecFin).format('YYYY-MM-DD')}
                    onChange={handleInputChange}
                />
            </div>
    
        </div>
    )
}
