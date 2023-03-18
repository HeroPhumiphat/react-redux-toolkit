import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Dash() {
  return (
    <div className='w-64 h-full bg-neutral-700'>
      <div className='text-white w-full'>
        <div className='flex items-center space-x-2 w-full justify-center pt-12'>
          <i className="fa-solid fa-chart-pie text-3xl"></i>
          <p className='text-3xl'>DashBoard</p>
        </div>
        <div className='text-sm pt-10 pl-12 space-y-3'>
          <div>
            <Link to='/dash/manage-user' className='text-lg flex items-center space-x-1.5'>
              <i className="fa-solid fa-user-gear text-lg"></i>
              <p>Manage Users</p>
            </Link>
            <ul className='mt-1 ml-5 w-36 text-start'>
            </ul>
          </div>
          <div className='text-lg flex items-center space-x-2.5'>
            <i className="fa-sharp fa-solid fa-bars-progress text-lg"></i>
            <p>Manage Products</p>
          </div>
        </div>
      </div>
    </div>
  )
}
