import { useState } from 'react'

export default function Main(){
    const [nome, setNome] = useState('')
    const [carro, setCarro] = useState('---')
    const [form, setForm] = useState({"nome" : "", "nascimento" : "", "profissao" : ""})
    const handle = (e) => {
        if(e.target.getAttribute('id') == 'nomeid'){
            setForm({"nome":e.target.value,"nascimento":form.nascimento,"profissao":form.profissao})
        }
        else if(e.target.getAttribute('id') == 'nascimento'){
            setForm({"nome":form.nome,"nascimento":e.target.value,"profissao":form.profissao})
        }
        else if(e.target.getAttribute('id') == 'profissao'){
            setForm({"nome":form.nome,"nascimento":form.nascimento,"profissao":e.target.value})
        }
    }
    return(
        <div>
            <main>
                <h2>Formulários</h2><hr/>
                <label htmlFor="inome">Nome: </label>
                <input type="text" id='inome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                <p>Nome digitado: {nome}</p>
                <hr/>
                <label htmlFor="isel">Selecione um carro: </label>
                <select id="isel" onChange={(e) => setCarro(e.target.value)}>
                    <option value="---" selected>---</option>
                    <option value="Camaro">Camaro</option>
                    <option value="Mustang">Mustang</option>
                    <option value="Ford GT">Ford GT</option>
                </select>
                <p>Carro selecionado: {carro}</p>
                <hr/>
                <p>
                    <label htmlFor="nomeid">Nome: </label>
                    <input type="text" id='nomeid' value={form.nome} onChange={(e) => handle(e)}/>
                </p>
                <p>
                    <label htmlFor="nome">Nascimento: </label>
                    <input type="text" id='nascimento' value={form.nascimento} onChange={(e) => handle(e)}/>
                </p>
                <p>
                    <label htmlFor="nome">Profissão: </label>
                    <input type="text" id='profissao' value={form.profissao} onChange={(e) => handle(e)}/>
                </p>
                <fieldset>
                    <legend>Valores digitados</legend>
                    <p>Nome: {form.nome}</p>
                    <p>Nascimento: {form.nascimento}</p>
                    <p>Profissão: {form.profissao}</p>
                </fieldset>
            </main>
        </div>
    )
} 