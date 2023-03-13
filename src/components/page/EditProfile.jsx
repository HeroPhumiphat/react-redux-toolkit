import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../slice/messageAlertSlice'
import { addEditFalse } from '../../slice/stateEditSlice'
import { addUserLogin, clearUserLogin } from '../../slice/userLoginSlice'
import { editUser } from '../../slice/userSlice'

export default function EditProfile() {
  const userLogin = useSelector(state => state.userLogin.value[0])
  const dispatch = useDispatch()

  const form = React.useRef()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [quality, setQuaity] = React.useState('')

  const onClickSetstateLoginFalse = () => {
    dispatch(addEditFalse())
  }

  React.useEffect(() => {
    if (name || email || password) {
      if (name === '') {
        setName(userLogin.name)
      }
      if (email === '') {
        setEmail(userLogin.email)
      }
      if (password === '') {
        setPassword(userLogin.password)
      }
      if (quality === '') {
        setQuaity(userLogin.quality)
      }
    }
  })

  const onSubmitForm = (event) => {
    event.preventDefault()

    if (name === '' && email === '' && password === '') {
      let m = { alert: 'Warning', message: 'You haven\'t changed any information.' }
      dispatch(addMessage(m))
    } else {
      let newInformation = { name, email, password, quality }
      // console.log(newInformation)
      let userEdit = [ userLogin?.email, userLogin?.password, newInformation ]

      let m = { alert: 'Success', message: 'You have successfully corrected the information.' }
      console.log(userEdit)
      dispatch(addMessage(m))
      dispatch(editUser(userEdit))
      dispatch(addEditFalse())
      dispatch(clearUserLogin())
      dispatch(addUserLogin(newInformation))
    }
  }

  return (
    <div className='relative rounded-md p-7 pb-12 bg-white px-10'>
      <button className='absolute right-3 top-3 text-white bg-red-300 hover:bg-red-400' onClick={onClickSetstateLoginFalse}>
        <p className='hidden md:block'>Close</p>
        <p className='block md:hidden'>X</p>
      </button>

      <div className='flex items-start md:space-x-6 space-x-2'>
        <h1 className='text-2xl mb-7 underline underline-offset-4'>Edit User: {userLogin?.name}</h1>
      </div>
      <div className='flex items-center'>
        <form ref={form} onSubmit={onSubmitForm}>
          <div className='flex flex-col mb-3'>
            <label htmlFor="name">Username : </label>
            <input type="text" id='name' name='name' placeholder='Please enter your Username' className='w-72 md:w-96 rounded-md' onChange={e => setName(e.target.value)} defaultValue={userLogin?.name} />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="email">Email : </label>
            <input type="email" id='email' name='email' placeholder='email@example.com' className='w-72 md:w-96 rounded-md' onChange={e => setEmail(e.target.value)} maxLength='30' defaultValue={userLogin?.email} />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="password">Password : </label>
            <input type="password" id='password' name='password' placeholder='Please enter your password' className='w-72 md:w-96 rounded-md mb-1' onChange={e => setPassword(e.target.value)} defaultValue={userLogin?.password} />
          </div>
          <div className=''>
            <button className='w-72 md:w-96 rounded-md mt-7 bg-amber-400 hover:bg-amber-500 text-white text-lg'>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  )
}
