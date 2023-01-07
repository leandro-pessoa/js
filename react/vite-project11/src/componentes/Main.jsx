import { useState } from 'react'
import { useEffect } from 'react'
import BaseClasse from './BaseClasse'


export default function Main(){
    const [prof, setProf] = useState('')
    const mudarProf = (e) => {
        setProf(e)
    }
    return(
        <div>
            <main>
                <h2>Componentes de classe</h2><hr/>
                <BaseClasse prof='Estudante'>
                    <label htmlFor="prof">Sua profissão: </label><input type="text" id="prof" onChange={(e)=>mudarProf(e.target.value)}/>
                    <span>{prof}</span>
                </BaseClasse>
            </main>
        </div>
    )
} 