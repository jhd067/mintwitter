import React from 'react'
import { NotesAppBar } from './NotesAppBar'
export const NotesScreen = () => {

    return ( <
        div className = "notes_main-content" >
        <
        NotesAppBar / >
        <
        div className = 'notes_content' >
        <
        input type = 'text'
        placeholder = 'some awesome'
        className = 'notes_tittle-input'
        autoComplete = 'off' / >
        <
        textarea placeholder = 'what'
        className = 'notes_textarea' >

        <
        /textarea>



        <
        /div> <
        div className = 'notes_image' >
        <
        img src = 'https://francis.naukas.com/files/2019/04/D20190410-M87-black-hole-even-horizon-telescope-image.png'
        alt = 'imagen' / >
        <
        /div> < /
        div >
    )
}