import React, { useEffect, useState } from "react"
import './CrudCursos.css'
import axios from "axios"
import { useNavigate } from "react-router"
import Modal from "./Modal"

const urlAPI = "https://localhost:7204/api/Cursos"

const initialState = {
    cursos: { id: 0, imagem: ' ', nomeCurso: ' ', descricao: ' ', qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0},
    lista: []
}

export const CrudCursos = () => {
    const [state, setState] = useState({ ...initialState })
    const navigate = useNavigate()

    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        axios(urlAPI).then(resp => {
            setState({ lista: resp.data })
        })
    }, []);

    return (
        <div className="content">
            <div className="page-curso1">
                {state.lista.map(
                    (curso) => 
                    <div className="curso-div">
                        <img src={"../assests/ImagensCursos" + curso.imagem}></img>
                        <h4><strong>{curso.nomeCurso}</strong></h4>
                    </div>
                )}
            </div>
            
            <div className="page-cursos2">
                {state.lista.map(
                    (curso) => 
                    <div className="curso-div2">
                        <img src={"../assests/ImagensCursos" + curso.imagem}></img>
                        <h5><strong>{curso.nomeCurso}</strong></h5>
                        <button onClick={() => setOpenModal(true)}>Saiba mais</button>
                        <div>
                            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                                <img className="modal_imagem" src={"../assests/ImagensCursos" + curso.imagem}></img>
                                <h3 className="modal_nomeCurso">{curso.nomeCurso}</h3>
                                <h5 className="modal_descricao">{curso.descricao}</h5>
                                <p className="modal_detalhes">{curso.qtdAulas}</p>
                                <p className="modal_detalhes">{curso.cargaHoraria}</p>
                                <p className="modal_detalhes">{curso.qtdExercicio}</p>
                            </Modal>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}