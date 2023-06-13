import React, { useEffect, useState } from "react"
import './PageCursos.css'
import axios from "axios"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"

const urlAPI = "https://localhost:7204/api/Cursos"

const initialState = {
    cursos: { id: 0, imagem: ' ', nomeCurso: ' ', descricao: ' ', qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0},
    lista: []
}

export const PageCursos = () => {
    const [state, setState] = useState({ ...initialState })
    const {id} = useParams()

    useEffect(() => {
        axios(urlAPI).then(resp => {
            setState({ lista: resp.data })
        })
    }, []);

    return (
        <div className="content">
            <div className="corpo">
                <div className="titulo">
                    <img src="#" className="corpo_imagem"></img>
                    <h4>Curso de</h4>
                    <h1>Nome do curso</h1>
                </div>
                <div className="corpo_desenvolvimento">
                    
                </div>
            </div>
        </div>
    )
}