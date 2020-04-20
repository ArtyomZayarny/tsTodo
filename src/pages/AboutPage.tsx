import React from 'react'
import {useHistory} from 'react-router-dom'


export const AboutPage:React.FC = () => {
    const history = useHistory();
    return (
        <>
        <h2>About Page</h2>
        <button className="btn"
        onClick = { () => {history.push('/')}}
        >Return to todos</button>
        </>
        
    )
}