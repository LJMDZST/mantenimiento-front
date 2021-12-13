import React from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { limpiarDetalle } from '../../actions/detalle';
import { limpiarTareas } from '../../actions/tareas';
import { LineaHistorial } from './LineaHistorial'

export const Historial = () => {
    const dispatch = useDispatch();
    const {listado} = useSelector(state => state.historialReducer);
    const {listado: lEquip, cargados} = useSelector(state => state.equiposReducer)

    const handleClickAgregarDetalle = (e)=>{
      e.preventDefault();
      dispatch( limpiarTareas());
      dispatch( limpiarDetalle());

    }
    return (
      <div className="container mt-3 animate__animated animate__slideInLeft">
        <div className="row">
            <div className="d-flex justify-content-end "
              onClick={handleClickAgregarDetalle}
            >
              <Link className="btn btn-primary " to="/mant/detalle">
                Agregar
            </Link>
            </div>
            
        </div>
        <div className="row">
            <div className="row">
                <h2 className="d-flex justify-content-center ">
                  HISTORIAL DE MANTENIMIENTO TÉCNICO
                </h2>
            </div>
            <table className="table">
                <colgroup>
                  <col span="1" style={{width: "15%"}} />
                  <col span="1" style={{width: "30%"}} />
                  <col span="1" style={{width: "20%"}} />
                  <col span="1" style={{width: "30%"}} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Fecha Inicio</th>
                    <th>Equipo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                    { 
                      (cargados) &&
                      listado.map( (lineaHistorial,i) => {
                  
                        const equipo = lEquip.find( equip =>
                            equip.id_equipo === lineaHistorial.id_equipo
                          );
                          
                        return <LineaHistorial 
                                key={i}
                                idDetalle = {lineaHistorial.id_mantenimiento}
                                fecIni = {lineaHistorial.fecIni}
                                id_equipo = {`${lineaHistorial.id_equipo} - ${equipo.nombre}`}
                                id_estado = {lineaHistorial.id_estado}
                              />  

                      }
                        
                      )
                    }
                    
                </tbody>
              </table>
        </div>
      
      </div>
    )
   
}
