import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addConfirmAlert } from '../../slice/confirmSlice'
import { addDashEditUser } from '../../slice/dashEditUserSlice'
import { removeUser } from '../../slice/userSlice'

export default function ManageUser() {
  const users = useSelector(state => state.users.value)
  const confirmSlice = useSelector(state => state.confirm.value)
  const dispatch = useDispatch()

  const [index, setIndex] = React.useState('')

  let doc = []
  users.map(e => {
    if (e.quality !== 'ADMIN') {
      doc.push(e)
    }
  })

  React.useEffect(() => {
    if (confirmSlice?.state === 'ok' && confirmSlice?.alert === 'deleteUser') {
      dispatch(removeUser(index))
      dispatch(addConfirmAlert(''))
      setIndex('')
    }
  })

  const onClickEditUser = (user) => {
    dispatch(addDashEditUser(user))
  }

  const onClickDelUser = (key, email) => {
    setIndex(key)
    let doc = { state: '', alert: 'deleteUser', message: `Are you sure you want to delete the data? of ${email}?`}
    dispatch(addConfirmAlert(doc))
  }

  return (
    <div className='mt-5 px-2 sm:p-5 flex justify-center items-center'>
      <div>
        <div className='flex justify-between space-x-4 w-full'>
          <p className='text-2xl underline underline-offset-8'>Manage User</p>
          <Link to='/dash/create-user' onClick={() => {
            dispatch(addDashEditUser({ name: '', email: '', password: ''}))
          }} className='bg-blue-500 text-white text-xs sm:text-sm py-2 px-3 sm:px-7 rounded-sm font-bold'>Add new User</Link>
        </div>
        <div className='flex flex-wrap'>
          <div className='mt-3 mr-0 lg:mr-12'>
            <div className='mt-3'>
              <p><span className='font-bold w-12 pr-2'>All Users: </span>&nbsp;{doc.length}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-neutral-400 mb-2'>Information table list Users.</p>
              <table className='hidden sm:block'>
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
                          <button className='text-xs py-1.5 mx-0.5 bg-red-400 font-bold rounded-sm' onClick={() =>  onClickDelUser(key, user.email)}>Del</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <table className='sm:hidden'>
                  <thead>
                    <tr className='uppercase text-xs'>
                      <th className='px-2'>count</th>
                      <th className='px-2'>Information</th>
                      <th className='px-2 text-center'>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      doc.map((user, key) => (
                        <tr key={+key}>
                          <th className='px-2 border-b text-sm'>{key + 1}</th>
                          <td className='text-center border-b pb-1 pt-3 px-2 text-sm'>
                            <p>Username: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Password: {user.password}</p>
                          </td>
                          <td className=' border-b px-2 text-center flex flex-col mt-2 pb-1'>
                            <Link to='/dash/create-user' className='text-xs py-2 px-3 rounded-sm m-0.5 bg-amber-400 font-bold' onClick={() => onClickEditUser(user)}>Edit</Link>
                            <button className='text-xs py-1.5 px-3 mx-0.5 bg-red-400 font-bold rounded-sm' onClick={() =>  onClickDelUser(key, user.email)}>Del</button>
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
