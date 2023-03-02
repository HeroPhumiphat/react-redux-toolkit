import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { stateFalse, stateTrue } from '../Slice/dashStateSlice'
import { removeUserLogin } from '../Slice/loginSlice'
import { addUrl } from '../Slice/urlSlice'

import Dash from './dash/Dash'

export default function Header() {
    const navigate = useNavigate()
    const url = useSelector((state) => state.url.path)
    const st = useSelector((state) => state.dashState.value)
    const userLogin = useSelector((state) => state.login.value[0])
    const dispath = useDispatch()

    let regEx = /^\/dash/
    let newUrl = window.location.pathname
    let [state, setState] = React.useState(regEx.test(newUrl))
    let [boxProfile, setBoxProfile] = React.useState('off')
    const list = React.useRef()
    const menu = React.useRef()
    const dash = React.useRef()
    const nav = document.getElementById('navHeader')
    
    let activeClassName = 'nav-active'
    
    React.useEffect(() => {
        if (regEx.test(url)) {
            setState(true)
        }
        if (state) {
            dispath(stateTrue())
            dash.current.classList.remove('hidden')
        } else if (!state) {
            dispath(stateFalse())
            dash.current.classList.add('hidden')
        }
        onClickNav()
    })

    const onClickNav = function () {
        newUrl = window.location.pathname
        setState(regEx.test(newUrl)) 
    }

    let i = 0
    const onClickListmenu = () => {
        i += 1

        if (i % 2 == 0) {
            list.current.classList.add('E')
            list.current.classList.remove('X')
            menu.current.classList.add('hidden')
        } else {
            list.current.classList.add('X')
            list.current.classList.remove('E')
            menu.current.classList.remove('hidden')
        }
    }

    const onClickLogout = function () {
        navigate('/')
        dispath(removeUserLogin())
        setState(false)
        dispath(addUrl('/'))
    }

    return (
        <div>
            <nav className='fixed px-5 sm:px-10 xl:px-20 py-0 md:py-5 flex justify-between items-center w-full bg-neutral-900 z-50' style={{boxShadow: '0px 1px 2px rgb(130, 0, 0)'}} onClick={onClickNav}>
                <div className='flex items-center'>
                    <Link to='/' className='text-white mr-12 hover:text-red-500 text-2xl'>L<span className='text-red-500 line-through decoration-4 decoration-solid decoration-neutral-900'>O</span><span className='text-white'>G</span>O</Link>
                    <div className='space-x-5 hidden md:block'>
                        <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : 'nav-link'} end>Home</NavLink>
                        <NavLink to='/product' className={({ isActive }) => isActive ? activeClassName : 'nav-link'}>Products</NavLink>
                        {
                            userLogin?.quality === 'ADMIN'
                            ?   <NavLink to='/dash/user/menage' className={({ isActive }) => state ? activeClassName : 'nav-link'}>Menage</NavLink>
                            :   ''
                        }
                    </div>
                </div>
                {
                    userLogin?.name.length > 0 
                    ?   <div className='relative md:flex items-center hidden'>
                            <p className='absolute text-right right-16 text-base font-medium w-96'>{userLogin?.name}</p>
                            <div className='absolute w-10 h-10 bg-white rounded-full -left-12 flex justify-center items-center'>
                                <p className='text-black font-medium text-lg'>{userLogin?.name.toString().toUpperCase().substr(0,2)}</p>
                            </div>
                            <i className="fa-solid fa-caret-down text-lg cursor-pointer" onClick={() => boxProfile === 'off' ? setBoxProfile('on') : setBoxProfile('off')}></i>
                            {
                                boxProfile === 'on'
                                ?   <div className='absolute w-52 h-40 bg-neutral-900 top-16 right-0 rounded-xl flex flex-col items-center py-3'>
                                        <p className='text-sm text-gray-300' style={{letterSpacing: 0.1}}>{userLogin?.name}</p>
                                        <p className='text-sm text-gray-300' style={{letterSpacing: 0.1}}>{userLogin?.email}</p>
                                        <hr className='bg-white text-white border border-b-0 mt-3 w-9/12' />
                                        <Link className='text-sm text-amber-500 hover:text-amber-600 mt-4'>Edit Profile</Link>
                                        <button className='absolute bottom-5 text-white text-sm hover:text-white bg-red-500 hover:bg-red-600 px-7 py-2 -my-2 rounded-full' onClick={onClickLogout}>SignOut</button>
                                    </div>
                                :   ''
                            }
                            
                           
                        </div>
                    :   <div className='space-x-5 hidden md:block'>
                            <Link to='/login' className='text-white text-sm hover:text-red-500'>SignIn</Link>
                            <Link to='/register' className='text-white hover:text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-full'>SignUp</Link>
                        </div>
                }
                
                <div className='relative listmenu w-9 h-8 my-5 md:hidden flex flex-col justify-between cursor-pointer E' onClick={onClickListmenu} ref={list}>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
                <div className='hidden lm md:hidden absolute h-px right-0 w-80' style={{minHeight: '350px', top: 71}} ref={menu}>
                    <div className='bg-neutral-900 flex flex-col'>
                        <div className='w-9/12 bg-red-500 h-0.5 mx-auto'></div>
                        
                        <div className='flex flex-col items-center my-10'>
                            <Link to='/login' className='text-white hover:text-red-500 text-base'>เข้าสู่ระบบ</Link>
                            <Link to='/register' className='text-white hover:text-white bg-red-500 hover:bg-red-600 py-2 px-5 rounded-3xl mt-3 text-lg'>ลงทะเบียน</Link>
                        </div>

                        <div className='flex flex-col items-center mt-4 space-y-3'>
                            <NavLink to='/' className={({ isActive }) => isActive ? activeClassName : 'nav-link'} end>หน้าหลัก</NavLink>
                            <NavLink to='/product' className={({ isActive }) => isActive ? activeClassName : 'nav-link'}>สินค้า</NavLink>
                            <NavLink to='/dash/product/menage' className={({ isActive }) => state ? activeClassName : 'nav-link'}>Menage</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='fixed top-0 left-0' ref={dash}>
                <Dash />
            </div>
        </div>
    )
}