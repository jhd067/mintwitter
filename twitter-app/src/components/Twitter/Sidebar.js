import React from 'react'
import { TwitterEntries } from './Twitter.Entries'


export const Sidebar = () => {
    return ( <
        aside className = 'journal_sidebar' >
        <
        div className = 'journal_sidebar-navbar' >
        <
        i className = 'far fa-moon' > < /i><
        span > jhd < /span>   <
        button className = 'btn' > Logout < /button> < /
        div >
        <
        div className = 'journal_new-entry' >
        <
        i className = 'fas fa-edit fa-5x' > < /i> <
        p clasName = 'mt-5' > New Entry < /p>




        <
        /div> <
        TwitterEntries / >

        <
        /
        aside >

    )
}