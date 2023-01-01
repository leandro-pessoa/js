import { useState } from 'react'

export default function Remover() {
    
    const voltar = {
        marginLeft: '-130px'
    }
    const feito = {
        marginTop: '10px',
        marginLeft: '-170px'
    }
    const getDados = () => {
        return localStorage.getItem('list')
    }
    const [nome, setNome] = useState('')
    const [ano, setAno] = useState('')
    const [apear, setApear] = useState('none')
    const remover = () => {
        setDesApear('none')
        setApear('block')
        
        let dados = getDados()
        if (nome && ano in JSON.parse(dados)){
            localStorage.removeItem()
        }
    }
    const [desApear, setDesApear] = useState('block')
    
    return(
        <div>
            <button onClick={remover} style={{display: desApear}}>Remover</button>
            <div style={{display: apear, marginLeft: '15px'}}>
                <p><br/><p style={voltar}>Nome a ser excluído:</p>
                    <input type="text" className="iinpremo" id='nome' placeholder='Nome' autoComplete='off' onChange={(e) => setNome(e.target.value)}/>
                </p>
                <p><br/><p style={voltar}>Ano de nascimento:</p>
                    <input type="text" className="iinpremo ano" id='ano' placeholder='Ano de nascimento' onChange={(e) => setAno(e.target.value)}/>
                </p>
                <button style={feito}>Feito</button>
            </div>
        </div>
    );
}