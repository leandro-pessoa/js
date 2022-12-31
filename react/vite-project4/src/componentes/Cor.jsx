import { useState } from 'react'

export default function Cor(){
    const r = {backgroundColor: 'red'}
    const g = {backgroundColor: 'green'}
    const b = {backgroundColor: 'blue'}
    const [cor, setCor] = useState(b)
    const mudaCor = (arg) => {
        if (arg == 1){
            return setCor(r)
        }
        else if (arg == 2){
            return setCor(g)
        }
        else if (arg == 3){
            return setCor(b)
        }
    }
    return (
        <div style={cor}>
            <p>Selecione a cor de fundo:</p>
            <p>
            <input type="radio" name="sel" id="ivermelho" onClick={() => mudaCor(1)}/><label htmlFor="ivermelho">Vermelho</label>
            <input type="radio" name="sel" id="iverde" onClick={() => mudaCor(2)}/><label htmlFor="iverde">Verde</label>
            <input type="radio" name="sel" id="iazul" onClick={() => mudaCor(3)}/><label htmlFor="iazul">Azul</label>
            </p>
        </div>
    );
}