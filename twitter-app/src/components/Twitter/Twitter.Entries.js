import React from 'react'
import { TwitterEntry } from './TwitterEntry';


export const TwitterEntries = () => {
    const entries = [1, 2, ];
    return ( <
        div className = 'journal_entries' > {
            entries.map(value => ( <
                TwitterEntry key = { value }
                />
            ))
        }

        <
        /div>
    )

}