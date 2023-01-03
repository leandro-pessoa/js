import { useState } from 'react'

export default function Resultado(props){
    return(
        <div>
            <p>Resultado: {props.soma}</p>
            <p>{props.soma >= 60 ? "Aprovado" : "Reprovado"}</p>
        </div>
    )
}