import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addDashEditUser } from '../../slice/dashEditUserSlice'
import { removeUser } from '../../slice/userSlice'

export default function ManageUser() {
  const users = useSelector(state => state.users.value)
  const dispatch = useDispatch()

  let doc = []
  users.map(e => {
    if (e.quality !== 'ADMIN') {
      doc.push(e)
    }
  })

  const onClickEditUser = (user) => {
    dispatch(addDashEditUser(user))
  }

  const onClickDelUser = (key) => {
    dispatch(removeUser(key))
  }

  return (
    <div className='mt-5 p-5 flex justify-center items-center'>
      <div>
        <div className='flex justify-between space-x-4 w-full'>
          <p className='text-2xl underline underline-offset-8'>Manage User</p>
          <Link to='/dash/create-user' onClick={() => {
            dispatch(addDashEditUser({ name: '', email: '', password: ''}))
          }} className='bg-blue-500 text-white text-xs md:text-sm py-2 px-3 md:px-7 rounded-sm font-bold'>Add new User</Link>
        </div>
        <div className='flex flex-wrap'>
          <div className='mt-3 mr-0 lg:mr-12'>
            <div className='mt-3'>
              <p><span className='font-bold w-12 pr-2'>All Users: </span>&nbsp;{doc.length}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-neutral-400 mb-2'>Information table list Users.</p>
              <table className='hidden md:block'>
                <thead>
                  <tr className='uppercase text-xs'>
                    <th className='px-2'>count</th>
                    <th className='px-2 text-start'>username</th>
                    <th className='px-2 text-start'>email</th>
                    <th className='px-2 text-start'>password</th>
                    <th className='px-2'>action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    doc.map((user, key) => (
                      <tr key={+key}>
                        <th className='py-2 border-b px-2 text-center'>{key + 1}</th>
                        <td className='py-2 border-b px-2 text-start'>{user.name}</td>
                        <td className='py-2 border-b px-2 text-start'>{user.email}</td>
                        <td className='py-2 border-b px-2 text-start'>{user.password}</td>
                        <td className='py-2 border-b px-2 text-center'>
                          <Link to='/dash/create-user' className='text-xs py-2 px-3 rounded-sm mx-0.5 bg-amber-400 font-bold' onClick={() => onClickEditUser(user)}>Edit</Link>
                          <button className='text-xs py-1.5 mx-0.5 bg-red-400 font-bold rounded-sm' onClick={() => onClickDelUser(key)}>Del</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <table className='md:hidden'>
                  <thead>
                    <tr className='uppercase text-xs'>
                      <th className='px-1'>count</th>
                      <th className=''>Information</th>
                      <th className='px-0 text-center'>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      doc.map((user, key) => (
                        <tr key={+key}>
                          <th className='px-1 border-b text-xs'>{key + 1}</th>
                          <td className='text-center border-b pb-1 pt-3 text-xs'>
                            <p>Username: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Password: {user.password}</p>
                          </td>
                          <td className=' border-b px-1 py-1 text-center flex flex-col'>
                            <Link to='/dash/create-user' className='text-xs py-2 px-3 rounded-sm m-0.5 bg-amber-400 font-bold' onClick={() => onClickEditUser(user)}>Edit</Link>
                            <button className='text-xs py-1.5 px-3 mx-0.5 bg-red-400 font-bold rounded-sm' onClick={() => onClickDelUser(key)}>Del</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
