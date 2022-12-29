import React from 'react'
import img from '../componentes/imagens/mark-v-200.png'

export function Header(){
    const titulo = 'Exemplo';
    return (
        <header>
            <img src={img}/>
            <h1>Título principal: {titulo}</h1>
        </header>
    );
}