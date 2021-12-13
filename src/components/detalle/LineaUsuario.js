

import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { actualizarDetalle } from '../../actions/detalle';
import { useForm } from '../../hooks/useForm';

export const LineaUsuario = () => {

    const dispatch = useDispatch();
    
    const {detalle} = useSelector(state => state.detalleReducer);
    const {listado} = useSelector(state => state.usuariosReducer);


    const { values, handleInputChange } = useForm({
        usuario : detalle.id_usuario
    })
    
    useEffect(() => {

        dispatch( actualizarDetalle( {
            ...detalle,
            id_usuario: values.usuario
        }) );


    }, [values ])

    return (
        <div className="row "> 
            <div className="col col-2 mt-1">
                    <label className="mt-3" htmlFor="usuario">Usuario</label>
                </div>
                <div className="col col-9 m-1">
                    <select className="form-select" aria-label="Default select example"
                        name="usuario"
                        value={values.option}
                        onChange={handleInputChange}
                    >
                        {
                            listado.map( (usuario,i) => 
                                <option 
                                    key={i}
                                    value={usuario.id_usuario}
                                >
                                    {`${usuario.id_usuario} - ${usuario.nombre}`}
                                </option>
                                
                            )
                        }
                    </select>

                </div>
        </div>
    )
}
