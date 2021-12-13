import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { startCargarEquipos } from '../actions/equipos';
import { startCargarHistorial } from '../actions/historial';

import { Detalle } from '../components/detalle/Detalle';
import { Historial } from '../components/historial/Historial';
export const AppRouter = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( startCargarEquipos() );
        dispatch( startCargarHistorial() );
      }, [dispatch])

    return (
        <Router>
            <Switch>
                <Route path='/mant/historial'>
                    <Historial />
                </Route>
                <Route path='/mant/detalle'>
                    <Detalle />
                </Route>
                <Redirect to='/mant/historial'/>
            </Switch>

        </Router>
    )
}
