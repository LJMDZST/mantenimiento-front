import React from 'react'
import { useSelector } from 'react-redux'

export const LineaHistorial = () => {

    const {historial} = useSelector(state => state);

    

    return (
        <tr>
            <td>2021-07-15</td>
            <td>notebook acer</td>
            <td>klkjlkjñlkjbbbbbb</td>
            <td><span className="text-warning ">En proceso</span></td>
            <td>
                <button className="btn btn-link">Editar</button>
                <button className="btn btn-link">Cancelar</button> 
            </td>
        </tr>
    )
}
