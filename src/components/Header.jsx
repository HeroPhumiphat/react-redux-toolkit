import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    const dispatch = useDispatch()
    const modeDash = useSelector(state => state.modeDash.state)
    const userLogin = useSelector(state => state.userLogin.user)

    const menuList = React.useRef()
    const [stateMenuShow, setStateMenuShow] = React.useState(false)
    const [stateProflie, setStateProfile] = React.useState(false)

    let activeClassName = 'nav-active'
    
    React.useEffect(() => {
        window.addEventListener('resize', (event) => {
            if (event.target.innerWidth > 768) {
                setStateMenuShow(false)
            }
        })
        
        if (stateMenuShow) {
            menuList.current.classList.add('active')
        } else if (!stateMenuShow) {
            menuList.current.classList.remove('active')
        }
    })
    
    const onClickMenuShow = () => {
        stateMenuShow === false ? setStateMenuShow(true) : setStateMenuShow(false)
    }

    const onClickIcon = () => {
        stateProflie === false ? setStateProfile(true) : setStateProfile(false)
    }

    return (
        <div className='relative' style={{boxShadow: '1px 1px 5px #d2bd75'}}>
            <div className='w-full flex justify-between px-3 md:px-12 lg:px-16 py-2 items-center'>
                <div className='flex items-center'>
                    <div className='mr-10'>
                        {/* <Link to='/' className='text-3xl hover:text-white'><span className='text-neutral-800 font-medium px-0.5' style={{textShadow: '0px 0px 6px #d2bd75'}}>LOGO</span></Link> */}
                        <Link to='/' className='text-3xl'>LOGO</Link>
                    </div>
                    <div className='space-x-5 hidden md:block'>
                        <NavLink to='/' id='link-d' style={{'--j': 1}} className={({ isActive }) => isActive ? activeClassName : 'nav-link'} end>Home</NavLink>
                        <NavLink to='/about' id='link-d' style={{'--j': 2}} className={({ isActive }) => isActive ? activeClassName : 'nav-link'}>About</NavLink>
                        {
                            modeDash === true && <NavLink to='/' className='text-neutral-800 font-medium text-lg' style={{textShadow: '0px 0px 8px #d2bd75', '--j': 3}}>DashBoard</NavLink>
                        }
                        
                    </div>
                </div>
                <div>
                    <div className='menuShow block md:hidden' onClick={onClickMenuShow} ref={menuList}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <div className='mr-5'>
                            <NavLink to='/cart' id='link-d' style={{'--j': 4}} className={({ isActive }) => isActive ? activeClassName : 'nav-link'}>Cart</NavLink>
                        </div>
                        {
                            userLogin.length > 0
                            ?   <div className='flex items-center' onClick={onClickIcon}>
                                    <div className='relative bg-white w-9 h-9 rounded-full flex justify-center items-center mr-1 cursor-pointer'>
                                        <p className='text-neutral-700 font-medium text-lg'>{ userLogin[0].name.toString().toUpperCase().substr(0, 2) }</p>
                                    </div>
                                    <div className='cursor-pointer'>
                                        <i className={
                                            stateProflie === true
                                                ?   "fa-solid fa-caret-up"
                                                :   "fa-solid fa-caret-down"
                                            }></i>
                                    </div>
                                </div>
                            :   <div>
                                    <Link to='/' className='btnLogin relative px-5 py-1.5 rounded-full bg-neutral-800'>Login</Link>
                                </div>
                        }
                        {
                            stateProflie === true 
                                ? <div className='menuList absolute flex flex-col items-center top-20 right-3 h-50 bg-neutral-800 text-center py-5 px-8 rounded-md z-50' style={{ boxShadow: '0px 0px 6px #d2bd75'}}>
                                    <div id='link' className='relative bg-white w-12 h-12 rounded-full flex justify-center items-center mb-2' style={{'--i': 1}}>
                                        <p className='text-neutral-700 font-medium text-lg'>{ userLogin[0].name.toString().toUpperCase().substr(0, 2) }</p>
                                    </div>
                                    <p id='link' className='mb-1' style={{'--i': 2}}>{userLogin[0].name}</p>
                                    <p id='link' className='mb-2' style={{'--i': 3}}>{userLogin[0].email}</p>
                                    <Link to='/' id='link' className='text-white underline underline-offset-2 text-sm mb-1' style={{'--i': 4}}>Edit Profile</Link>
                                    
                                    <Link id='link' to='/' className='relative px-10 py-2 rounded-full bg-neutral-800 mt-4 mb-3 text-red-400' style={{'--i': 5, boxShadow: '0 0 6px rgba(255, 63, 63, 1)'}}>Logout</Link>
                                </div>
                                :   ''
                        }
                    </div>
                    {
                        stateMenuShow === true
                            ?   userLogin.length > 0
                                ?   <div className='menuList absolute flex flex-col items-center top-20 right-3 h-50 bg-neutral-800 text-center py-5 px-8 rounded-md z-50' style={{ boxShadow: '0px 0px 6px #d2bd75'}}>
                                        <div id='link' className='relative bg-white w-12 h-12 rounded-full flex justify-center items-center mb-1' style={{'--i': 1}}>
                                            <p className='text-neutral-700 font-medium text-lg'>{ userLogin[0].name.toString().toUpperCase().substr(0, 2) }</p>
                                        </div>
                                        <p id='link' className='mb-1 text-sm' style={{'--i': 2}}>{userLogin[0].name}</p>
                                        <p id='link' className='mb-2 text-sm' style={{'--i': 3}}>{userLogin[0].email}</p>
                                        <Link to='/' id='link' className='text-white underline underline-offset-2 text-sm mb-5' style={{'--i': 4}}>Edit Profile</Link>
                                        <NavLink id='link' to='/' className={({ isActive }) => isActive ? activeClassName : 'my-1'} end style={{'--i': 5}}>Home</NavLink>
                                        <NavLink id='link' to='/about' className={({ isActive }) => isActive ? activeClassName : 'my-1'} style={{'--i': 6}}>About</NavLink>
                                        {
                                            modeDash === true && <NavLink id='link' to='/' className='text-neutral-800 font-medium text-lg' style={{textShadow: '0px 0px 8px #d2bd75', '--i': 5}}>DashBoard</NavLink>
                                        }
                                        <NavLink id='link' to='/cart' className={({ isActive }) => isActive ? activeClassName : 'my-1'} style={{'--i': 7}}>Cart</NavLink>
                                        <Link id='link' to='/' className='relative px-10 py-2 rounded-full bg-neutral-800 mt-5 mb-3 text-red-400' style={{'--i': 5, boxShadow: '0 0 6px rgba(255, 63, 63, 1)'}}>Logout</Link>
                                    </div>
                                :   <div className='menuList absolute top-20 right-3 h-50 bg-neutral-800 text-center py-5 px-7 flex flex-col rounded-md z-50' style={{ boxShadow: '0px 0px 6px #d2bd75'}}>
                                        <NavLink id='link' to='/' className={({ isActive }) => isActive ? activeClassName : 'my-1'} end style={{'--i': 1}}>Home</NavLink>
                                        <NavLink id='link' to='/about' className={({ isActive }) => isActive ? activeClassName : 'my-1'} style={{'--i': 2}}>About</NavLink>
                                        {
                                            modeDash === true && <NavLink id='link' to='/' className='text-neutral-800 font-medium text-lg' style={{textShadow: '0px 0px 8px #d2bd75', '--i': 5}}>DashBoard</NavLink>
                                        }
                                        <NavLink id='link' to='/cart' className={({ isActive }) => isActive ? activeClassName : 'my-1'} style={{'--i': 3}}>Cart</NavLink>
                                        <Link id='link' to='/' className='btnLogin relative px-10 py-2 rounded-full bg-neutral-800 mt-5 mb-3' style={{'--i': 4}}>Login</Link>
                                    </div>
                            :   ''
                    }
                </div>
            </div>
        </div>
    )
}