import React, { Component } from "react";
import "./CrudCursos.css";
import axios from "axios";
import { useNavigate } from "react-router";

const urlAPI = "https://localhost:7204/api/Cursos";

const initialState = {
    curso: { id: 0, imagem: " ", nomeCurso: " ", descricao: " ", qtdAulas: 0, cargaHoraria: 0, qtdExercicio: 0 },
    lista: [],
};

export default function CrudCursos() {
    const navigate = useNavigate();
    const [state, setState] = React.useState({ ...initialState });

    React.useEffect(() => {
        axios(urlAPI).then((resp) => {
            setState({ lista: resp.data });
        });
    }, []);

    const getCurso = (codCurso) => {
        axios.get(urlAPI + `/${codCurso}`).then((resp) => {
            setState({ curso: resp.data });
            navigate(`/pageCurso/${resp.data.id}`);
        });
    };

    return (
        <div className="content">
            <div className="page-curso1">
                {state.lista.map((curso) => (
                    <div className="curso-div" key={curso.id} onClick={() => getCurso(curso.id)}>
                        <img className="curso-div-img" src={require("../assets/ImagensCursos/" + curso.imagem)} alt={curso.nomeCurso} />
                        <h4>{curso.nomeCurso}</h4>
                    </div>
                ))}
            </div>

            <div className="page-cursos2">
                {state.lista.map((curso) => (
                    <div className="curso-div2" key={curso.id} onClick={() => getCurso(curso.id)}>
                        <img className="curso-div2-img" src={require("../assets/ImagensCursos/" + curso.imagem)} alt={curso.nomeCurso} />
                        <h5>
                            <strong>{curso.nomeCurso}</strong>
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
}
