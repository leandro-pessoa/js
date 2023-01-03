import { useState } from 'react'
import Nota from './Nota'
import Resultado from './Resultado'

export default function Main(){
    const [notas, setNotas] = useState({"nota1":0,"nota2":0,"nota3":0,"nota4":0})
    const handle = (e) => {
        if(e.target.getAttribute('id') == 'n1'){
            setNotas({"nota1":e.target.value,"nota2":notas.nota2,"nota3":notas.nota3, "nota4":notas.nota4})
        }
        else if(e.target.getAttribute('id') == 'n2'){
            setNotas({"nota1":notas.nota1,"nota2":e.target.value,"nota3":notas.nota3, "nota4":notas.nota4})
        }
        else if(e.target.getAttribute('id') == 'n3'){
            setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":e.target.value, "nota4":notas.nota4})
        }
        else if(e.target.getAttribute('id') == 'n4'){
            setNotas({"nota1":notas.nota1,"nota2":notas.nota2,"nota3":notas.nota3, "nota4":e.target.value})
        }
    }
    return(
        <div>
            <main>
                <h2>Elevação de state</h2><hr/>
                <p><Nota num="1" notas={notas.nota1} setNotas={handle} id="n1"/></p>
                <p><Nota num="2" notas={notas.nota2} setNotas={handle} id="n2"/></p>
                <p><Nota num="3" notas={notas.nota3} setNotas={handle} id="n3"/></p>
                <p><Nota num="4" notas={notas.nota4} setNotas={handle} id="n4"/></p>
                <Resultado soma={parseFloat(notas.nota1) + parseFloat(notas.nota2) + parseFloat(notas.nota3) + parseFloat(notas.nota4)}/>
            </main>
        </div>
    )
} 