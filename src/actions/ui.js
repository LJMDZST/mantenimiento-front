import { types } from "../Types/Types"


export const clickAgregar = ( cargandoDetalle = false, msgError = '', msgModal = '' )=>({
    type : types.clickAgregar,
    payload : {
        cargandoDetalle,
        msgError,
        msgModal
    }
})
export const clickCancelar = ( msgError = '')=>({
    type : types.clickCancelar,
    payload : {
        msgError
    }
})
export const clickEditar = ( cargandoDetalle = false, msgError = '' )=>({
    type : types.clickEditar,
    payload : {
        cargandoDetalle,
        msgError,
        msgModal
    }
})
export const guardarCambios = (guardandoDatos = false, msgError = '')=>({
    type : types.guardarCambios,
    payload : {
        guardandoDatos,
        msgError
    }
})
