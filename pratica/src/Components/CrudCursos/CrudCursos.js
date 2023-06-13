import React, { Component } from "react"
import './CrudCursos.css'
import axios from "axios"
import { useNavigate } from "react-router"

const urlAPI = "https://localhost:7204/api/Cursos"


const initialState = {
    curso: { id: 0, imagem: ' ', nomeCurso: ' ', descricao: ' ', qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0 },
    lista: []
}

export default class CrudCursos extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    getCurso(codCurso) {
        axios["get"](urlAPI + `/${codCurso}`).then(resp => {
            this.setState({ curso: resp.data })
        })
    }

    render() {
        return (
            <div className="content">
                <div className="page-curso1">
                    {this.state.lista.map(
                        (curso) =>
                            <div className="curso-div">
                                <img className="curso-div-img" src={require("../assets/ImagensCursos/" + curso.imagem)}></img>
                                <h4>{curso.nomeCurso}</h4>
                            </div>
                    )}
                </div>

                <div className="page-cursos2">
                    {this.state.lista.map(
                        (curso) =>
                        <div className="curso-div2">
                            <img className="curso-div2-img" src={require("../assets/ImagensCursos/" + curso.imagem)}></img>
                            <h5><strong>{curso.nomeCurso}</strong></h5>
                            <button onClick={() => {this.navigate("/pageCurso/"+this.getCurso(curso.id))}}>Saiba mais</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}