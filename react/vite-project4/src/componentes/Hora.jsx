import { useState } from 'react'

export default function Hora(){
    const hora = () => {
        let hr = new Date().getHours()
        if (hr >= 0 && hr < 12){
            return <p>Bom dia!</p>
        }
        else if(hr >= 12 && hr < 18){
            return <p>Boa tarde!</p>
        }
        else {
            return <p>Boa noite!</p>
        }
    }
    
    return(
        <div>
            <p>{hora()}</p>
            
        </div>
    );  
}