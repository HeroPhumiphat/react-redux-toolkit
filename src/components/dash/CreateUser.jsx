import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addDashEditUser } from '../../slice/dashEditUserSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import { addUser, editUser } from '../../slice/userSlice'

export default function CreateUser() {
  const navigate = useNavigate()

  const dashEditUser = useSelector(state => state.dashEditUser.value)
  const dispatch = useDispatch()

  const form = React.useRef()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const [n, setN] = React.useState('')
  const [e, setE] = React.useState('')
  const [p, setP] = React.useState('')

  React.useEffect(() => {
    if (dashEditUser !== '') {
      setN(dashEditUser.name)
      setE(dashEditUser.email)
      setP(dashEditUser.password)
    }
  })

  const onSubmitForm = (event) => {
    event.preventDefault()


    let message


    if (dashEditUser.name === '') {
      let user = { name, email, password, quality: 'USER'}
      dispatch(addUser(user))

      message = { alert: 'Success', message: `You have successfully as a new member email: "${user.email}".`}
    }
    else {
      if (name === '') {
        setName(dashEditUser.name)
      }
      if (email === '') {
        setName(dashEditUser.email)
      }
      if (password === '') {
        setPassword(dashEditUser.password)
      }

      let user = { name, email, password, quality: 'USER'}
      dispatch(editUser([dashEditUser.email, dashEditUser.password, user]))

      message = { alert: 'Success', message: `You have successfully edited the information of the user, email address "${dashEditUser.email}".`}
    }
    dispatch(addMessage(message))
    navigate('/dash/manage-user')
  }

  const onClickClose = () => {
    navigate('/dash/manage-user')
    dispatch(addDashEditUser(''))
  }

  return (
    <div className='px-5 py-3 flex justify-center items-center w-full pt-12'>
      <div className='w-[350px] pl-3'>
        <div className='relative'>
          <p className='text-lg font-bold underline underline-offset-8 mb-7'>Add new User.</p>
          <button className='absolute right-0 -top-0.5 bg-red-300 hover:bg-red-400 border-none text-white py-2.5 text-xs px-3.5 rounded-md' onClick={onClickClose}>X</button>
        </div>
        <form ref={form} onSubmit={onSubmitForm}>
          <div className='flex flex-col text-sm'>
            <label htmlFor="name" className='text-xs font-bold'>Username : </label>
            <input type="text" id='name' className='rounded-md mt-1 mb-3' onChange={(e) => setName(e.target.value)} defaultValue={n} placeholder='Please enter Username?' />
            <label htmlFor="email" className='text-xs font-bold'>Email : </label>
            <input type="email" id='email' className='rounded-md mt-1 mb-3' onChange={(e) => setEmail(e.target.value)} defaultValue
            ={e} placeholder='Please enter Email?' />
            <label htmlFor="password" className='text-xs font-bold'>Password : </label>
            <input type="text" id='password' className='rounded-md mt-1 mb-3' onChange={(e) => setPassword(e.target.value)} placeholder='Please enter Password?' defaultValue={p} />
            {
              dashEditUser?.name.length > 0
                ? <button className='tracking-wide font-bold bg-amber-400 hover:bg-amber-500 text-white mt-3 py-3 rounded-md'>Confirm</button>
                : <button className='tracking-wide font-bold bg-blue-500 hover:bg-blue-600 text-white mt-3 py-3 rounded-md'>Create</button>
            }
          </div>
        </form>
      </div>
    </div>
  )
}
