import React from 'react'
import { LineaHistorial } from './LineaHistorial'

export const Historial = () => {
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
                    <th>Fecha Inicio</th>
                    <th>Equipo</th>
                    <th>Tarea a realizar</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    <LineaHistorial />
                </tbody>
              </table>
        </div>
        
    </div>
    )
}
