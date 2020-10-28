import React from 'react'

import { AuthRouters } from './AuthRouters'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { TwitterScreen } from '../Twitter/TwitterScreen';

export const AppRouters = () => {
    return ( < Router >
        <
        div >


        <
        Switch >
        <
        Route path = "/auth"
        component = { AuthRouters }

        /> <
        Route exact path = "/"
        component = { TwitterScreen }

        />  <
        Redirect to = "/auth/login" / >
        <
        /Switch > < /
        div > < /
        Router >
    )
}