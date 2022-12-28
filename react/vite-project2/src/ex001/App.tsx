import { useState } from "react";
import { Teste } from "../componentes/Teste.js"
import img from '../componentes/imagens/mark-v-200.png'

function App() {
  const nome = 'Leandro'
  const sobrenome = (a="") => {
    return a;
  }
  return(
    <div>
      <h1>Olá, {nome} {sobrenome('Pessoa')}</h1><br/>
      <img src={img}/>
    </div>
  )
}

export default App
