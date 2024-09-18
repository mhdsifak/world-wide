import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Singin from './pages/Singin'
import Singup from './pages/Singup'
import Headers from './component/Headers'

export default function App() {
  return (
    <BrowserRouter>
    <Headers />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='About/' element={<About />} />
      <Route path='Singin/' element={<Singin />} />
      <Route path='Singup/' element={<Singup />} />
    </Routes>
    </BrowserRouter>
  );
}
