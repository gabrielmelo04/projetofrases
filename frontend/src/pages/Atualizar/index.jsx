import React, { useEffect, useState, useCallback } from "react";
import Styles from  "./Atualizar.module.css";
import { api } from '../../api/db';
import { useNavigate, useParams } from "react-router-dom";

import { Botao } from "../../components/Botao";

const Atualizar = () => {

    const [texto, setTexto] = useState("");
    const navegar = useNavigate();
    const params = useParams();

    const buscarFrase = useCallback(async () => {
        try {
            await api.get(`/api/frases/listar/${params.id}`).then((res) => {
                //console.log(res.data.data);
                setTexto(res.data.data.frase);
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    },[params.id]);

    useEffect(() => {
        buscarFrase();
    },[buscarFrase]);

    async function atualizar(e){
        e.preventDefault();

        if(!texto && texto.length > 5 ){
            alert("Campo frase preenchido incorretamente!");
        }

        try {
            await api.put(`/api/frases/atualizar/${params.id}`, {texto}).then(()=>{
                setTexto("");
                navegar("/frases");
            }).catch((error) =>{
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
            <h1>Atualizar Frase</h1>
            <form className={Styles.formulario} onSubmit={atualizar}  autocomplete="off">
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
            <input type="submit" value="Atualizar" />
            </form>
            <Botao texto="Voltar" corTexto="#fff" corFundo="#04c00e" onClick={irHome} />
        </div>
    )
}

export default Atualizar;