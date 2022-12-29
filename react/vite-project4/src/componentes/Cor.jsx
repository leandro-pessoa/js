import { useState } from 'react'

export default function Cor(){
    const vermelho = {backgroundColor: 'red'}
    const verde = {backgroundColor: 'green'}
    const azul = {backgroundColor: 'blue'}
    return (
        <div style={verde}>
            <p>Selecione a cor de fundo:</p>
            <p>
                <input type="radio" name="sel" id="ivermelho"/><label htmlFor="ivermelho">Vermelho</label>
                <input type="radio" name="sel" id="iverde"/><label htmlFor="iverde">Verde</label>
                <input type="radio" name="sel" id="iazul"/><label htmlFor="iazul">Azul</label>
            </p>
        </div>
    );
}