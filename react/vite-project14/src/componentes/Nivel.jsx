import React, {useState} from 'react'

export default class Niivel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nivel: ''
        }

        this.bindNivel = this.nivel.bind(this)
    }
    
    nivel(){
        if(this.props.imc < 18.5){
            this.setState({
                nivel: 'Abaixo do peso normal'
            })
        }
        else if(this.props.imc >= 18.5 && this.props.imc < 25){
            this.setState({
                nivel: 'Peso normal'
            })
        }
        else if(this.props.imc >= 25 && this.props.imc < 30){
            this.setState({
                nivel: 'Excesso de peso'
            })
        }
        else if(this.props.imc >= 30 && this.props.imc < 35){
            this.setState({
                nivel: 'Obesidade classe I'
            })
        }
        else if(this.props.imc >= 35 && this.props.imc < 40){
            this.setState({
                nivel: 'Obesidade classe II'
            })
        }
        else{
            this.setState({
                nivel: 'Obesidade classe III'
            })
        }
    }

    render(){
        return(
            <div>
                {this.bindNivel}
            </div>
        )
    }
}