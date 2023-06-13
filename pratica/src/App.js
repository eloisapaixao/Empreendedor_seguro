import './App.css'

import Logo from './Components/Template/Logo'
import Menu from './Components/Template/Menu'
import Rotas from './Rotas'

import { BrowserRouter, Route, Router } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Menu />
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App;
