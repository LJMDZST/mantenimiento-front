import { types } from "../Types/Types"


export const iniciarCargarDetalle = ()=>({
    type: types.iniciarCarga
})

export const IniciarguardarCambios = ( )=>({
    type : types.iniciarGuardarCambios
})

export const FinalizarCargarDetalle = (msgError = '')=>({
    type: types.finalizarCarga,
    payload : msgError
})

export const finalizarGuardarCambios = (msgError = '')=>({
    type: types.finalizarGuardarCambios,
    payload : msgError
})