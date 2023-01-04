import { useState } from 'react'
import { useEffect } from 'react'
import Classe from './Classe'

export default function Main(){
    
    return(
        <div>
            <main>
                <h2>Componentes de classe</h2><hr/>
                <Classe text="Lorem ipsum dolor sit amet" fator={20}/>
            </main>
        </div>
    )
} 