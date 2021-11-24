import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm';

export const Detalle = () => {
    const dispatch = useDispatch();

    const {detalle,usuarios,equipos} = useSelector(state => state.detalleReducer);
    
    const [formValues, handleInputChange] = useForm({
        id_mantenimiento : detalle.id_mantenimiento,
        id_equipo : detalle.id_equipo,
        id_usuario : detalle.id_usuario,
        fecIni : detalle.fecIni,
        fecFin : detalle.fecFin,
        tarea : detalle.tarea,
        observ : detalle.observ,
        id_estado : detalle.id_estado
    })

    return (
        <div className="container ">
          
        <h3>DETALLE DE MANTENIMIENTO</h3>
        <hr />
        <div className="row">
           
                <div className="col col-1  mt-1">
                    <label className="mt-3"  htmlFor="FecIni" >Fecha Inicio:</label>
                </div>
               <div className="col col-3 m-3">
                    <input className="form-control" 
                        name= "FecIni" 
                        type="date" 
                        value={formValues.fecIni}
                        onChange={handleInputChange}
                    />
               </div>
            
           
                <div className="col col-1 mt-1">
                    <label className="mt-3" htmlFor="usuario">Tecnico</label>
                </div>
                <div className="col col-2 m-3">
                    <select className="form-select" aria-label="Default select example">
                        {
                            usuarios.map( usr => 
                                (usr.es_tecnico )
                                ?<option key={usr.id_usuario}>{usr.nombre}</option>
                                :null
                            )
                        }
                    </select>
                </div>
           
           
                <div className="col col-1 mt-1">
                    <label className="mt-3" htmlFor="fechaFin">Fecha fin:</label>
                </div>
                <div className="col col-3 m-3">
                      <input className="form-control" 
                        name="fechaFin" 
                        type="date" 
                        value={formValues.fecFin}
                        onChange={handleInputChange}
                    />
                </div>
           
        </div>
        <hr />
        <div className="row">
            <div className="col col-1 ">
                <label className="mt-3" htmlFor="equipo">Equipo</label>
            </div>
            <div className="col col-3 mt-1">
                <select className="form-select" aria-label="Default select example">
                    {
                        equipos.map(equip => 
                            (equip.id_usuario === formValues.id_usuario)
                            ?<option key={equip.id_usuario} selected={true}>{equip.nombre}</option>
                            :<option key={equip.id_usuario}>{equip.nombre}</option> 
                        )
                    }
                </select>
            </div>
            <div className="col col-1 ">
                <label className="mt-3" htmlFor="usuario">Usuario</label>
            </div>
            <div className="col col-3 m-1">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Eve</option>
                    <option value="1">Marisa</option>
                    <option value="2">Fiorenza</option>
                    <option value="3">sagardoy</option>
                    <option value="4">Larisa</option>
                  </select>

            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col col-1 mt-1">
                <label className="mt-3"   htmlFor="tarea">Tarea a realizar</label>
            </div>
            <div className="col col-9 m-3 mb-5">
                <textarea className="form-control" 
                    name="tarea"
                    value={formValues.tarea}
                    onChange={handleInputChange}
                >{formValues.tarea}</textarea>
            </div>
          
        </div>
        <hr />
        <div className="row">
            <div className="col col-1 mt-1">
                <label className="mt-3" htmlFor="observ"> Observ.</label>
            </div>
            <div className="col col-9 m-3 mt-4">
                <textarea className="form-control" 
                    name="observ"
                    value={formValues.observ}
                    onChange={handleInputChange}
                >{formValues.observ}</textarea>
            </div>
          
        </div>
        <hr />
        <div className="row mt-4  estado">
            <div className="form-check">
                <div className="row  estado">
                    <div className="col col-2">
                        <label>Estado:</label>
                    </div>
                    <div className="col col-3">
                        <input className="form-check-input" 
                            type="radio" 
                             
                            id="check" 
                            name="estado" 
                            checked={formValues.id_estado === 2}
                        />
                        <label className="form-check-label text-warning" htmlFor="estado">EnProceso </label>
                    </div>
            
                
                    <div className="col col-3">
                        <input className="form-check-input" 
                            type="radio" 
                            id="check"  
                            name="estado" 
                            checked={formValues.id_estado === 1}
                        />
                        <label  className="form-check-label text-success" htmlFor="estado"> Completo </label>
    
                    </div>
             
                
                    <div className="col col-3">
                        <input className="form-check-input" type="radio" value="cancelado" id="check"  name="estado" checked={formValues.id_estado === 3}/>
                        <label className="form-check-label text-danger" htmlFor="estado">Cancelado </label>
    
                    </div>
                </div>
               
             </div>
          
        </div>
     </div>
    )
}
