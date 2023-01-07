import React from 'react'
import { useState, useEffect } from 'react'

export default class Content extends React.Component{
    // declaração do construtor
    constructor(props){
        super(props)
        // lista JSON contendo os arquivos (jogos)
        this.jogos = [
            {nome: 'Forza Horizon 5', ano: 2021, tipo: 'Corrida'},
            {nome: 'Battlefield 4', ano: 2013, tipo: 'Ação'},
            {nome: 'Skyrim', ano: 2011, tipo: 'RPG'},
            {nome: 'Gran Turismo 4', ano: 2004, tipo: 'Corrida'},
            {nome: 'Borderlands 2', ano: 2012, tipo: 'RPG'},
            {nome: 'Terraria', ano: 2011, tipo: 'Aventura'},
            {nome: 'Black', ano: 2006, tipo: 'Ação'},
            {nome: 'Assassins Creed 4', ano: 2013, tipo: 'Aventura'}
        ]

        // métodos para a inserção dos options de tipo no select
        this.jogosTipo = []

        // insere no array jogosTipo os tipos dos jogos
        this.pushTipo = this.jogos.map(
            (jogo) => this.jogosTipo.push(jogo.tipo)
        )

        // retira os elementos repetidos do array jogosTipo
        this.semRepeticaoTipo = [... new Set(this.jogosTipo)]

        // criação dos options com base no array jogosTipo
        this.filtroTipo = this.semRepeticaoTipo.map(
            (tipo) => <option value={tipo}>{tipo}</option>
        )

        // métodos para a inserção dos options de ano no select
        this.jogosAno = []

        // isso aqui insere os anos dos jogos em uma lista separada
        this.pushAno = this.jogos.map(
            (jogo) => this.jogosAno.push(jogo.ano)
        )

        // organiza tudo em sequencia
        this.jogosAno.sort()

        // retira os elementos repetidos
        this.semRepeticaoAno = [... new Set(this.jogosAno)]

        // e, agora, pega a lista organizada e insere nos options
        this.filtroAno = this.semRepeticaoAno.map(
            (ano) => <option value={String(ano)}>{ano}</option>
        )

        // criação de arrays para a seleção e descarte de jogos no filtro
        this.selecionados = []
        this.descartados = []

        // declaração dos states
        this.state = {
            tipo: '',
            ano: '',
            listaJogos: 
            this.jogos.map(
                (jogo) => <tr>
                    <td>{jogo.nome}</td>
                    <td>{jogo.ano}</td>
                    <td>{jogo.tipo}</td>
                </tr>
            ),
            naoEncontrado: 'none'  
        }

        // bindagem das funções
        this.mudarTipo = this.mudarTipo.bind(this);
        this.mudarAno = this.mudarAno.bind(this)
        this.filtrar = this.filtrar.bind(this)
    }

    // função que altera o state tipo por meio do select
    mudarTipo(event) {
        this.setState({tipo: event.target.value});
    }

    // função que altera o state ano por meio do select
    mudarAno(event) {
        this.setState({ano: event.target.value})
    }

    // função que filtra os states selecionados
    filtrar(){
        // esvazia o array selecionados
        this.selecionados = []

        // faz o map do JSON contendo todos os jogos 
        this.jogos.map(
            (jogo) => {

                // esse if serve para procurar um jogo da lista JSON com os dois filtros escolhidos
                if(jogo.tipo == this.state.tipo && jogo.ano == this.state.ano){

                    // esvazia o array descartados
                    this.descartados = []

                    // insere os jogos que estejam na condição proposta no array selecionados
                    this.selecionados.push(jogo)
                    return (

                        // faz a mensagem de itens não encontrados desaparecer caso esteja aparecendo
                        this.setState({
                            naoEncontrado: 'none'
                        }),

                        // faz o map do array selecionados, mostrando os valores filtrados na tela 
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

                // caso nenhum filtro seja selecionado, esse if será chamado, mostrando todos os jogos contidos no JSON
                else if(this.state.tipo == '' && this.state.ano == ''){
                    this.descartados = []
                    return(
                        this.setState({
                            listaJogos: this.jogos.map(
                                (jogo) => <tr>
                                    <td>{jogo.nome}</td>
                                    <td>{jogo.ano}</td>
                                    <td>{jogo.tipo}</td>
                                </tr>
                            )
                        }),
                        this.setState({
                            naoEncontrado: 'none'
                        })
                    )
                }

                // é chamado quando o tipo do jogo é selecionado, mas o ano não, filtrando somente os jogos por tipo (é idêntico ao primeiro if, exceto nas condições) 
                else if(this.state.tipo == jogo.tipo && this.state.ano == ''){
                    this.descartados = []
                    this.selecionados.push(jogo)
                    return(
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

                // faz exatamente o mesmo que o anterior, mudando somente a opção selecionada, que nesse caso é o ano
                else if(this.state.tipo == '' && this.state.ano == jogo.ano){
                    this.descartados = []
                    this.selecionados.push(jogo)
                    return(
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

                // retorna a lista vazia e a mensagem de não encontrado quando não há jogos na lista com os filtros selecionados
                else{

                    // insere o jogo descartado no array descartados
                    this.descartados.push(jogo)

                    // compara se o array descartados tem o mesmo tamanho da lista JSON. Se sim, os dados que estavam desaparecem e a mensagem de não encontrado aparece
                    if(this.descartados.length == this.jogos.length){

                        // faz a mensagem de não encontrado aparecer
                        this.setState({
                            naoEncontrado: 'block'
                        }),

                        // retira os dados que estavam aparecendo na tabela
                        this.setState({
                            listaJogos: ''
                        })

                        // esvazia o array descartados
                        this.descartados = []
                    }
                }
            }
        );
    }

    // renderiza os elementos HTML/CSS junto com o JavaScript na tela
    render(){
        return(
            <div>
                <p style={{fontWeight: 'bold', color: '#61DAFB', fontSize: '1.1em'}}>
                    Filtros:
                </p>
                <p className='filtro'> 
                    Por tipo: <select value={this.state.tipo} onChange={this.mudarTipo}>
                        <option value="">---</option>
                        {this.filtroTipo}
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
