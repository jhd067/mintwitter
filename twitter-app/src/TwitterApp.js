import React from 'react'
import { AppRouters } from './components/routers/AppRouters'
import { Provider } from 'react-redux';
import { store } from './store/store';


export const TwitterApp = () => {
    return ( <
        Provider store = { store } >
        <
        AppRouters / >
        <
        /Provider>

    )
}