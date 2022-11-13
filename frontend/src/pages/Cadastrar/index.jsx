import React, { useState } from "react";
import Styles from  "./Cadastrar.module.css";
import { api } from '../../api/db';
import { useNavigate } from "react-router-dom";

import { Botao } from "../../components/Botao";

const Cadastrar = () => {

    const [texto, setTexto] = useState("");
    const navegar = useNavigate();

    async function cadastrar(){

        if(!texto && texto.length > 5 ){
            alert("Campo frase preenchido incorretamente!");
        }

        try {
            api.post("/api/frases/criar", {texto}).catch((error) =>{
                console.log(error);
            })
        } catch (error) {
            console.log(error)
        }
    }

    function irHome(){
        navegar("/");
    }

    return(
        <div className={Styles.container}>
            <h1>Cadastrar Frase</h1>
            <form className={Styles.formulario} onSubmit={cadastrar} autocomplete="off">
                <label className={Styles.inputCadastrar}>
                    <input
                        type="text"
                        id="texto"
                        name="texto"
                        placeholder="Digite a frase..."
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        required={true}
                        minLength={5}
                        maxLength={20}
                    />
                <span>Sua frase:</span>    
            </label>
            <input type="submit" value="Cadastrar" />
            </form>
            <Botao texto="Voltar" corTexto="#fff" corFundo="#04c00e" onClick={irHome} />
        </div>
    )
}

export default Cadastrar