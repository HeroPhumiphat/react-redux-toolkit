import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setDashStateFalse } from '../slice/dashStateSlice'

export default function Dash() {
  const dispatch = useDispatch()

  return (
    <div className='w-64 h-full bg-neutral-700'>
      <div className='absolute -right-5 top-8 bg-neutral-700 w-7 h-16 flex justify-center items-center rounded-r-md cursor-pointer' onClick={() => dispatch(setDashStateFalse())}>
        <i class="fa-solid fa-caret-left text-white text-2xl"></i>
      </div>
      <div className='text-white w-full'>
        <div className='flex items-center space-x-2 w-full justify-center pt-12'>
          <i className="fa-solid fa-chart-pie text-3xl"></i>
          <p className='text-3xl'>DashBoard</p>
        </div>
        <div className='text-sm pt-10 pl-12'>
          <NavLink to='/dash/manage-user' className={({ isActive }) => isActive ? 'dashLink active' : 'dashLink'}>
            <p className='text-lg font-normal mb-3'>
              <i className="mr-2 fa-solid fa-user-gear text-lg"></i>
              Manage Users
            </p>
          </NavLink>
          <NavLink to='/dash/manage-product' className={({ isActive }) => isActive ? 'dashLink active' : 'dashLink'}>
            <p className='text-lg font-normal'>
              <i className="mr-3 fa-sharp fa-solid fa-bars-progress text-lg"></i>
              Manage Products
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
