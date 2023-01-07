import React from "react";

export default class BaseClass extends React.Component{
    constructor(props){
        // método para criar o props
        super(props)
        // state criado
        this.state = {
            nome: '',
            idade: 0,
            profissao: props.prof
        }
        // bind
        this.mudNome = this.mudarNome.bind(this)
        this.mudIdade = this.mudarIdade.bind(this)
    }
    // funções setState
    mudarNome(e){
        this.setState(
            (state) => (
                {nome: e.target.value}
            )
        )
    }
    mudarIdade(e){
        this.setState(
            (state) => (
                {idade: e.target.value}
            )
        )
    }
    // conteúdo a ser renderizado na tela
    render(){
        return(
            <div>
                <h2>Olá, mundo!</h2>
                <p>
                    <label htmlFor="nome">Digite o seu nome: </label>
                    <input type="text" id="nome" onChange={this.mudNome}/>
                </p>
                <p>
                    <label htmlFor="idade">Digite sua idade:</label> <input type="number" onChange={this.mudIdade}/>
                </p>
                <p>
                    {this.props.children[0]} {this.props.children[1]}
                </p>
                <p>Seu nome é: {this.state.nome}</p>
                <p>Você tem: {this.state.idade} anos de idade</p>
                <p>Você é: {this.props.children[2]}</p>
            </div>
        )
    }
    // mensagem de criação do componente
    componentDidMount(){
        console.log('Componente criado!')
    }
}