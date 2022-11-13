import React from "react";
import Styles from './Home.module.css';
import { Botao } from "../../components/Botao";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navegar = useNavigate();

    function irCadastrar(){
        navegar("/cadastrar");
    }

    function irListar(){
        navegar("/frases");
    }

    return(
        <div className={Styles.container}>
            <Botao texto="Cadastrar" corTexto="#fff" corFundo="#04c00e" onClick={irCadastrar} />
            <Botao texto="Listar" corTexto="#fff" corFundo="#7448c7" onClick={irListar}/>
        </div>
    )
}

export default Home;