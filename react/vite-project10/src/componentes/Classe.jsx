import React from 'react'

class Classe extends React.Component{
    constructor(props){
        super(props)
        this.modelo = 'Mustang'
        this.state = {
            ligado: false,
            velocidade: 0,
        }
        this.ld = this.LigDes.bind(this)
        this.acelerar = this.aumentarVel.bind(this)
    }
    /*
    LigDes(){
        this.setState({ligado: !this.state.ligado})
    }
    */
    //OU
    LigDes(){
        this.setState(
            (state) => (
                {ligado: !state.ligado}
            ) 
        )
    }
    /*
    aumentarVel(){
        this.setState({velocidade: this.state.velocidade + 1})
    }
    */
    //OU
    aumentarVel(){
        this.setState(
            (state, props) => (
                {velocidade: state.velocidade + props.fator}   
            )
        )
    }
    render(){
        return(
            <div>
                <h2>Olá, mundo!</h2>
                <p>{this.props.text}</p>
                <hr/>
                <p>Nome: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <button onClick={this.ld}>
                    {this.state.ligado ? 'Desligar' : 'Ligar'}
                </button>
                <p>Velocidade: {this.state.velocidade} Km/h</p>
                <button onClick={this.acelerar}>+</button>
                
            </div>
        )
    }
    componentDidMount(){
        console.log('Componente criado!')
    }
    componentDidUpdate(){
        console.log('Componente atualizado!')
    }
    componentWillUnmount(){
        console.log('Componente removido!')
    }
}
export default Classe