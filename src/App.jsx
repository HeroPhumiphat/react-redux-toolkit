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
import AlertMessage from './components/AlertMessage'
import { setStateAlertFalse } from './slice/stateMessageAlertSlice'

export default function App() {
  const stateLogin = useSelector(state => state.stateLogin.value)
  const checkLogin = useSelector(state => state.checkLogin.value)
  const stateMessageAlert = useSelector(state => state.stateMessageAlert.value)
  const dispatch = useDispatch()

  const boxHeader = React.useRef()
  const boxDash = React.useRef()
  const boxContent = React.useRef()
  const btnDash = React.useRef()
  const boxLogin = React.useRef()
  const boxAlert = React.useRef()
  const timeAlert = React.useRef()

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

    if (stateMessageAlert) {
      let time = 5000
      let r = 0
      let x
      const test = setInterval(() => {
        r++
        if (r === 1) {
          timeAlert.current.style.width = `${boxAlert.current.clientWidth}px`
          x = (time / boxAlert.current.clientWidth)
          const setTime = setInterval(() => {
            timeAlert.current.style.width = `${timeAlert.current.clientWidth - 0.75}px`
            console.log('x', x, timeAlert.current.clientWidth)
            if (timeAlert.current.clientWidth === 0) {
              clearInterval(setTime)
            }
          }, x)
        }
        if (r > 1) {
          clearInterval(test)
        }
      }, 1)


      boxAlert.current.classList.remove('hidden')
      boxAlert.current.classList.add('block')
      setTimeout(() => {
        boxAlert.current.classList.add('hidden')
        boxAlert.current.classList.remove('block')
        dispatch(setStateAlertFalse())
      }, time)
    }
  })

  const onClickLogin = () => {
    stateLogin === false ? dispatch(stateLoginTrue()) : dispatch(stateLoginFalse())
    console.log(stateLogin)
  }

  const onClickSetstateLoginFalse = () => {
    dispatch(stateLoginFalse())
    dispatch(addLogin())
  }

  const onClickCloseAlert = () => {
    boxAlert.current.classList.add('hidden')
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
        <div className=' relative p-3' ref={boxContent}>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/about' element={ <About /> } />
          </Routes>
        </div>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-40 justify-center items-center hidden' ref={boxLogin}>
        <div className='absolute top-0 left-0 w-full h-full z-30 bg-neutral-800 opacity-30 backdrop-blur-3xl' onClick={onClickSetstateLoginFalse}></div>
        <div className='relative z-50 px-2 mx-0'>
        {
          checkLogin === 'login'
            ? <Login />
            : <Register />
        }
        </div>
      </div>
      <div className='absolute right-7 top-20 bg-green-200 px-5 text-sm py-3 rounded-md pr-12 z-50 hidden' style={{ maxWidth: 350}} id='message-alert' ref={boxAlert}>
        <button className='absolute right-2 top-2.5 bg-red-400 hover:bg-red-500 text-xs px-2 py-1 border-none rounded-md font-bold' onClick={onClickCloseAlert}>X</button>
        <AlertMessage />
        <div className='absolute -bottom-3 bg-neutral-700 w-full h-1 left-0 rounded-full' ref={timeAlert}></div>
      </div>
    </div>
  )
}
