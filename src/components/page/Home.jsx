import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1 className='mb-5'>Home</h1>
      <Link to='/dash/manage-user' className='bg-red-200 py-2 px-4 rounded-sm'>ManageUser</Link>
    </div>
  )
}
