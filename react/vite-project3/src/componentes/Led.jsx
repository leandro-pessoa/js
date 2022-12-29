import { useState } from 'react'
import ledVermelho from '../componentes/imagens/led-vermelho.png'
import ledVerde from '../componentes/imagens/led-verde.png'

export function Led(prop){
const estilo = {
    width: '250px'
}
    return(
        <div>
            <img src={prop.ligado ? ledVerde : ledVermelho} style={estilo}/>
            <p><button onClick={() => prop.setLigado(!prop.ligado)}>{prop.ligado ? 'Desligar' : 'Ligar'}</button></p>
        </div>
    );
}