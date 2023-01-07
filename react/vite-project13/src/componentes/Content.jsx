import React from 'react'
import { useState, useEffect } from 'react'

export default class Content extends React.Component{
    constructor(props){
        super(props)
        this.jogos = [
            {nome: 'Battlefield 4', ano: 2013, tipo: 'Ação'},
            {nome: 'Black', ano: 2006, tipo: 'Ação'},
            {nome: 'Forza Horizon 5', ano: 2021, tipo: 'Corrida'},
            {nome: 'Gran Turismo 4', ano: 2004, tipo: 'Corrida'},
            {nome: 'Skyrim', ano: 2011, tipo: 'RPG'},
            {nome: 'Borderlands 2', ano: 2012, tipo: 'RPG'}
        ]
        this.jogosAno = []
        this.push = this.jogos.map(
            (jogo) => this.jogosAno.push(jogo.ano)
        )
        this.jogosAno.sort()
        this.filtroAno = this.jogosAno.map(
            (ano) => <option value={String(ano)}>{ano}</option>
        )
        this.selecionados = []
        this.descartados = []
        this.state = {
            tipo: '',
            ano: '',
            listaJogos: 
            this.selecionados.map(
                (jogo) => <tr>
                    <td>{jogo.nome}</td>
                    <td>{jogo.ano}</td>
                    <td>{jogo.tipo}</td>
                </tr>
            ),
            naoEncontrado: 'none'  
        }
        this.mudarTipo = this.mudarTipo.bind(this);
        this.mudarAno = this.mudarAno.bind(this)
        this.filtrar = this.filtrar.bind(this)
    }

    mudarTipo(event) {
        this.setState({tipo: event.target.value});
    }
    mudarAno(event) {
        this.setState({ano: event.target.value})
    }

    filtrar(){
        this.selecionados = []
        this.jogos.map(
            (jogo) => {
                if(jogo.tipo == this.state.tipo && jogo.ano == this.state.ano){
                    this.descartados = []
                    this.selecionados.push(jogo)
                    return (
                        this.setState({
                            naoEncontrado: 'none'
                        }),
                        this.setState({
                            listaJogos: this.selecionados.map(
                                (jogo) => <tr>
                                    <td>{jogo.nome}</td>
                                    <td>{jogo.ano}</td>
                                    <td>{jogo.tipo}</td>
                                </tr>
                            )
                        })
                    )
                }
                else if(this.state.tipo == '' && this.state.ano == ''){
                    return(
                        this.setState({
                            listaJogos: this.jogos.map(
                                (jogo) => <tr>
                                    <td>{jogo.nome}</td>
                                    <td>{jogo.ano}</td>
                                    <td>{jogo.tipo}</td>
                                </tr>
                            )
                        })
                    )
                }
                else{
                    this.descartados.push(jogo)
                    this.selecionados = []
                    if(this.descartados.length == this.jogos.length){
                        this.setState({
                            naoEncontrado: 'block'
                        }),
                        this.setState({
                            listaJogos: ''
                        })
                        this.descartados = []
                    }
                }
            }
        );
    }

    render(){
        return(
            <div>
                <p>Filtros:</p>
                <p className='filtro'> 
                    Por tipo: <select value={this.state.tipo} onChange={this.mudarTipo}>
                        <option value="">---</option>
                        <option value="Ação">Ação</option>
                        <option value="Corrida">Corrida</option>
                        <option value="RPG">RPG</option>
                    </select>
                </p>                
                <p className='filtro'>
                    Por ano: <select value={this.state.ano} onChange={this.mudarAno}>
                        <option value="">---</option>
                        {this.filtroAno}
                    </select>
                </p>
                <p className='filtro'>
                    <button onClick={this.filtrar}>
                        Filtrar
                    </button>
                </p>
                <p>tipo: {this.state.tipo}</p>
                <p>ano: {this.state.ano}</p>
                <div className='tabela'>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ano</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listaJogos}
                        </tbody>
                    </table>
                    <p className='naoencontrado' style={{display: this.state.naoEncontrado}}>
                        Não há elementos nessa lista com esses filtros selecionados
                    </p>
                </div>
            </div>
        )
    }
}
