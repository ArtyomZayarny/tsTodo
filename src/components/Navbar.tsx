import React from 'react'

export const Navbar:React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper px2">
                <a href="#" className="brand-logo">Todo-TS</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Todos</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </div>
        </nav>
    )
}