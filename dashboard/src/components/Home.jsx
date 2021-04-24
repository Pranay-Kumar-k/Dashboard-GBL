import React from 'react'
import Cards from './Cards'
import TableTab from './TableTab'

export default function Home() {
    return (
        <div style={{width:"1320px", overflow:"auto"}}>
            <Cards />
            <TableTab />
        </div>
    )
}
