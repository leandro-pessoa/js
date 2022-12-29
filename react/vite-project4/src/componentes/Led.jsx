import { useState } from 'react'
import ledVerde from './imagens/led-verde.png'
import ledVermelho from './imagens/led-vermelho.png'

export default function Led(prop){
    return( 
        <div>
            <img src={prop.ligado ? ledVerde : ledVermelho}/>
            <button onClick={() => prop.setLigado(!prop.ligado)}>
                {prop.ligado ? 'Desligar' : 'Ligar'}
            </button>
        </div>
    );
}