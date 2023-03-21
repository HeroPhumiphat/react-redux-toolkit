import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addLogin, addRegister } from '../../slice/checkLoginSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import { stateLoginFalse } from '../../slice/stateLoginSlice'
import { addUserLogin, clearUserLogin } from '../../slice/userLoginSlice'

export default function Login() {
  const navigate = useNavigate()

  const users = useSelector(state => state.users.value)
  const dispatch = useDispatch()
  const form = React.useRef()
  const checkSelect = React.useRef()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [selectEmail, setSelectEmail] = React.useState('')
  const [selectPassword, setSelectPassword] = React.useState('')

  const onChangeSelect = (event) => {
    if (event.target.value == 'inputValue') {
      setSelectEmail('')
      setSelectPassword('')
    } else {
      setEmail(users[event.target.value].email)
      setPassword(users[event.target.value].password)
      setSelectEmail(users[event.target.value].email)
      setSelectPassword(users[event.target.value].password)
    }
  }

  const onClickSetstateLoginFalse = () => {
    dispatch(stateLoginFalse())
    dispatch(addLogin())
  }

  const onClickRegister = () => {
    dispatch(addRegister())
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    let message
    let user = []
    users.map((e, i) => {
      if(e.email === email && e.password === password) {
        user.push(e)
      }
    })
    if (user.length === 0) {
      message = { alert: 'Error', message:'Error, email or password is incorrect.'}
      return dispatch(addMessage(message))
    }

    if (user[0].quality === 'ADMIN') {
      navigate('/dash/manage-user')
    }

    dispatch(clearUserLogin())
    dispatch(addUserLogin(...user))
    message = { alert: 'Success', message:`${user[0].name}, You have successfully logged in.`}
    dispatch(stateLoginFalse())
    dispatch(addMessage(message))
    user = []

    setEmail('')
    setPassword('')
    setSelectEmail('')
    setSelectPassword('')
    checkSelect.current.value = 'inputValue'
  }

  return (
    <div className='relative rounded-md p-7 px-10 pb-12 bg-white flex md:auto z-50'>
      <button className='absolute right-3 top-3 text-white bg-red-300 hover:bg-red-400' onClick={onClickSetstateLoginFalse}>
        <p className='hidden md:block'>Close</p>
        <p className='block md:hidden'>X</p>
      </button>
      <div className='flex'>
        <div>
          <div className='flex items-start space-x-2 md:space-x-6'>
            <h1 className='text-4xl mb-7 underline underline-offset-4'>Login</h1>
            <button className='border-2 border-amber-400 hover:border-amber-500 bg-transparent text-amber-500 text-xs md:text-sm py-2.5' onClick={onClickRegister}>Register Page</button>
          </div>
          <div className=''>
            <form onSubmit={onSubmitForm} ref={form}>
              <div className='flex flex-col mb-3'>
                <label htmlFor="email">Email : </label>
                <div className='flex items-center'>
                  <input type="email" id='email' name='email' placeholder='email@example.com' className='w-48 md:w-72 rounded-l-md' onChange={(e) => setEmail(e.target.value)} defaultValue={selectEmail}  maxLength='30' required />
                  <select className='bg-neutral-200 py-3 pl-1 md:pl-2 pr-2.5 md:pr-3 rounded-r-md text-sm cursor-pointer' ref={checkSelect} onChange={onChangeSelect} style={{boxShadow: '0px 0px 3px lime'}}>
                    <option value="inputValue">User-Test</option>
                    {
                      users.map((user, key) => (
                        <option value={key} key={+key}>{user.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              <div className='flex flex-col mb-3 w-72 md:w-96'>
                <label htmlFor="password">Password : </label>
                <input type="password" id='password' name='password' onChange={e => setPassword(e.target.value)} defaultValue={selectPassword} placeholder='*************' className='rounded-md' required />
              </div>
              <div className=''>
                <button className='w-72 md:w-96 rounded-md mt-7 bg-blue-400 hover:bg-blue-500 text-white text-lg'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='relative line mt-20 ml-12 hidden md:block'></div>
      <div className='relative flex-col items-center text-2xl text-blue-400 hidden md:flex mt-20 ml-8'>
        <div className='flex flex-col items-center mb-7 cursor-pointer'>
          <i className="fa-brands fa-google"></i>
          <p className='text-sm'>Google</p>
        </div>
        <div className='flex flex-col items-center mb-7 cursor-pointer'>
          <i className="fa-brands fa-facebook"></i>
          <p className='text-sm'>Facebook</p>
        </div>
        <div className='flex flex-col items-center mb-7 cursor-pointer'>
          <i className="fa-brands fa-github"></i>
          <p className='text-sm'>Github</p>
        </div>
      </div>
    </div>
  )
}
