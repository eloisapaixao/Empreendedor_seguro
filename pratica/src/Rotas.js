import React from 'react'
import { Routes, Route, Router } from "react-router-dom"
import { CrudUsuario } from './Components/CrudUsuario/CrudUsuario'
import CrudCursos from './Components/CrudCursos/CrudCursos'
import { PageCursos } from './Components/CrudCursos/PageCurso'

export default function Rotas() {
    return (
        <Routes>
                <Route exact path='/' element />
                <Route path='/inicio' element={<PageCursos />} />
                <Route path='/cursos' element={<CrudCursos />} />
                <Route path='/login' element={<CrudUsuario />} />
                <Route path='/pageCurso/:id' element={<PageCursos />} />
        </Routes>
    )
}