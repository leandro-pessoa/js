import { useState } from 'react'
import React from 'react'
import './App.css'

export default function App() {
  const carros = ['Supra', 'Jeta', 'Mustang', 'Huracán']
  const listaCarros = carros.map(
    (carro, id) => <li key={id}>{carro} - {id}</li>
    
  )
  const dados = [
    {Nome : 'Leandro', Idade : 18},
    {Nome : 'Lucas', Idade : 14},
    {Nome : 'Júlia', Idade : 20}
  ]
  const listaDados = dados.map(
    (dado) => <p>{dado.Nome} - {dado.Idade}</p>
  )
  return(
    <div>
        <ul>{listaCarros}</ul>
        <p>{listaDados}</p>
    </div>
  );
}


