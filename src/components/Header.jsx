import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { addMessage } from '../slice/messageAlertSlice'
import { addEditTrue } from '../slice/stateEditSlice'
import { stateLoginTrue } from '../slice/stateLoginSlice'
import { clearUserLogin } from '../slice/userLoginSlice'

export default function Header() {
  const userLogin = useSelector(state => state.userLogin.value[0])
  const carts = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

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
      menuShow.current.classList.add('-z-40')
      menuShow.current.classList.remove('z-40')
    }, 100)
  }

  const onClickBTN = () => {
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

  return (
    <div className='w-full bg-white py-2 px-4 z-40' style={{ boxShadow: '1px 1px 5px #e0e0e0' }}>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='logo'>
            <h1 className='logo my-1.5'>LOGO</h1>
          </div>
          <div className='flex justify-center w-20'>
            {
              userLogin?.quality === 'ADMIN' && <div className='relative left-3 h-full items-center cursor-pointer'>
                <div className=' bg-lime-200 px-4 hover:px-3.5 h-12 flex justify-center items-center rounded-full hover:border-2 border-green-300'>
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
                    ? <div className='prList absolute px-10 py-7 bg-neutral-300 rounded-md right-3 top-20 z-40 flex-col items-center  justify-center flex' ref={prList}>
                        <p>Hi!, <span className='font-bold'>{userLogin.name}</span></p>
                        <p  className=''>{userLogin.email}</p>
                        <button className='bg-transparent border-b-amber-100 border-t-amber-100 rounded-sm py-2 mt-3 hover:rounded-lg hover:border-lime-200 hover:border-1.5 w-10/12' onClick={onClickEditProfile}>edit profile</button>
                        <button className='bg-red-300 hover:bg-red-400 text-white border-none mt-4' onClick={onClickLogout}>Logout</button>
                      </div>
                    : ''
                }
              </div>
            : <div className='login flex items-center'>
                <button className='btn text-sm' onClick={onClickBTN}>Login</button>
              </div>
          }
        </div>
        <div className='flex space-x-4 md:hidden'>
          <div className='pr-4 border-r'>
            <Link to='/cart' className='font-bold'>
              <i class="fa-solid fa-cart-shopping mr-1"></i>
              Cart
              {
                productCart.length > 0
                  ? <span className='absolute w-1.5 h-1.5 rounded-full top-5 bg-red-400'></span>
                  : ''
              }
            </Link>
          </div>
          <div className='menulist cursor-pointer' ref={menulist} onClick={onClickMenuList}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='menuShow absolute px-10 py-7 bg-neutral-300 rounded-md right-3 top-20 flex-col items-center hidden' ref={menuShow}>
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
          <Link to='/product' className='menuL mb-1' style={{'--r': 2}} onClick={onClickLink}>Product</Link>
          <Link to='/about' className='menuL mb-3' style={{'--r': 3}} onClick={onClickLink}>About</Link>
          {
            userLogin?.name.length > 0
              ? <div className='flex items-center menuL' style={{'--r': 3.5}}>
                  <button className='text-sm text-red-200 bg-neutral-500 hover:bg-neutral-600 border-none py-2.5' onClick={onClickLogout} style={{boxShadow: '0px 0px 5px rgba(255, 0, 0, .7)'}}>Logout</button>
                </div>
              : <div className='flex items-center menuL' style={{'--r': 3.5}}>
                  <button className='btn text-sm' onClick={onClickBTN}>Login</button>
                </div>
          }
        </div>
      </div>
    </div>
  )
}
