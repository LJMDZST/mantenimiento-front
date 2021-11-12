import React from 'react'

export const Detalle = () => {
    return (
        <div class="container ">
          
        <h3>DETALLE DE MANTENIMIENTO</h3>
        <hr />
        <div class="row">
           
                <div class="col col-1  mt-1">
                    <label class="mt-3"  for="FecIni" >Fecha Inicio:</label>
                </div>
               <div class="col col-3 m-3">
                    <input class="form-control" name= "FecIni" type="date" />
               </div>
            
           
                <div class="col col-1 mt-1">
                    <label class="mt-3" for="usuario">Tecnico</label>
                </div>
                <div class="col col-2 m-3">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Leandro</option>
                        <option value="1">Martin</option>
                        <option value="2">Dario</option>
                        <option value="3">Guillermo</option>
                    </select>
                </div>
           
           
                <div class="col col-1 mt-1">
                    <label class="mt-3" for="fechaFin">Fecha fin:</label>
                </div>
                <div class="col col-3 m-3">
                      <input class="form-control" name="fechaFin" type="date" />
                </div>
           
        </div>
        <hr />
        <div class="row">
            <div class="col col-1 mt-1">
                <label class="mt-3" for="equipo">Equipo</label>
                
            </div>
            <div className="col col-3 mt-1">
                <select class="form-select" aria-label="Default select example">
                        <option selected>Notebook</option>
                        <option value="1">Equipo 2</option>
                </select>
            </div>
            <div class="col col-1 mt-1">
                <label class="mt-3" for="usuario">Usuario</label>
            </div>
            <div class="col col-3 m-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Eve</option>
                    <option value="1">Marisa</option>
                    <option value="2">Fiorenza</option>
                    <option value="3">sagardoy</option>
                    <option value="4">Larisa</option>
                  </select>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col col-1 mt-1">
                <label class="mt-3"   for="tarea">Tarea a realizar</label>
            </div>
            <div class="col col-9 m-3 mb-5">
                  <textarea class="form-control" name="tarea"></textarea>
            </div>
          
        </div>
        <hr />
        <div class="row">
            <div class="col col-1 mt-1">
                <label class="mt-3" for="observ"> Observ.</label>
            </div>
            <div class="col col-9 m-3 mt-4">
                  <textarea class="form-control" name="observ"></textarea>
            </div>
          
        </div>
        <hr />
        <div class="row mt-4  estado">
            <div class="form-check">
                <div class="row  estado">
                    <div class="col col-2">
                        <label>Estado:</label>
                    </div>
                    <div class="col col-3">
                        <input class="form-check-input" type="radio" value="EnProceso" id="check" name="estado" />
                        <label class="form-check-label text-warning" for="estado">EnProceso </label>
                    </div>
            
                
                    <div class="col col-3">
                        <input class="form-check-input" type="radio" value="completo" id="check"  name="estado" />
                        <label  class="form-check-label text-success" for="estado"> Completo </label>
    
                    </div>
             
                
                    <div class="col col-3">
                        <input class="form-check-input" type="radio" value="cancelado" id="check"  name="estado" />
                        <label class="form-check-label text-danger" for="estado">Cancelado </label>
    
                    </div>
                </div>
               
             </div>
          
        </div>
     </div>
    )
}
