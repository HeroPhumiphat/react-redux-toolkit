import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { setDashStateFalse, setDashStateTrue } from '../slice/dashStateSlice'
import { addMessage } from '../slice/messageAlertSlice'
import { addEditTrue } from '../slice/stateEditSlice'
import { stateLoginTrue } from '../slice/stateLoginSlice'
import { clearUserLogin } from '../slice/userLoginSlice'
import clearShowProductSlice, { setStateShowProduct } from '../slice/clearShowProductSlice'

export default function Header() {
  const userLogin = useSelector(state => state.userLogin.value[0])
  const carts = useSelector(state => state.cart.value)
  const dashState = useSelector(state => state.dashState.value)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [stateMenuList, setStateMenuList] = React.useState(false)
  const [checkProfile, setCheckProfile] = React.useState(false)
  const [stateCheck, setStateCheck] = React.useState(false)
  const menuShow = React.useRef()
  const menulist = React.useRef()
  const prList = React.useRef()

  React.useEffect(() => {
    if (stateMenuList) {
      menuShow.current.classList.add('flex')
      menuShow.current.classList?.remove('hidden')
    }

    if (window.innerHeight <= (menuShow.current.clientHeight + 80)) {
      menuShow.current.style.height = `${window.innerHeight - 100}px`
    } else {
      menuShow.current.style.height = 'auto'
    }

    window.addEventListener('resize', (event) => {
      if (event.target.innerWidth > 768) {
        setStateCheck(true)
      } else {
        setStateCheck(false)
      }
    })

    if (stateCheck) {
      hiddenMenuList()
    }
  })

  const onClickMenuList = () => {
    if (stateMenuList) {
      hiddenMenuList()
    } else {
      setStateMenuList(true)
      menulist.current.classList.add('active-open')
      menulist.current.classList?.remove('active-close')
      menuShow.current.classList.add('active-open')
      menuShow.current.classList?.remove('active-close')
      menuShow.current.classList?.remove('-z-40')
      menuShow.current.classList?.add('z-40')
    }
  }

  const hiddenMenuList = () => {
    setStateMenuList(false)
    menulist.current.classList.add('active-close')
    menulist.current.classList.remove('active-open')
    menuShow.current.classList.add('active-close')
    menuShow.current.classList.remove('active-open')
    setTimeout(() => {
      menuShow.current.classList.add('hidden')
    }, 100)
  }

  const onClickBTN = () => {
    dispatch(stateLoginTrue())
    hiddenMenuList()
  }

  const onClickProfile = () => {
    if (checkProfile) {
      setCheckProfile(false)
      prList.current?.classList.add('active-close')
      prList.current?.classList.remove('active-open')
    } else {
      setCheckProfile(true)
      prList.current?.classList.add('active-open')
      prList.current?.classList?.remove('active-close')
    }
  }

  const onClickLogout = () => {
    dispatch(clearUserLogin())
    setCheckProfile(false)

    let m = { alert: 'Success', message: 'You are finished logging out.' }

    dispatch(addMessage(m))
    hiddenMenuList()
    navigate('/')
  }

  const onClickEditProfile = () => {
    hiddenMenuList()
    dispatch(addEditTrue())
    setCheckProfile(false)
  }

  let productCart = []
  carts.map(e => {
    if (e.user.name === userLogin?.name) {
      productCart.push(e)
    }
  })

  const onClickLink = () => {
    hiddenMenuList()
  }

  const onClickBtnDash = () => {
    if (dashState === false) {
      dispatch(setDashStateTrue())
    } else {
      dispatch(setDashStateFalse())
    }
  }

  return (
    <div className='w-full bg-white py-0 px-4 z-40'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='logo my-2'>
            <Link to='/' className='logo my-1.5 text-3xl tracking-wide'>LOGO</Link>
          </div>
          <div className='flex justify-center w-20'>
            {
              userLogin?.quality === 'ADMIN' && <div className='relative left-3 h-full items-center cursor-pointer'>
                <div className=' bg-lime-200 px-4 hover:px-3.5 h-10 flex justify-center items-center rounded-full hover:border-2 border-green-300' onClick={onClickBtnDash}>
                  <p className='text-sm mr-5 font-bold'>Dash</p>
                  <i className="arrow-dash absolute right-4 fa-solid fa-snowflake"></i>
                </div>
              </div>
            }
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
            <li className='navlink pr-1' style={{'--i': 3}}>
              <NavLink to='/cart' className={({ isActive }) => isActive ?'font-bold' : ''}>
                Cart
                {
                  productCart.length > 0
                    ? <span className='absolute w-1.5 h-1.5 rounded-full top-0 bg-red-400'></span>
                    : ''
                }
              </NavLink>
            </li>
            <li className='navlink' style={{'--i': 4}}>
              <NavLink to='/about' className={({ isActive }) => isActive ?'font-bold' : ''}>About</NavLink>
            </li>
          </ul>
          {
            userLogin?.name.length > 0
            ? <div className='flex items-center'>
                <div className='bg-lime-200 py-3 px-3 ml-2 rounded-full cursor-pointer' onClick={onClickProfile}>
                  <p className='text-sm'>{userLogin?.name.toString().toUpperCase().substr(0,2)}</p>
                </div>
                <div className='pl-2 cursor-pointer' onClick={onClickProfile}>
                  <i className={
                    checkProfile === true ? "fa-solid fa-chevron-up"  : "fa-solid fa-chevron-down"
                  }></i>
                </div>
                {
                  checkProfile
                    ? <div className='prList absolute px-10 py-7 bg-white rounded-md right-3 top-16 z-30 flex-col items-center justify-center flex' ref={prList} style={{boxShadow: '0 0 3px #ccc, 0 0 7px #333'}}>
                        <p>Hi!, <span className='font-bold'>{userLogin.name}</span></p>
                        <p  className=''>{userLogin.email}</p>
                        <button className='bg-transparent border-b-amber-100 border-t-amber-100 rounded-sm py-2 mt-3 hover:rounded-lg hover:border-lime-200 hover:border-1.5 w-10/12' onClick={onClickEditProfile}>edit profile</button>
                        <button className='bg-red-300 hover:bg-red-400 text-white border-none mt-4 focus:outline-none' onClick={onClickLogout}>Logout</button>
                      </div>
                    : ''
                }
              </div>
            : <div className='login flex items-center'>
                <button className='bg-transparent text-blue-500 hover:text-blue-600 border-2 border-blue-400 hover:border-blue-500 text-sm ring:border-none focus:outline-none' onClick={onClickBTN}>Login</button>
              </div>
          }
        </div>
        <div className='flex space-x-4 md:hidden'>
        {
          userLogin?.name.length
            ? <div className='pr-4 border-r'>
              <Link to='/cart' className='font-bold'>
                <i className="fa-solid fa-cart-shopping mr-1"></i>
                Cart
                {
                  productCart.length > 0
                    ? <span className='absolute w-1.5 h-1.5 rounded-full top-5 bg-red-400'></span>
                    : ''
                }
              </Link>
            </div>
          : " "
          }
          <div className='menulist cursor-pointer' ref={menulist} onClick={onClickMenuList}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='menuShow absolute px-10 py-7 bg-white rounded-md right-3 top-16 flex-col items-center hidden overflow-y-auto' ref={menuShow} style={{boxShadow: '0 0 3px #ccc, 0 0 7px #333'}}>
          {
            userLogin?.name.length > 0
              ? <>
                  <div className='bg-lime-200 py-4 px-4 ml-2 rounded-full' onClick={onClickProfile}>
                    <p className='text-sm'>{userLogin?.name.toString().toUpperCase().substr(0,2)}</p>
                  </div>
                  <p className='mt-2'>Hi!, <span className='font-bold'>{userLogin?.name}</span></p>
                  <p  className=''>{userLogin?.email}</p>
                  <button className='bg-transparent border-b-amber-100 border-t-amber-100 rounded-sm py-2 mt-3 hover:rounded-lg hover:border-lime-200 hover:border-1.5 w-10/12 mb-4' onClick={onClickEditProfile}>edit profile</button>
                </>
              : ''
          }

          <Link to='/' className='menuL mb-1' style={{'--r': 1}} onClick={onClickLink}>Home</Link>
          <Link to='/product' className='menuL mb-1' style={{'--r': 2}} onClick={() => {
            onClickLink()
            dispatch(setStateShowProduct())
          }}>Product</Link>
          <Link to='/about' className='menuL mb-3' style={{'--r': 3}} onClick={onClickLink}>About</Link>
          {
            userLogin?.name.length > 0
              ? <div className='flex items-center menuL' style={{'--r': 3.5}}>
                  <button className='py-2 bg-transparent text-red-500 hover:text-600 border-2 border-red-400 hover:border-red-500 ring:border-none focus:outline-none' onClick={onClickLogout}>Logout</button>
                </div>
              : <div className='flex items-center menuL' style={{'--r': 3.5}}>
                  <button className='bg-transparent text-blue-500 hover:text-blue-600 border-2 border-blue-400 hover:border-blue-500 py-2 ring:border-none focus:outline-none' onClick={onClickBTN}>Login</button>
                </div>
          }
        </div>
      </div>
    </div>
  )
}
