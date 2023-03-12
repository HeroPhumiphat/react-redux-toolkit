import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { stateLoginTrue } from '../slice/stateLoginSlice'

export default function Header() {
  const dispatch = useDispatch()
  const menulist = React.useRef()
  const menuShow = React.useRef()
  const [stateMenuList, setStateMenuList] = React.useState(false)
  const [stateCheck, setStateCheck] = React.useState(false)

  React.useEffect(() => {
    if (stateMenuList) {
      menuShow.current.classList.add('flex')
      menuShow.current.classList?.remove('hidden')
    }

    window.addEventListener('resize', (event) => {
      if (event.target.innerWidth > 768) {
        setStateCheck(true)
      } else {
        setStateCheck(false)
      }

    })
    if (stateCheck) {
        setStateMenuList(false)
        menulist.current.classList.add('active-close')
        menulist.current.classList.remove('active-open')
        menuShow.current.classList.add('active-close')
        menuShow.current.classList.remove('active-open')
        console.log('test')
      }
  })

  const onClickMenuList = () => {
      if (stateMenuList) {
        setStateMenuList(false)
        menulist.current.classList.add('active-close')
        menulist.current.classList.remove('active-open')
        menuShow.current.classList.add('active-close')
        menuShow.current.classList.remove('active-open')
    } else {
      setStateMenuList(true)
      menulist.current.classList.add('active-open')
      menulist.current.classList?.remove('active-close')
      menuShow.current.classList.add('active-open')
      menuShow.current.classList?.remove('active-close')
    }
  }

  const onClickBTN = () => {
    dispatch(stateLoginTrue())
  }

  return (
    <div className='w-full bg-white py-2 px-4 z-50' style={{ boxShadow: '1px 1px 5px #e0e0e0' }}>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='logo'>
            <h1 className='logo my-1.5'>LOGO</h1>
          </div>
          <div className='flex justify-center w-20'>
            <div className='relative left-3 h-full items-center cursor-pointer'>
              <div className=' bg-lime-200 px-4 hover:px-3.5 h-12 flex justify-center items-center rounded-full hover:border-2 border-green-300'>
                <p className='text-sm mr-5 font-bold'>Dash</p>
                <i className="arrow-dash absolute right-4 fa-solid fa-snowflake"></i>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:flex space-x-4 items-center'>
          <ul className='space-x-3 flex'>
            <li className='navlink' style={{'--i': 1}}>
              <NavLink to='/' className={({ isActive }) => isActive ?'font-bold' : ''}  end>Home</NavLink>
            </li>
            <li className='navlink' style={{'--i': 2}}>
              <NavLink to='/product' className={({ isActive }) => isActive ?'font-bold' : ''}>Products</NavLink>
            </li>
            <li className='navlink' style={{'--i': 3}}>
              <NavLink to='/cart' className={({ isActive }) => isActive ?'font-bold' : ''}>Cart</NavLink>
            </li>
            <li className='navlink' style={{'--i': 4}}>
              <NavLink to='/about' className={({ isActive }) => isActive ?'font-bold' : ''}>About</NavLink>
            </li>
          </ul>
          <div className='login flex items-center'>
            <button className='btn text-sm' onClick={onClickBTN}>Login</button>
          </div>
        </div>
        <div className='menulist cursor-pointer md:hidden' ref={menulist}onClick={onClickMenuList}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className='menuShow absolute px-10 py-7 bg-neutral-300 rounded-md right-3 top-20 z-40 flex-col items-center space-y-2 hidden' ref={menuShow}>
          <p className='menuL' style={{'--r': 2}}>Lorem ipsum dolor</p>
          <p className='menuL' style={{'--r': 3}}>Lorem ipsum dolor</p>
          <p className='menuL' style={{'--r': 4}}>Lorem ipsum dolor</p>
          </div>
      </div>
    </div>
  )
}
