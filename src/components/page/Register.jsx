import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addLogin } from '../../slice/checkLoginSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import { stateLoginFalse } from '../../slice/stateLoginSlice'
import { addUser } from '../../slice/userSlice'

export default function Register() {
  const dispatch = useDispatch()

  const form = React.useRef()
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [validPassword, setValidPassword] = React.useState('stb')

  React.useEffect(() => {

  })

  const onClickSetstateLoginFalse = () => {
    dispatch(stateLoginFalse())
    dispatch(addLogin())
  }

  const onClickLogin = () => {
    dispatch(addLogin())
  }

  const changePwConfirm = (event) => {
    if (event.target.value === password) {
      setValidPassword(true)
    } else {
      setValidPassword(false)
    }
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    let user = { name, email, password, quality: 'USER' }
    let m = { alert: 'Success', message: 'You have successfully registered as a new member.' }

    dispatch(addMessage(m))
    dispatch(addUser(user))
    dispatch(addLogin())
  }

  return (
    <div className='relative rounded-md p-7 pb-12 bg-white px-10'>
      <button className='absolute right-3 top-3 text-white bg-red-300 hover:bg-red-400' onClick={onClickSetstateLoginFalse}>
        <p className='hidden md:block'>Close</p>
        <p className='block md:hidden'>X</p>
      </button>

      <div className='flex items-start md:space-x-6 space-x-2'>
        <h1 className='text-4xl mb-7 underline underline-offset-4'>Register</h1>
        <button className='border-2 border-blue-400 hover:border-blue-500 bg-transparent text-blue-500 text-xs md:text-sm py-2.5' onClick={onClickLogin}>Login Page</button>
      </div>
      <div className='flex items-center'>
        <form ref={form} onSubmit={onSubmitForm}>
          <div className='flex flex-col mb-3'>
            <label htmlFor="name">Username : </label>
            <input type="text" id='name' name='name' placeholder='Please enter your Username' className='w-72 md:w-96 rounded-md' onChange={e => setName(e.target.value)} />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="email">Email : </label>
            <input type="email" id='email' name='email' placeholder='email@example.com' className='w-72 md:w-96 rounded-md' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="password">Password : </label>
            <input type="password" id='password' name='password' placeholder='Please enter your password' className='w-72 md:w-96 rounded-md mb-1' onChange={e => setPassword(e.target.value)} />
            <input type="password" name='passwordConfirm' placeholder='Please enter your password (Confirm)' className='w-72 md:w-96 rounded-md' onChange={changePwConfirm} />
            {
              validPassword === 'stb'
                ? ''
                : validPassword === true
                    ? <p className='text-green-500 pl-3 mt-1'> <i className="fa-solid fa-check text-lg"></i> password is match</p>
                    : <p className='text-red-500 pl-3 mt-2'><i className="fa-solid fa-x"></i> password is incorrect</p>
            }
          </div>
          <div className=''>
            {
              validPassword === true
                ? <button className='w-72 md:w-96 rounded-md mt-7 bg-amber-400 hover:bg-amber-500 text-white text-lg'>Register</button>
                : <button className='w-72 md:w-96 rounded-md mt-7 bg-amber-400 hover:bg-amber-500 text-white text-lg' disabled>Register</button>
            }
          </div>
        </form>
        <div className='line ml-12 mx-8 -top-4 hidden md:block'></div>
        <div className='relative flex-col items-center text-2xl text-amber-500 hidden md:flex'>
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
    </div>
  )
}
