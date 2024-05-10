import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

let hello=0;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App counter={hello}/>
  </React.StrictMode>,
)

