import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';


export const AuthRouters = () => {
    return ( <
        div className = "auth_main" >
        <
        div className = "auth_box-container" >
        <
        Switch >
        <
        Route exact path = "/auth/login"
        component = { LoginScreen }
        /> <
        Route exact path = "/auth/register"
        component = { RegisterScreen }
        /> <
        Redirect to = "/auth/login" / >


        <
        /Switch> < /
        div >



        <
        /div>
    )
}