import React, { useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { startCargarHistorial } from './actions/historial'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'


export const AppMantenimineto = () => {

  

    return (
        <Provider store = { store }>
            <AppRouter />
        </Provider>
    )
}
