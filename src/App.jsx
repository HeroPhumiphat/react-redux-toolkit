import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dash from './components/Dash'
import Header from './components/Header'
import Home from './components/page/Home'

import './App.css'
import Cart from './components/page/Cart'
import About from './components/page/About'
import Login from './components/page/Login'
import Register from './components/page/Register'
import { useDispatch, useSelector } from 'react-redux'
import { stateLoginFalse, stateLoginTrue } from './slice/stateLoginSlice'
import { addLogin } from './slice/checkLoginSlice'
import EditProfile from './components/page/EditProfile'
import { addEditFalse } from './slice/stateEditSlice'
import MessageAlert from './components/MessageAlert'
import Product from './components/page/Product'
import ConfirmAlert from './components/ConfirmAlert'

export default function App() {
  const stateLogin = useSelector(state => state.stateLogin.value)
  const checkLogin = useSelector(state => state.checkLogin.value)
  const stateEdit = useSelector(state => state.stateEdit.value)
  const dispatch = useDispatch()

  const boxHeader = React.useRef()
  const boxDash = React.useRef()
  const boxContent = React.useRef()
  const btnDash = React.useRef()
  const boxLogin = React.useRef()

  React.useEffect(() => {
    setTimeout(() => {
      btnDash.current?.classList.remove('hidden')
      btnDash.current?.classList.add('flex')
    }, 3000)
  }, [])

  React.useEffect(() => {
    boxContent.current.style.height = `${window.innerHeight - boxHeader.current.clientHeight}px`
    boxContent.current.style.width = `${window.innerWidth - boxDash.current.clientWidth}px`

    window.addEventListener('resize', (event) => {
      boxContent.current.style.height = `${event.target.innerHeight - boxHeader.current.clientHeight}px`
      boxContent.current.style.width = `${event.target.innerWidth - boxDash.current.clientWidth}px`
    })

    if (stateLogin === 'true') {
      boxLogin.current.classList.remove('hidden')
      boxLogin.current.classList.add('flex')
    }
    if (stateLogin === 'false') {
      boxLogin.current.classList.add('hidden')
      boxLogin.current.classList.remove('flex')
    }
  })

  const onClickSetstateLoginFalse = () => {
    dispatch(stateLoginFalse())
    dispatch(addLogin())
  }

  return (
    <div className='App'>
      <div className='relative w-full' ref={boxHeader}>
        <Header />
      </div>
      <div className='relative flex'>
        <div className='relative hidden' ref={boxDash}>
          <Dash />
        </div>
        <div className='content relative p-3  overflow-y-auto overflow-x-hidden  z-30' ref={boxContent}>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/product' element={ <Product /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/about' element={ <About /> } />
          </Routes>
        </div>
      </div>
      {
        stateEdit && <div className='absolute top-0 left-0 flex justify-center items-center w-full h-full'>
          <div className='absolute top-0 left-0 w-full h-full z-40 bg-neutral-800 opacity-30 backdrop-blur-3xl' onClick={() => dispatch(addEditFalse())}></div>
          <div className='relative z-50'>
            <EditProfile />
          </div>
        </div>
      }
      <div className='absolute top-0 left-0 w-full h-full z-50 justify-center items-center hidden' ref={boxLogin}>
        <div className='absolute top-0 left-0 w-full h-full z-30 bg-neutral-800 opacity-30 backdrop-blur-3xl' onClick={onClickSetstateLoginFalse}></div>
        <div className='relative z-50 px-2 mx-0'>
          {
             checkLogin === 'login'
              ? <Login />
              : <Register />
          }
        </div>
      </div>
      <div className='z-50'>
        <MessageAlert />
        <ConfirmAlert />
      </div>
    </div>
  )
}
