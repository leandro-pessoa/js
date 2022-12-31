import { useState } from 'react'
import React from 'react'
import Led from './componentes/Led'
import Hora from './componentes/Hora'
import Log from './componentes/Log'
import Cor from './componentes/Cor'
import Colorido from './componentes/Colorido'
import './App.css'

export default function App() {
  const [ligado, setLigado] = useState(false)
  const cancel = (obj) => {
    return obj.preventDefault();
  }
  return(
    <div>
      <Led ligado={ligado} setLigado={setLigado}/>
      <a 
      href="https://google.com"
      target='_blank'
      onClick={(e) => cancel(e)}
      >
      <hr/>
        Este link não funciona
      </a><hr/>
      <Hora/><hr/>
      <Log/><hr/>
      <Cor/><hr/>
      <Colorido/>
    </div>
  );
}


