import { useState } from 'react'
import Adicionar from './Adicionar'
import Relatorio from './Relatorio'
 
export default function Main(){
    return(
        <main>
            <h2>Relatório da lista:</h2>
            <Relatorio/>
            <h2>Insira seus dados: </h2>
            <Adicionar/>
            
        </main>
    );
}