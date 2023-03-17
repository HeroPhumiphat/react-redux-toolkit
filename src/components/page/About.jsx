import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='w-full mt-5 flex flex-col items-center space-y-2'>
      <p><span className='font-bold'>Make by:</span> HeroPhumiphat</p>
      <div className='flex items-center'>
          <p><span className='font-bold'>GitHub Profile:</span> </p>
          <Link to='https://github.com/HeroPhumiphat' className='flex space-x-2 items-center'><p className='ml-1'>HeroPhumiphat</p>
          <i className="text-2xl fa-brands fa-github"></i></Link>
      </div>
      <br />
      <p><span className='font-bold'>Create Product:</span> Vite.js</p>
      <p><span className='font-bold'>Javascript Framework:</span> React.js</p>
      <p><span className='font-bold'>StateManagementLibraries:</span> Redux-Toolkit</p>
      <p><span className='font-bold'>CSS Framework:</span> TailwindCSS</p>

      <Link to='www.pexels.com' className='flex items-center'>
        <span className='font-bold'>Image:</span>
        <p>&nbsp;pexels.com</p>
        <i className="fa-solid fa-image ml-2 text-xl"></i>
      </Link>
      <Link to='www.pexels.com' className='flex items-center'>
        <span className='font-bold'>Icons:</span>
        <p>&nbsp;fontawesome.com/icons</p>
        <i className="fa-solid fa-font-awesome text-xl ml-2"></i>
      </Link>
      <Link to='https://fonts.google.com/' className='flex items-center'>
        <span className='font-bold'>Font family:</span>
        <p>&nbsp;fonts.google.com/</p>
        <i className="fa-solid fa-font text-xl ml-2"></i>
      </Link>


    </div>
  )
}
