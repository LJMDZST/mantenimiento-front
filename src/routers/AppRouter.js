import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { Detalle } from '../components/detalle/Detalle';
import { Historial } from '../components/historial/Historial';
export const AppRouter = () => {
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
