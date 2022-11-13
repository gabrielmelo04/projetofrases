import React, { useEffect, useState } from "react";
import { api } from "../../api/db";
import Styles from './Frases.module.css';
import { Botao } from "../../components/Botao";

import { ImBin, ImPencil } from 'react-icons/im';
import { useNavigate } from "react-router-dom";

const Frases = () => {

    const [frases, setFrases] = useState([]);
    const navegar = useNavigate();

    useEffect(() => {
        buscarFrases();
    },[]);

    async function buscarFrases(){
        try {
            await api.get("/api/frases/listar").then((res) => {
                //console.log(res.data.data);
                setFrases(res.data.data);
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function deletar(frase){
        try {
            await api.delete(`/api/frases/deletar/${frase}`).catch((error) => {
                console.log(error);
            })
            buscarFrases();
        } catch (error) {
            console.log(error);
        }
    }

    function atualizar(frase){
        navegar(`/atualizar/${frase}`);
    }

    function irHome(){
        navegar("/");
    }

    return(
        <div className={Styles.container}>
            <Botao texto="Voltar" corTexto="#fff" corFundo="#7448c7" onClick={irHome}/>
            <h1>Frases</h1>
            <div className={Styles.areaTabela}>
            {
                frases &&
                    <table className={Styles.tabela}>
                        <thead>
                            <tr>
                                    <th>ID</th>
                                    <th>Frase</th>
                                    <th>Data Criação</th>
                                    <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                frases?.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.frase}</td>
                                        <td>{item.createdAt}</td>
                                        <td className={Styles.acoes}><ImPencil size={20} className={Styles.iconeP} onClick={() => atualizar(item._id)}/><ImBin size={20} className={Styles.iconeP} onClick={() => deletar(item._id)}/></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
            </div>
        </div>
    )
}

export default Frases;