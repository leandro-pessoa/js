import { useState } from 'react'
import { useEffect } from 'react'
import Content from './Content'

export default function Main(){
    return(
        <div>
            <main>
                <h2>Calculadora de IMC</h2><hr/>
                <Content/>
            </main>
        </div>
    )
} 