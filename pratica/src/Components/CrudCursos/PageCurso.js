import React, { useEffect, useState } from "react"
import './PageCursos.css'
import axios from "axios"
import { useNavigate } from "react-router"
import { useParams } from "react-router-dom"

const urlAPI = "https://localhost:7204/api/Cursos/"

const initialState = {
    cursos: { id: 0, imagem: ' ', nomeCurso: ' ', descricao: ' ', qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0},
    lista: []
}

const initialState2 = {
    videos: {id: 0, idCurso: 0, link: ' '},
    lista: []
}

export const PageCursos = () => {
    const [state, setState] = useState({ ...initialState })
    const {id} = useParams()
    const [nome, setNome] = useState("caju")
    const [imagem, setImagem] = useState("gestaop.jpg")
    const [descricao, setDescricao] = useState("aaaaaa")

    useEffect(() => {
        if (!sessionStorage.getItem("usuario"))
            window.location.href = "/login"

        axios(urlAPI + id).then(resp => {
            setState({ lista: resp.data })
            setNome(resp.data.nomeCurso)
            setImagem(resp.data.imagem)
            setDescricao(resp.data.descricao)
        })
    }, []);

    return (
        <div className="content">
            <div className="corpo">
                <div className="titulo">
                    <img src={require("../assets/ImagensCursos/" + imagem)} className="corpo_imagem"></img>
                    <h4>Curso de</h4>
                    <h1>{nome}</h1>
                </div>
                <div className="corpo_descricao">
                    <h5 className="h5">{descricao}</h5>
                </div>

                <div className="corpo_desenvolvimento">
                    {state.lista.map((video) => (
                        <details className="details" key={video.id}>
                            <summary className="summary">Video aula 1</summary>
                            <video src={require(video.link)}></video>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    )
}