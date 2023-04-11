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
  const [passwordConfirm, setPasswordConfirm] = React.useState('')
  const [validPasswordConfirm, setValidPasswordConfirm] = React.useState('stb')
  const [statePassword, setStatePassword] = React.useState(false)
  const [statePasswordConfirm, setStatePasswordConfirm] = React.useState(false);

  const validPassword = React.useMemo(() => {
    const hasLength = password.length > 8 ? true : false
    const hasNumber = /\d/.test(password);
    const hasStrUp = /[A-Z]/.test(password);
    const hasStrLow = /[a-z]/.test(password);
    const hasSymbols = /[!@#$%^&*+]/.test(password);

    return { hasLength, hasNumber, hasStrUp, hasStrLow, hasSymbols };
  }, [password])

  React.useEffect(() => {
    if (password) {
      setStatePassword(true);
      setPasswordConfirm(false);
    }
    if (!validPassword.hasLength || !validPassword.hasNumber || !validPassword.hasStrLow || !validPassword.hasStrUp || !validPassword.hasSymbols) {
      setPasswordConfirm('')
      setValidPasswordConfirm('')
    }
    if (passwordConfirm) {
      if (passwordConfirm.length === 0) {
        setValidPasswordConfirm('')
      }

      setStatePasswordConfirm(true);

      let check = password.substring(0, passwordConfirm.length)
      // console.log(check, passwordConfirm, check === passwordConfirm)
      if (check === passwordConfirm) {
        if (passwordConfirm === password) {
          setValidPasswordConfirm(true);
        } else {
          setValidPasswordConfirm('')
        }
      } else if (check !== passwordConfirm || passwordConfirm.length > password.length) {
        setValidPasswordConfirm(false);
      } else {
        setValidPasswordConfirm('')
      }
    }
  })

  const onClickSetstateLoginFalse = () => {
    dispatch(stateLoginFalse())
    dispatch(addLogin())
  }

  const onClickLogin = () => {
    dispatch(addLogin())
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    let user = { name, email, password, quality: 'USER' }
    let m = { alert: 'Success', message: 'You have successfully registered as a new member.'}

    dispatch(addMessage(m))
    dispatch(addUser(user))
    dispatch(addLogin())
  }

  return (
    <div className='relative rounded-md p-7 pb-6 bg-white px-10 z-50 overflow-y-auto overflow-x-hidden'>
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
            <input type="text" id='name' name='name' placeholder='Please enter your Username' maxLength='30' className='w-72 md:w-96 rounded-md' onChange={e => setName(e.target.value)} required />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="email">Email : </label>
            <input type="email" id='email' name='email' placeholder='email@example.com' className='w-72 md:w-96 rounded-md' onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="password">Password : </label>
            <input type="password" id='password' name='password' placeholder='Please enter your password' minLength={8} className='w-72 md:w-96 rounded-md mb-1' onChange={e => setPassword(e.target.value)} required />
            {
              statePassword === false
                ? ''
                : <div className=' pl-5 mb-3 text-sm'>
                    <p className='underline mb-1'>Strong Password!</p>
                    <div className='pl-3'>
                      <p>{validPassword.hasLength
                        ? <span className='text-green-500 pl-1'> <i className="fa-solid fa-check text-sm"></i></span>
                        : <span className='text-red-500 pl-1 pr-1 mt-5'><i className="fa-solid fa-x text-sm -pr-0.5"></i></span>
                      } has Length (more than 8)</p>
                      <p>{validPassword.hasNumber
                        ? <span className='text-green-500 pl-1'> <i className="fa-solid fa-check text-sm"></i></span>
                        : <span className='text-red-500 pl-1 pr-1 mt-5'><i className="fa-solid fa-x text-sm -pr-0.5"></i></span>
                      } has Number (1-9)</p>
                      <p>{validPassword.hasStrUp
                        ? <span className='text-green-500 pl-1'> <i className="fa-solid fa-check text-sm"></i></span>
                        : <span className='text-red-500 pl-1 pr-1'><i className="fa-solid fa-x text-sm -pr-0.5"></i></span>
                      } has String Uppercase (ABC)</p>
                      <p>{validPassword.hasStrLow
                        ? <span className='text-green-500 pl-1'> <i className="fa-solid fa-check text-sm"></i></span>
                        : <span className='text-red-500 pl-1 pr-1'><i className="fa-solid fa-x text-sm -pr-0.5"></i></span>
                      } has String Lowercase (abc)</p>
                      <p>{validPassword.hasSymbols
                        ? <span className='text-green-500 pl-1'> <i className="fa-solid fa-check text-sm"></i></span>
                        : <span className='text-red-500 pl-1 pr-1'><i className="fa-solid fa-x text-sm -pr-0.5"></i></span>
                      } has Symbols (!@#$%^&*+)</p>
                    </div>
                  </div>
            }
            {
              validPassword.hasLength && validPassword.hasNumber && validPassword.hasStrLow && validPassword.hasStrUp && validPassword.hasSymbols
                ? <>
                    <input type="password" name='passwordConfirm' placeholder='Please enter your password (Confirm)' className='w-72 md:w-96 rounded-md' onChange={e => setPasswordConfirm(e.target.value)} required />
                    {
                      validPasswordConfirm === 'stb'
                        ? ''
                        : validPasswordConfirm === true
                            ? <p className='text-green-500 pl-3 mt-1'> <i className="fa-solid fa-check text-lg"></i> password is match</p>
                            : validPasswordConfirm === false
                              ? <p className='text-red-500 pl-3 mt-2'><i className="fa-solid fa-x"></i> password is incorrect</p>
                              : ''
                    }
                  </>
                : ''
            }
          </div>
          <button className={validPasswordConfirm === true && validPassword.hasLength && validPassword.hasNumber && validPassword.hasStrLow && validPassword.hasStrUp && validPassword.hasSymbols ?  'w-72 md:w-96 rounded-md mt-5 bg-amber-400 hover:bg-amber-500 text-white text-lg' : 'w-72 md:w-96 rounded-md mt-5 bg-amber-700 hover:bg-amber-700 text-white text-lg cursor-no-drop'} disabled={validPasswordConfirm === true && validPassword.hasLength && validPassword.hasNumber && validPassword.hasStrLow && validPassword.hasStrUp && validPassword.hasSymbols ? false : true}>Register</button>
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
