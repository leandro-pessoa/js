import { useState } from 'react'
import Remover from './Remover'

export default function Adicionar(){
    localStorage.getItem('list') ?? localStorage.setItem('list', JSON.stringify([]))
    const getDados = () => {
        return JSON.parse(localStorage.getItem('list')) ?? []
    }
    const [nome, setNome] = useState('')
    const [ano, setAno] = useState('')
    const [pro, setPro] = useState('')
    const [pree, setPree] = useState('none')
    const dados = []
    let ad = () => {
        if(nome != '' && ano != '' && pro != ''){
            let dados = getDados()
            dados.push({Nome : nome, Ano : ano, Pro : pro})
            setPree('none')
            return localStorage.setItem('list', JSON.stringify(dados))
        }
        else{
            setPree('block')
        }
    }
    return(
        <div>
            <fieldset>
                <legend>Dados pessoais</legend>
                <p className='dado'>
                    <label htmlFor="inome">
                        Nome:
                    </label><br/>
                    <input type="text" name="nome" id="inome" placeholder='Insira seu primeiro nome' autoComplete='off' onChange={(e) => setNome(e.target.value)}/>
                </p>
                <p className='dado'>
                    <label htmlFor="inasc">
                        Ano de nascimento:
                    </label><br/>
                    <input type="text" name="nasc" id="inasc" placeholder='Insira o ano' onChange={(e) => setAno(e.target.value)}/>
                </p>
                <p className='dado'>
                    <label htmlFor="ipro">
                    Profissão:
                    </label><br/>
                    <input type="text" name="pro" id="ipro" placeholder='Insira sua profissão' autoComplete='off' onChange={(e) => setPro(e.target.value)}/>
                </p><br/>
                <p className='button'>
                    <button
                    onClick={ad}
                    >
                        Enviar
                    </button> 
                </p>
                <p className='button'>
                    <Remover/>
                </p>
                <p style={{display: pree}} className='preencher'>
                    Preencha todos os campos antes de enviar
                </p>
            </fieldset>
        </div>
    );
}