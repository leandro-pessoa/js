import { useState } from 'react'

export default function Nota(props){
    return(
        <div>
            Informe a nota {props.num}: <input type="number" value={props.notas} onChange={(e) => props.setNotas(e)} id={props.id}/>
        </div>
    )
}