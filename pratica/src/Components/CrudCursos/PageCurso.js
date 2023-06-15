import React, { useEffect, useState } from "react";
import './PageCursos.css';
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";

const urlAPI = "https://localhost:7204/api/Cursos/";

export const PageCursos = () => {
    const { id } = useParams()
    const [nome, setNome] = useState("caju")
    const [imagem, setImagem] = useState("gestaop.jpg")
    const [descricao, setDescricao] = useState("aaaaaa")
    const [videos, setVideos] = useState([])

    useEffect(() => {
        if (!sessionStorage.getItem("usuario"))
            window.location.href = "/login"

        axios(urlAPI + id).then((resp) => {
            setNome(resp.data.nomeCurso)
            setImagem(resp.data.imagem)
            setDescricao(resp.data.descricao)
        })

        axios.get("https://localhost:7204/api/Videos").then(resp => {
            setVideos(resp.data.filter((video) => video.idCurso === Number(id)))
        })
    }, [])

    return (
        <div className="content">
            <div className="corpo">
                <div className="titulo">
                    <img src={require("../assets/ImagensCursos/" + imagem)} className="corpo_imagem" alt="Course Image" />
                    <h4>Curso de</h4>
                    <h1>{nome}</h1>
                </div>
                <div className="corpo_descricao">
                    <h5 className="h5">{descricao}</h5>
                </div>

                <div className="corpo_desenvolvimento">
                    {videos.map((video) => (
                        <details className="details" key={video.id}>
                            <summary className="summary">Video aula {video.id}</summary>
                            <iframe
                                src={"https://www.youtube.com/embed/" + video.link.split("v=")[1]}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </details>
                    ))}
                </div>
            </div>
        </div>
    )
}   