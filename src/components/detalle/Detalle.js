import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { limpiarDetalle } from '../../actions/detalle';
import { startCargarEquipos } from '../../actions/equipos';
import { startCargarTareas, startGuardarTareas } from '../../actions/tareas';
import { startCargarTecnicos } from '../../actions/tecnicos';
import { startCargarUsuarios } from '../../actions/usuarios';
import { LineaEquipo } from './LineaEquipo';
import { LineaEstado } from './LineaEstado';
import { LineaFechas } from './LineaFechas';
import { LineaTareas } from './LineaTareas/LineaTareas';
import { LineaTecnico } from './LineaTecnico';
import { LineaUsuario } from './LineaUsuario';

export const Detalle = () => {
    const dispatch = useDispatch();

    const {cargados : eqCargados} = useSelector(state => state.equiposReducer);
    const {cargados : usrCargados} = useSelector(state => state.usuariosReducer);
    const {cargados : tecCargados} = useSelector(state => state.tecnicosReducer);
    const {cargados : tarCargadas} = useSelector(state => state.tareasReducer);
    const {cargados : tTarCargadas} = useSelector(state => state.tipoTareasReducer);

    const {detalle} = useSelector(state => state.detalleReducer);
    const {cargandoDetalle,guardandoDatos} = useSelector(state => state.uiReducer);
    const [eventos, setEventos] = useState({
        clickEquipos : false,
        clickUsuarios : false,
        clickTecnicos : false,
        clickTareas : false,
    })
 
    const handleClickVolver = (e)=>{
        e.preventDefault();

        dispatch( limpiarDetalle() );
    }

    const handleClickEquipo = (e)=>{
        e.preventDefault();

        (!eqCargados) && dispatch( startCargarEquipos() );
        setTimeout(() => {
            setEventos({
                ...eventos,
                clickEquipos : !eventos.clickEquipos
            })
           
        }, 400);
        
    }
        
    const handleClickUsuario = (e)=>{
        e.preventDefault();

        (!usrCargados) && dispatch( startCargarUsuarios() );
        setTimeout(() => {
            setEventos({
                ...eventos,
                clickUsuarios : !eventos.clickUsuarios
            })
        }, 400);
       
    }
    const handleClickTecnico = (e)=>{
        e.preventDefault();

        (!tecCargados) && dispatch( startCargarTecnicos() );
        setTimeout(() => {
            setEventos({
                ...eventos,
                clickTecnicos : !eventos.clickTecnicos
            })
        }, 400);
        
    }

    const handleClickTareas = (e)=>{
        e.preventDefault();
        
        (!tarCargadas) && (!tTarCargadas) && dispatch( startCargarTareas() );

        setTimeout(() => {
            setEventos({
                ...eventos,
                clickTareas : !eventos.clickTareas
            })
        }, 500);
    }
    
    const handleClickGuardarDetalle = (e)=>{
        e.preventDefault();

        dispatch( startGuardarTareas() );
    }


    if( guardandoDatos || cargandoDetalle){
        return (
            <div className="alert alert-primary animate__animated animate__slideInRight">
                Cargando....
            </div>
        )
    }

    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col col-10">
                    <h3>DETALLE DE MANTENIMIENTO</h3>
                    <h4> ID_MANT : {detalle.id_mantenimiento} </h4>
                </div>
                <div className="col col-1"
                    onClick={handleClickVolver}
                >
                   
                        <Link to='/' className="btn btn-primary ">
                            Volver
                        </Link>
                   
                </div>
            </div>
            
            <hr />
                <LineaFechas />

            <hr />
            <div className="row gx-5">
                <div className="col col-4">
                    <div className="row">

                        <button onClick={handleClickEquipo}>Equipo</button>
                        { (eventos.clickEquipos) && <LineaEquipo /> }  
                       
                    </div>
                
                    <hr />
                    <div className="row">
                        <button onClick={handleClickUsuario}>Usuario</button>
                        { (eventos.clickUsuarios) && <LineaUsuario /> }    
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={handleClickTecnico}>Tecnico</button>
                        { (eventos.clickTecnicos) && <LineaTecnico /> }    
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <button onClick={handleClickTareas}>Tareas</button>
                        { (eventos.clickTareas) && <LineaTareas /> }    
                    </div>
                </div>
            </div>
           
            <hr />
           
            
            <div className="row mt-4  estado">
                <LineaEstado />

            </div>
            <div className="row mt-4 ">
                <div className="col d-flex  justify-content-center ">
                    <button className=" btn btn-success"
                        onClick={handleClickGuardarDetalle}
                    >
                        Guardar Detalle
                    </button>
                </div>
                
            </div>
     </div>
    )
}
