import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createRoot } from 'react-dom/client'
import { render } from 'react-dom';
import { useEffect } from 'react';

function tick(){
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
/*setInterval(tick, 1000)*/
tick()



