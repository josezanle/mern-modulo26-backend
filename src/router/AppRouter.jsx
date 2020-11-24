import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import {LoginScreen} from '../components/auth/LoginScreen';
import CalendarScreen from '../components/calendar/CalendarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

const AppRouter = () => {

    const dispatch = useDispatch ();
    const { checking, uid } = useSelector ( state => state.auth)

    useEffect(() => {
        dispatch( startChecking())
    }, [dispatch])


    return (
        <div>

            <Router>
                <Switch>
                    <PublicRoute
                                exact 
                                path="/login" 
                                component={LoginScreen}
                                isAuthenticated ={!!uid}
                                // el uid recibe doble negacion porque si le ponemos la primer negacion(!)..este retorna un false..pero si utilizamos la doble negacion(!!)..este retorna true..si tengo info..significa que estoy autenticado y por eso true
                    />

                    <PrivateRoute 
                                exact 
                                path="/" 
                                component={CalendarScreen}
                                isAuthenticated={!!uid}

                    />

                    <Redirect to="/"/>
                </Switch>
            </Router>

        </div>
    )
}

export default AppRouter;
