import React from 'react'
import { NavLink } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { upValue, downValue } from '../../Slice/dashSlice'

import './product/style.css'

export default function Dash() {
    const regExProduct = /^\/dash\/product/
    const regExUser = /^\/dash\/user/
    const newUrl = window.location.pathname

    const dash = useSelector((state) => state.dash.value)
    const dispath = useDispatch()
    
    const [stateList, setStateList] = React.useState("fa-solid fa-caret-left")
    const [height, setHeight] = React.useState(window.innerHeight)
    const l1 = React.useRef()
    const dh = React.useRef()
    const textDh = React.useRef()
    const textDh2 = React.useRef()
    const textDh3 = React.useRef()
    const textDh2list = React.useRef()
    const textDh3list = React.useRef()
    const stateProduct = React.useRef()
    const stateUser = React.useRef()

    const dashActiveGreen = 'dash-active-green'
    let bodyWidth = window.innerWidth
    
    React.useEffect(() => {
        window.addEventListener('load', () => {
            if (bodyWidth < 768) {
                setStateList("fa-solid fa-caret-right")
                dispath(upValue())
            } else if (bodyWidth >= 768) {
                setStateList("fa-solid fa-caret-left")
                dispath(downValue())
            }
        })
        window.addEventListener('resize', () => {
            setHeight(window.innerHeight)
            bodyWidth = window.innerWidth
            if (bodyWidth < 768 && stateList === 'fa-solid fa-caret-left') {
                onClickMenu()
            } else if (bodyWidth >= 768 && stateList === 'fa-solid fa-caret-right') {
                onClickMenu()
            }
        })
        if (regExUser.test(newUrl) && dash === 'w-20') {
            stateUser.current.classList.remove('hidden')
        } else {
            stateUser.current.classList.add('hidden')
        }
        if (regExProduct.test(newUrl) && dash === 'w-20') {
            stateProduct.current.classList.remove('hidden')
        } else {
            stateProduct.current.classList.add('hidden')
        }
    })
    
    const onClickMenu = function (next) {
        try {
            if (stateList === 'fa-solid fa-caret-right') {
                setStateList("fa-solid fa-caret-left")
                dh.current.classList.add('w-60')
                dh.current.classList?.remove('w-20')
                textDh.current.classList?.remove('hidden')
                textDh2.current.classList?.remove('hidden')
                textDh3.current.classList?.remove('hidden')
                textDh2list.current.classList?.remove('hidden')
                textDh3list.current.classList?.remove('hidden')
                textDh.current.classList.add('w-9')
                textDh.current.classList?.remove('w-40')
                dispath(downValue())
            } else if (stateList === 'fa-solid fa-caret-left') {
                setStateList("fa-solid fa-caret-right")
                dh.current.classList.add('w-20')
                dh.current.classList.remove('w-60')
                textDh.current.classList.add('w-40')
                textDh.current.classList.remove('w-9')
                textDh.current.classList.add('hidden')
                textDh2.current.classList.add('hidden')
                textDh3.current.classList.add('hidden')
                textDh2list.current.classList.add('hidden')
                textDh3list.current.classList.add('hidden')
                dispath(upValue())
            }
        } catch (error) {
            next(error)
        }
        
    }

    return (
        <div className={ bodyWidth < 768 
            ? 'fixed mt-16 md:relative bg-neutral-900 py-10 w-20 flex flex-col items-start z-50 pl-5'
            : 'fixed mt-16 md:relative bg-neutral-900 py-10 w-60 flex flex-col items-start z-50 pl-5'
        } style={{height:`${height - 65}px`}} ref={dh}>
            <div className='absolute bg-neutral-900 w-6 h-10 rounded-sm flex justify-center items-center cursor-pointer' style={{right: -12}} onClick={onClickMenu}> 
                <i className={stateList}></i>
            </div>
            <div className='flex items-center mb-16'>
                <i className="fa-solid fa-chart-pie text-3xl"></i>
                <h1 className='text-3xl text-center'>
                    <span className={bodyWidth < 768 
                ? 'pl-2 hidden'
                : 'pl-2'} ref={textDh}>Dashboard</span>
                </h1>
            </div>
            <div className='mb-7'>
                <div className='flex items-center space-x-2 mb-3 pl-2'>
                    <i className="fa-solid fa-user-gear text-xl"></i>
                    <p className={bodyWidth < 768
                        ? 'text-xl hidden'
                    : 'text-xl'}
                    ref={textDh3}>
                        Users
                    </p>
                    <div className='relative w-2 h-2 bg-green-500 rounded-full' ref={stateUser}></div>
                </div>
                <ul className={window.innerWidth < 768 
                    ? 'space-y-2 pl-10 hidden'
                    : 'space-y-2 pl-10'}
                ref={textDh3list}>
                    <li>
                        <NavLink to='/dash/user/menage' className={({ isActive }) => isActive ? dashActiveGreen : 'dash-link'}>
                            <i className="fa-solid fa-address-card mr-2"></i>
                            <p className='text-sm'>Users List</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dash/user/create' className={({ isActive }) => isActive ? dashActiveGreen : 'dash-link'}>
                            <i className="fa-solid fa-plus mr-2"></i>
                            <p className='text-sm'>Add User</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <div className='flex items-center space-x-2 mb-3 pl-2'>
                    <i className="fa-sharp fa-solid fa-bars-progress text-2xl"></i>
                    <p className={bodyWidth < 768
                        ? 'text-xl hidden'
                        : 'text-xl'}
                    ref={textDh2}>
                        Products
                    </p>
                    <div className='relative w-2 h-2 bg-green-500 rounded-full' ref={stateProduct}></div>
                </div>
                <ul className={bodyWidth < 768 
                    ? 'space-y-2 pl-10 hidden'
                    : 'space-y-2 pl-10'} 
                ref={textDh2list}>
                    <li>
                        <NavLink to='/dash/product/menage' className={({ isActive }) => isActive ? dashActiveGreen : 'dash-link'}>
                            <i className="fa-solid fa-money-check mr-2"></i>
                            <p className='text-sm'>Products List</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dash/product/create' className={({ isActive }) => isActive ? dashActiveGreen : 'dash-link'}>
                            <i className="fa-solid fa-plus mr-2"></i>
                            <p className='text-sm'>Add Product</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dash/product/edit' className={({ isActive }) => isActive ? dashActiveGreen : 'dash-link'}>
                            <i className="fa-solid fa-pen-to-square mr-2"></i>
                            <p className='text-sm'>Edit Products</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dash/product/delete' className={({ isActive }) => isActive ? dashActiveGreen : 'dash-link'}>
                            <i className="fa-solid fa-trash mr-2"></i>
                            <p className='text-sm'>Delete Products</p>
                        </NavLink>
                    </li>                
                </ul>
            </div>
        </div>
    )
}