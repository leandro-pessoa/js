import { useState } from 'react'

export default function Colorido(){
    const r = 'red'
    const g = 'green'
    const b = 'blue'
    let ale = Math.random().toFixed(1)
    const[cor, setCor] = useState(r)
    const muda = () => {
        if (ale >= 0 && ale <= 0.3){
            return setCor(r)
        }
        else if (ale > 0.3 && ale <= 0.6){
            return setCor(g)
        }
        else if (ale > 0.6){
            return setCor(b)
        }
    }
    
    return (
        <div>
            <p style={{fontSize: '1.7em', color:cor}}>&copy; Leandro Pessoa</p>
        </div>
    );
}