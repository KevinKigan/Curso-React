import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelloWorldApp } from './HelloWorldApp'
import { FirstApp } from './FirstApp'
import './styles.scss';
import { CounterApp } from './CounterApp';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola soy Kevin" number={100} /> */}
    <CounterApp value={1}></CounterApp>
  </React.StrictMode>,
)
