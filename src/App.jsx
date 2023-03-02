import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'

import Header from './components/Header'
import Home from './components/page/Home'
import Product from './components/page/Product'
import Login from './components/page/Login'
import Register from './components/page/Register'
import MenageProd from './components/dash/product/MenageProd'
import Create from './components/dash/product/Create'
import Edit from './components/dash/product/Edit'
import Delete from './components/dash/product/Delete'
import MenageUser from './components/dash/user/MenageUser'
import CreateUser from './components/dash/user/CreateUser'

function App() {
  const dashWidth = useSelector((state) => state.dash.value)
  const state = useSelector((state) => state.dashState.value)
  const userLogin = useSelector((state) => state.login.value[0])
  
  const content = React.useRef()
  React.useEffect(() => {
    if (state === 'true') {
      if (window.innerWidth > 768) {
        if (dashWidth === 'w-60') {
          content.current.style.width = `${window.innerWidth - 241}px`
        }
        if (dashWidth === 'w-20') {
          content.current.style.width = `${window.innerWidth - 81}px`
        }
      }
      else {
        content.current.style.width = `${window.innerWidth - 81}px`
      }
    }
    if (state === 'false') {
      content.current.style.width = `${window.innerWidth}px`
    }

    window.addEventListener('resize', () => {
      if (state === 'true') {
        if (window.innerWidth > 768) {
          if (dashWidth === 'w-60') {
            content.current.style.width = `${window.innerWidth - 241}px`
          }
          if (dashWidth === 'w-20') {
            content.current.style.width = `${window.innerWidth - 81}px`
          }
        }
        else {
          content.current.style.width = `${window.innerWidth - 81}px`
        }
      }
      if (state === 'false') {
        content.current.style.width = `${window.innerWidth}px`
      }
    })
  })

  return (
    <div className='App'>
      <div className='fixed z-50 w-96'>
        <Header />
      </div>
      <div className='content-app overflow-y-auto fixed z-20 right-0 bottom-0 h-96 p-5 pl-10' style={{top: 73, height: window.innerHeight - 75 }} ref={content}>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/product' element={ <Product /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />

          {
            userLogin?.quality === 'ADMIN' 
            ? <>
                <Route path='/dash/user/menage' element={ <MenageUser /> } />
                <Route path='/dash/user/create' element={ <CreateUser /> } />

                <Route path='/dash/product/menage' element={ <MenageProd /> } />
                <Route path='/dash/product/create' element={ <Create /> } />
                <Route path='/dash/product/edit' element={ <Edit /> } />
                <Route path='/dash/product/delete' element={ <Delete /> } />
              </>
            : ''
          }

        </Routes>
      </div>
    </div>
  )
}

export default App