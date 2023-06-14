import React, { useEffect, useState } from "react"
import './CrudUsuario.css'
import axios from "axios"
import redes from "../assets/imagens/redes.png"
import { useNavigate } from "react-router";

const urlAPI = "https://localhost:7204/api/Usuario"

const initialState = {
    usuario: { cpf: ' ', nome: ' ', senha: 0, email: ' ' },
    lista: []
}

export const CrudUsuario = () => {
    const [state, setState] = useState({ ...initialState });
    const navigate = useNavigate();

    useEffect(() => {
        axios(urlAPI).then(resp => {
            setState({ lista: resp.data })
        })
    }, []);

    const salvar = (() =>
    {
        const user = initialState.usuario;
        user.cpf = document.querySelector('#txtCPF').value
        user.nome = document.querySelector('#txtNomeC').value
        user.email = document.querySelector('#txtEmailC').value
        user.senha = Number(document.querySelector('#txtSenha').value)

        const metodo = 'post';

        console.log(user);

        axios[metodo](urlAPI, user)
        .then(resp => {
            const lista = this.getListaAtualizada(resp.data)
            setState({ usuario: initialState.usuario, lista })
        }).catch(err => {
        })
    })

    function getListaAtualizada(usuario) {
        const lista = this.state.lista.filter(a => a.cpf !== usuario.cpf);
        lista.unshift(usuario);
        return lista;
    }

    function remover(usuario) {
        const url = urlAPI + "/" + usuario.cpf;

        if (window.confirm("Confirma remoção do usuário: " + usuario.cpf)) {
            console.log("entrou no confirm");
            axios['delete'](url, usuario)
                .then(resp => {
                    const lista = this.getListaAtualizada(usuario, false)
                    setState({ usuario: initialState.usuario, lista })
                })
        }
    }

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
            <div className="login">
                <input type="radio" name="log" id="log2"></input>
                <label className="label" for="log2">Cadastrar</label>

                <input type="radio" name="log" id="log1" checked></input>
                <label className="label" for="log1">Entrar</label>

                <div className="log">
                    <div className="cont">
                        <img className="img" src={redes}></img>
                        <input type="text" name="txt1" id="txtNome" placeholder="Digite seu cpf"></input><br></br><br></br>
                        <input type="password" name="txt2" id="txtEmail" placeholder="Senha"></input><br></br><br></br>
                        <input type="checkbox" name="ck" id="ck"></input>
                        <label for="ck">Lembrar-me</label><br></br>
                        <button id="btn1" onClick={ValidarLogin}>Acessar</button>

                        <h3>Junte-se a mais de 150 mil empreendedores de impacto!</h3>
                        <p>Acesse gratuitamente todos os nossos conteúdos</p>
                    </div>
                    <div className="cont">
                        <img className="img" src={redes}></img>
                        <input type="text" name="txt1" id="txtCPF" placeholder="Digite seu cpf"></input><br></br><br></br>
                        <input type="text" name="txt2" id="txtNomeC" placeholder="Nome completo"></input><br></br><br></br>
                        <input type="text" name="txt3" id="txtEmailC" placeholder="Digite seu email"></input><br></br><br></br>
                        <input type="text" name="txt4" id="txtSenha" placeholder="Senha (somente números)"></input><br></br>
                        <button id="btn1" onClick={salvar}>Cadastrar</button>
                        <h3 className="h3">Junte-se a mais de 150 mil empreendedores de impacto!</h3>
                        <p className="p">Acesse gratuitamente todos os nossos conteúdos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}