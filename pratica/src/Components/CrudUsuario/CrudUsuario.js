import React, { useEffect, useState } from "react"
import './CrudUsuario.css'
import axios from "axios"
import redes from "../assets/imagens/redes.png"
//aaaaaaaaaaaaaaa

const urlAPI = "https://localhost:7204/api/Usuario"

const initialState = {
    usuario: { cpf: ' ', nome: ' ', senha: 0, email: ' ' },
    lista: []
}

export const CrudUsuario = () => {
    const [state, setState] = useState({ ...initialState });

    useEffect(() => {
        axios(urlAPI).then(resp => {
            setState({ lista: resp.data })
        })
    }, []);

    function limpar() {
        setState({ usuario: initialState.usuario });
    }

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
        })
    })

    function getListaAtualizada(usuario) {
        const lista = this.state.lista.filter(a => a.cpf !== usuario.cpf);
        lista.unshift(usuario);
        return lista;
    }

    function atualizaCampo(event) {
        //clonar usuário a partir do state, para não alterar o state diretamente
        const usuario = { ...this.state.usuario };
        //usar o atributo NAME do input para identificar o campo a ser atualizado
        usuario[event.target.name] = event.target.value;
        //atualizar o state
        setState({ usuario });
    }

    function carregar(usuario) {
        setState({ usuario })
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
                        <input type="text" name="txt2" id="txtEmail" placeholder="Senha"></input><br></br><br></br>
                        <input type="checkbox" name="ck" id="ck"></input>
                        <label for="ck">Lembrar-me</label><br></br>
                        <button id="btn1">Acessar</button>

                        <h3>Junte-se a mais de 150 mil empreendedores de impacto!</h3>
                        <p>Acesse gratuitamente todos os nossos conteúdos</p>
                    </div>
                    <div className="cont">
                        <img className="img" src={redes}></img>
                        <input type="text" name="txt1" id="txtCPF" placeholder="Digite seu cpf"></input><br></br><br></br>
                        <input type="text" name="txt2" id="txtNomeC" placeholder="Nome completo"></input><br></br><br></br>
                        <input type="text" name="txt3" id="txtEmailC" placeholder="Digite seu email"></input><br></br><br></br>
                        <input type="text" name="txt4" id="txtSenha" placeholder="Senha"></input><br></br>
                        <button id="btn1" onClick={salvar}>Cadastrar</button>
                        <h3 className="h3">Junte-se a mais de 150 mil empreendedores de impacto!</h3>
                        <p className="p">Acesse gratuitamente todos os nossos conteúdos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}