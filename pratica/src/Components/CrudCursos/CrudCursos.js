import React, { Component, useEffect, useState } from "react"
import './CrudCursos.css'
import axios from "axios"
import Modal from "./Modal"

const urlAPI = "https://localhost:7204/api/Cursos"

const initialState = {
    curso: { id: 0, imagem: ' ', nomeCurso: ' ', descricao: ' ', qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0},
    lista: []
}
var openModal = false;

export default class CrudCursos extends Component {
    state = {...initialState}

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    setOpenModal(abrir){
        openModal = abrir;
        this.setState({ curso: initialState.curso})
    }

    getCurso(codCurso){
        axios["get"](urlAPI+`/${codCurso}`).then(resp => {
            this.setState({ curso: resp.data })
        })
    }

    render(){
        return (
            <div className="content">
                <div className="page-curso1">
                    {this.state.lista.map(
                        (curso) => 
                        <div className="curso-div">
                            <img src={"../assests/ImagensCursos" + curso.imagem}></img>
                            <h4><strong>{curso.nomeCurso}</strong></h4>
                        </div>
                    )}
                </div>
                
                <div className="page-cursos2">
                    {this.state.lista.map(
                        (curso) =>
                        <div className="curso-div2">
                            <img className="curso-div2-img" src={"../assests/ImagensCursos" + curso.imagem}></img>
                            <h5><strong>{curso.nomeCurso}</strong></h5>
                            <button onClick={() => {this.getCurso(curso.id); this.setOpenModal(true)}}>Saiba mais</button>
                                <Modal isOpen={openModal} objeto={this}>
                                    <div>
                                        <h3 className="modal_nomeCurso">{this.state.curso.nomeCurso}</h3>
                                        <h5 className="modal_descricao">{this.state.curso.descricao}</h5>
                                        <p className="modal_detalhes">{this.state.curso.qtdAulas}</p>
                                        <p className="modal_detalhes">{this.state.curso.cargaHoraria}</p>
                                        <p className="modal_detalhes">{this.state.curso.qtdExercicio}</p>
                                    </div>
                                    <img className="modal_imagem" src={"../assests/ImagensCursos" + this.state.curso.imagem}></img>
                                </Modal>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}