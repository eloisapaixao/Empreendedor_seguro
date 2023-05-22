import React from 'react'
import { Routes, Route } from "react-router-dom"
import {CrudUsuario} from './Components/CrudUsuario/CrudUsuario'

export default function Rotas(){
    return(
        <Routes>
            <Route exact path='/' element/>
            <Route path='/inicio' element/>
            <Route path='/cursos' element />
            <Route path='/login' element = {<CrudUsuario/>}/>
        </Routes>
    )
}