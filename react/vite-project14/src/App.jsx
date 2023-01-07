import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './componentes/Header'
import Main from './componentes/Main'


export default function App() {
  
  return(
    <div>
        <div className='back'>
          <Header/>
          <Main/>
          <footer>&copy; Leandro Pessoa</footer>
        </div>
    </div>
  );
}


