import React, { useEffect, useState } from "react"
import img1 from '../assets/PROPAGANDAS/img1.jpg'
import img2 from '../assets/PROPAGANDAS/img2.jpg'
import img3 from '../assets/PROPAGANDAS/img3.jpg'
import img4 from '../assets/PROPAGANDAS/img4.jpg'
import './CrudInicio.css'

import axios from "axios"
const urlAPI = "https://localhost:7204/api/Cursos/"

const initialState = {
    cursos: { id: 0, imagem: ' ', nomeCurso: ' ', descricao: ' ', qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0},
    lista: []
}

export const CrudInicio = () => {
    const [state, setState] = useState({ ...initialState })

    return (
        <div className="content">
            <div className="corpo">
                <div className="corpo1">
                    <img src={img1} className="img1"></img>
                    <img src={img2} className="img2"></img>
                </div>
                <div className="corpo2">
                    <img src={img3} className="img3"></img>
                    <img src={img4} className="img4"></img>
                </div>
            </div>
        </div>
    )
}