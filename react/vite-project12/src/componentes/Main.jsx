import { useState } from 'react'
import { useEffect } from 'react'
import Globais from './Globais'

export default function Main(){
    const [res, setRes] = useState(Globais.resumo)
    const gravar = () => {
        Globais.resumo = res
    }
    const verResumo = () => {
        alert(Globais.resumo)
    }
    return(
        <div>
            <main>
                <h2>Variáveis static globais</h2><hr/>
                <p>Nome: {Globais.nome}</p>
                <p>Curso: {Globais.curso}</p>
                <p>Ano: {Globais.ano}</p>
                <label htmlFor="res">Resumo: </label><input type="text" id="res" size="35" onChange={(e)=>setRes(e.target.value)}/>
                <button onClick={()=>gravar()}>
                    Gravar
                </button><br/><br/>
                <button onClick={()=>verResumo()}>
                    Ver resumo
                </button>
            </main>
        </div>
    )
} 