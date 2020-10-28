import React from 'react'
import { NotesScreen } from '../notas/NotesScreen'
import { Sidebar } from './Sidebar'


export const TwitterScreen = () => {
    return ( <
        div className = 'journal_main-content' >
        <
        Sidebar / >
        <
        main >

        <
        NotesScreen / > < /
        main > < /
        div >
    )
}