import React from "react";
import Styles from "./Botao.module.css";

export const Botao = ({ texto, corFundo, corTexto, onClick }) =>{

    return(
        <button className={Styles.btn} style={{background: corFundo, color: corTexto}} onClick={onClick}>{texto}</button>
    )

}