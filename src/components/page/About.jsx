import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='w-full mt-5 flex flex-col items-center space-y-2'>
      <p><span className='font-bold'>Make by:</span> HeroPhumiphat</p>
      <p><span className='font-bold'>Create Product:</span> Vite.js</p>
      <p><span className='font-bold'>Javascript Framework:</span> React.js</p>
      <p><span className='font-bold'>Menage Store:</span> redux-toolkit</p>
      <p><span className='font-bold'>CSS Framework:</span> TailwindCSS</p>

      <br />
      <ul>
        <li className='flex items-center space-x-2'>
          <p><span className='font-bold'>GitHub Profile:</span> </p>
          <Link to='https://github.com/HeroPhumiphat' className='flex space-x-2 items-center'><p>HeroPhumiphat</p>
          <i className="text-2xl fa-brands fa-github"></i></Link>
        </li>
      </ul>

    </div>
  )
}
