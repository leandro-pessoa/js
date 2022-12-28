import { useState } from "react";
import { Teste } from "../componentes/Teste.js"
import '../componentes/Teste.css'

function App() {
  const [teste, setTeste] = useState<string[]>([
    'teste',
    'teste',
    'teste',
    'teste',
    'teste'
  ])
  function adTeste(){
    setTeste([...teste, 'teste'])
  }
  return (
    <section>
      {teste.map(teste => {
        return (
          <div>
            <Teste text={teste}/>
            <hr/>
          </div>
        )
      })}
      <input 
      type="button" 
      value="Adicionar teste novo" 
      onClick={adTeste}
      style={{
        backgroundColor: "lightblue",
        border: 'none',
        padding: '5px'
      }}
      />
    </section>
  );
}

export default App
