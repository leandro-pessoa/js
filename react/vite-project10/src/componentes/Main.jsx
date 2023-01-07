import { useState } from 'react'
import { useEffect } from 'react'
import Classe from './Classe'

export default function Main(){
    const [ocultar, setOcultar] = useState(false)
    const desapear = () => {
        setOcultar(!ocultar)
    }
    return(
        <div>
            <main>
                <h2>Componentes de classe</h2><hr/>
                {ocultar ?  '' : <Classe text="Lorem ipsum dolor sit amet" fator={20}/>}
                <button onClick={()=>desapear()} style={{marginTop: '10px'}}>
                    Ocultar componente
                </button>
            </main>
        </div>
    )
} 