import './Menu.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    return (
        <nav className='menu'>
            <div>
                <Link to="/inicio">
                    Início
                </Link>
            </div>
            
            <div>
                <Link to="/cursos">
                    Cursos
                </Link>
            </div>
            
            <div>
                <Link to="/login">
                    Login
                </Link>
            </div>
        </nav>
    )
}