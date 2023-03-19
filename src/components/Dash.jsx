import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setDashStateFalse } from '../slice/dashStateSlice'

export default function Dash() {
  const dispatch = useDispatch()

  const navUser = React.useRef()
  const navProduct = React.useRef()

  return (
    <div className='w-72 h-full bg-neutral-700'>
      <div className='absolute -right-5 top-8 bg-neutral-700 w-7 h-16 flex justify-center items-center rounded-r-md cursor-pointer' onClick={() => dispatch(setDashStateFalse())}>
        <i className="fa-solid fa-caret-left text-white text-2xl"></i>
      </div>
      <div className='text-white w-full'>
        <div className='flex space-x-2 w-full pl-8 pt-12'>
          <i className="fa-solid fa-chart-pie text-3xl"></i>
          <p className='text-3xl'>DashBoard</p>
        </div>
        <div className='text-sm pt-10 pl-16 -ml-3'>
          <NavLink to='/dash/manage-user' className={({ isActive }) => isActive ? navUser.current?.classList?.remove('hidden') :navUser.current?.classList?.add('hidden')}>
            <p className='text-lg font-normal mb-3'>
              <i className="mr-2 fa-solid fa-user-gear text-lg"></i>
              Manage Users
            </p>
            <div className='absolute right-4 -mt-7 bg-lime-300 w-7 h-1.5 rounded-full hidden' ref={navUser}></div>
          </NavLink>
          <NavLink to='/dash/manage-product' className={({ isActive }) => isActive ? navProduct.current?.classList?.remove('hidden') : navProduct.current?.classList?.add('hidden')}>
            <p className='text-lg font-normal'>
              <i className="mr-3 fa-sharp fa-solid fa-bars-progress text-lg"></i>
              Manage Products
            </p>
            <div className='absolute right-4 -mt-4 bg-lime-300 w-7 h-1.5 rounded-full' ref={navProduct}></div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
