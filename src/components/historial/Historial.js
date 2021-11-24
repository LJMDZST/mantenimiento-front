import React from 'react'
import {  useSelector } from 'react-redux';
import { LineaHistorial } from './LineaHistorial'

export const Historial = () => {

    const {historialReducer} = useSelector(state => state);

    return (
        <div className="container mt-5">
        <div className="row">
            <div className="d-flex justify-content-end ">
              <button className="btn btn-primary ">
                Agregar
             </button>
            </div>
             
        </div>
        <div className="row">
            <table className="table">
                <thead>
                  <tr>
                    <th>Fecha Inicio</th><th>Equipo</th><th>Tarea a realizar</th><th>Estado</th><th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      historialReducer.map( (lineaHistorial,i) => 
                        <LineaHistorial 
                          key={i}
                          idDetalle = {lineaHistorial.id_mantenimiento}
                          fecIni = {lineaHistorial.fecIni}
                          id_equipo = {lineaHistorial.id_equipo}
                          tarea = {lineaHistorial.tarea}
                          id_estado = {lineaHistorial.id_estado}
                        />  
                      )
                    }
                    
                </tbody>
              </table>
        </div>
        
    </div>
    )
}
