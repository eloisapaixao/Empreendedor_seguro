import './Logo.css';
import React from 'react';
import logo from '../assets/imagens/logo.png'

export default function Logo(props) {
return (
    <aside className="logo">
        <div className='imagen'>
            <a href="/" className="logo">
                <img src={ logo } alt="Logo" />
            </a>
        </div>
    </aside>
)
}