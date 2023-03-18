import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addConfirmAlert } from '../../slice/confirmSlice'
import { addDashEditUser } from '../../slice/dashEditUserSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import { removeUser } from '../../slice/userSlice'

export default function ManageUser() {
  const users = useSelector(state => state.users.value)
  const confirmSlice = useSelector(state => state.confirm.value)
  const dispatch = useDispatch()

  const [index, setIndex] = React.useState('')
  const [keyword, setKeyword] = React.useState('')

  let doc = []
  users.map(e => {
    if (e.quality !== 'ADMIN') {
      doc.push(e)
    }
  })

  React.useEffect(() => {
    if (confirmSlice?.state === 'ok' && confirmSlice?.alert === 'deleteUser') {
      let message = { alert: 'Warning', message: `You have deleted "${keyword}" email address.`}
      dispatch(addMessage(message))
      dispatch(removeUser(index))
      dispatch(addConfirmAlert(''))
      setIndex('')
      setKeyword('')
    }
  })

  const onClickEditUser = (user) => {
    dispatch(addDashEditUser(user))
  }

  const onClickDelUser = (key, email) => {
    setIndex(key)
    setKeyword(email)
    let doc = { state: '', alert: 'deleteUser', message: `Are you sure you want to delete the data? of ${email}?`}
    dispatch(addConfirmAlert(doc))
  }

  return (
    <div className='mt-5 px-2 sm:p-5 flex justify-center items-center z-50'>
      <div>
        <div className='flex justify-between space-x-4 w-full min-w-[350px]'>
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
                        <tr className='relative' key={+key}>
                          <th className='px-2 border-b text-sm'>{key + 1}</th>
                          <td className='text-center border-b pb-1 pt-3 px-2 text-sm'>
                            {
                              user?.name?.length > 12
                                ? <p>Name: {user.name.substr(0,12)}...</p>
                                : <p>Name: {user.name}</p>
                            }
                            {
                              user.email?.length > 12
                                ? <p>Email: {user.email.substr(0,12)}...</p>
                                : <p>Email: {user.email}</p>
                            }
                            {
                              user.password?.length > 12
                                ? <p>Password: {user.password.substr(0,12)}...</p>
                                : <p>Password: {user.password}</p>
                            }
                          </td>
                          <td className='mb-0 border-b px-2 text-center mt-2 pb-1 pt-2'>
                            <Link to='/dash/create-user' className='text-xs py-2 px-3 rounded-sm m-0.5 bg-amber-400 font-bold' onClick={() => onClickEditUser(user)}>Edit</Link>
                            <button className='text-xs py-1.5 px-3 mx-0.5 bg-red-400 font-bold mt-2 rounded-sm' onClick={() =>  onClickDelUser(key, user.email)}>Del</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
              </table>
              {
                doc.length === 0
                  ? <p className='w-full text-center text-neutral-400 my-5'>no information found</p>
                  : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
