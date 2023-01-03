import { useState } from 'react'

export default function Remover() {
    const voltar = {
        marginLeft: '-130px',
        marginTop: '10px'
    }
    const feito = {
        marginTop: '10px',
        marginLeft: '-100px'
    }
    const getDados = () => {
        return JSON.parse(localStorage.getItem('list'))
    }
    const [nome, setNome] = useState('')
    const [ano, setAno] = useState('')
    const [apear, setApear] = useState('none')
    const [desApear, setDesApear] = useState('block')
    const remover = () => {
        let dados = getDados()
        let deletado = nome && ano
        let indice = dados.indexOf(deletado)
        return delete dados[0]
        //return localStorage.setItem('list', JSON.stringify(jsonNovo))
    }
    const sumir = () => {
        setDesApear('none')
        setApear('block')
    }
    const cancelar = () => {
        setDesApear('block')
        setApear('none')
        setNome('')
        setAno('')
    }
    return(
        <div>
            <button onClick={sumir} style={{display: desApear}}>Remover</button>
            <div style={{display: apear, marginLeft: '15px'}}>
                <p><br/><p style={voltar}>Nome a ser excluído:</p>
                    <input type="text" className="iinpremo" id='nome' placeholder='Nome' autoComplete='off' onChange={(e) => setNome(e.target.value)}/>
                </p>
                <p><br/><p style={voltar}>Ano de nascimento:</p>
                    <input type="text" className="iinpremo ano" id='ano' placeholder='Ano de nascimento' onChange={(e) => setAno(e.target.value)}/>
                </p>
                <button style={feito} onClick={remover}>Feito</button>
                <button onClick={cancelar}>Cancelar</button>
            </div>
        </div>
    );
}