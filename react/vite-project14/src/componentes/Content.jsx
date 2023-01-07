import React from 'react'
import { useState, useEffect } from 'react'
import Nivel from './Nivel'

export default class Content extends React.Component{
    constructor(props){
        super(props)
        this.inputEstilo = {
            width: '100px'
        }
        this.state ={
            massa: 0,
            alt: 0,
            imc: 0,
            nivel: '',
            naoDigitado: 'none',
            res: 'none'
        }
        this.imc = 0
        

        this.bindMassa = this.funcMassa.bind(this)
        this.bindAlt = this.funcAlt.bind(this)
        this.bindGerar = this.gerar.bind(this)
    }
    funcMassa(e){
        this.setState({
            massa: e.target.value
        })
    }
    funcAlt(e){
        this.setState({
            alt: e.target.value
        })
    }
    gerar(){
        if(this.state.massa == '' || this.state.alt == ''){
            this.setState({
                naoDigitado: 'block'
            }),
            this.setState({
                res: 'none'
            })
        }

        else{
            this.imc = (this.state.massa / this.state.alt ** 2).toFixed(2)
            this.setState({
                naoDigitado: 'none'
            })
            if(this.imc < 18.5){
                this.setState({
                    nivel: 'Abaixo do peso normal'
                })
            }
            else if(this.imc >= 18.5 && this.imc < 25){
                this.setState({
                    nivel: 'Peso normal'
                })
            }
            else if(this.imc >= 25 && this.imc < 30){
                this.setState({
                    nivel: 'Excesso de peso'
                })
            }
            else if(this.imc >= 30 && this.imc < 35){
                this.setState({
                    nivel: 'Obesidade classe I'
                })
            }
            else if(this.imc >= 35 && this.imc < 40){
                this.setState({
                    nivel: 'Obesidade classe II'
                })
            }
            else{
                this.setState({
                    nivel: 'Obesidade classe III'
                })
            }
            this.setState({
                res: 'block'
            }) 
            console.log(this.imc) 
        }
    }
    render(){
        return(
            <div>
                <fieldset>
                    <legend>Dados</legend>
                    <p className='filtro'>
                        <label htmlFor="massa">Massa: </label> 
                        <input type="number" id="massa" style={this.inputEstilo} onChange={this.bindMassa}/>
                    </p>
                    <p className='filtro'>
                        <label htmlFor="alt">Altura: </label>
                        <input type="number" id='alt' style={this.inputEstilo} onChange={this.bindAlt}/>
                    </p>
                    <p className='filtro'>
                        <button onClick={this.bindGerar}>
                            Gerar
                        </button>
                    </p>
                </fieldset>
                <fieldset>
                    <legend>Resultado</legend>
                    <div className='naoencontrado' style={{display: this.state.naoDigitado}}>
                        Preencha os campos acima para obter o resultado
                    </div>
                    <div style={{display: this.state.res}}> 
                        <p className='filtro'>
                            IMC: {this.imc}
                        </p>
                        <p className='filtro'>
                            Nível: {this.state.nivel}
                        </p>
                    </div>
                </fieldset>
            </div>
        )
    }
}