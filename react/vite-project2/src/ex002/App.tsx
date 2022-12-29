import { useState } from "react";
import { Teste } from "../componentes/Teste"
import { Header } from "../componentes/Header"
import { Main } from "../componentes/Main"
import "./App.css"

function App() {
  const [nome, setNome] = useState('Leandro')
  return(
    <div>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
