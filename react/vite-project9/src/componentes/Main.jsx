import { useState } from 'react'
import { useEffect } from 'react'
import Caixa from './Caixa'

export default function Main(){
    const [cont, setCont] = useState(0)
    useEffect(
        ()=>console.log('Página carregada')
    )
    return(
        <div>
            <main>
                <h2>Contenção</h2><hr/>
                <Caixa>
                    <p>Olá, mundo!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quas est error. Molestiae neque dolor itaque vel recusandae tempore expedita earum possimus, autem eaque et cumque illo labore assumenda tenetur!</p>
                </Caixa>
                <hr/>
                <h2>useEffect</h2><hr/>
                <p>Contagem: {cont}</p>
                <button onClick={()=>setCont(cont + 1)}>Adicionar</button>
            </main>
        </div>
    )
} 