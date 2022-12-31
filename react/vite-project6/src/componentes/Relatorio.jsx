import { useState } from 'react'

export default function Relatorio(){
    const list = localStorage.getItem('list')
    const listaConvertida = JSON.parse(list) ?? []
    const dado = listaConvertida.map(
        (elemento) => <tr><td>{elemento.Nome}</td><td>{elemento.Ano}</td><td>{elemento.Pro}</td></tr>
    )
    return (
        <section>
            <div className='tabela'>
                <table>
                    <thead>
                        <tr>
                            <th scope='colgroup'>Nome</th>
                            <th scope='colgroup' className='ano'>Ano de nasc.</th>
                            <th scope='colgroup'>Profissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dado}
                    </tbody>
                </table>
            </div>
        </section>
    );
}