import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dash from './components/Dash'
import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Cart from './components/pages/Cart'

export default function App() {
  const boxHeader = React.useRef()
  const boxDash = React.useRef()
  const boxContent = React.useRef()

  React.useEffect(() => {
    boxContent.current.style.height = `${window.innerHeight - boxHeader.current.clientHeight}px`
    boxContent.current.style.width = `${window.innerWidth - boxDash.current.clientWidth}px`
    window.addEventListener('resize', (event) => {
      boxContent.current.style.height = `${event.target.innerHeight - boxHeader.current.clientHeight}px`
      boxContent.current.style.width = `${event.target.innerWidth - boxDash.current.clientWidth}px`
    })
  })

  return (
    <div className='App'>
      <div ref={boxHeader} className='z-50'>
        <Header />
      </div>
      <div className='flex'>
        <div className='z-20' ref={boxDash}>
          <Dash />
        </div>
        <div className='content overflow-auto px-3 py-5 md:px-12 lg:px-16 z-10' ref={boxContent}>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/About' element={ <About /> } />
            <Route path='/Cart' element={ <Cart /> } />
          </Routes>
        </div>
      </div>
    </div>
  )
}