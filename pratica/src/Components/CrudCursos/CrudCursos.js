import React, { useEffect, useState } from "react"
import './CrudCursos.css'
import axios from "axios"
import { useNavigate } from "react-router";

const urlAPI = "https://localhost:7204/api/Cursos"

const initialState = {
    cursos: { id: 0, imagem: ' ', nomeCurso: ' ', descricao: ' ', qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0},
    lista: []
}

export const CrudCursos = () => {
    const [state, setState] = useState({ ...initialState });
    const navigate = useNavigate();

    useEffect(() => {
        axios(urlAPI).then(resp => {
            setState({ lista: resp.data })
        })
    }, []);

    function ValidarLogin(){
        const cpf = document.querySelector("#txtNome").value
        const senha = Number(document.querySelector("#txtEmail").value)

        axios.post(urlAPI + '/login', {
            cpf,
            senha
        }).then(res => {
            if (res.status === 200)
            {
                sessionStorage.setItem("usuario", JSON.stringify(res.data))
                window.location.href = '/cursos'
            }
        }).catch(err => {
            if (err.response.status === 401)
                alert("Senha incorreta!");

            else
                alert("Usuário inexistente! Cadastre.")
        })
    }

    return (
        <div className="content">
            
        </div>
    )
}