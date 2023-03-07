import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addUserLogin, removeUserLogin } from '../../Slice/loginSlice'
import { addUrl } from '../../Slice/urlSlice'

export default function Login() {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value)
    const userLogin = useSelector((state) => state.login.value)
    const dispatch = useDispatch()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [selectEmail, setSelectEmail] = React.useState('')
    const [selectPassword, setSelectPassword] = React.useState('')
    const select = React.useRef()
    const form = React.useRef()
    const onSubmitForm = (event) => {
        event.preventDefault()
        user.map(e => {
            if(e.email === email && e.password === password) {
                dispatch(removeUserLogin(e))
                dispatch(addUserLogin(e))
            }
        })
    }
    
    React.useEffect(() => {
        if (userLogin) {
            if (userLogin[0]?.quality === 'ADMIN') {
                dispatch(addUrl('/dash/product/menage'))
                navigate('/dash/user/menage')
            }
            if (userLogin[0]?.quality === 'USER') {
                navigate('/')
            }
        }
        if (selectEmail) {
            setEmail(selectEmail)
            setPassword(selectPassword)
        }
    })

    const onChangeSelect = () => {
        if (select.current.value === 'inputValue') {
            setSelectEmail('')
            setSelectPassword('')
        } else {
            setSelectEmail(user[select.current.value].email)
            setSelectPassword(user[select.current.value].password)
        }
        console.log()
    }

    return (
        <div className='w-full flex flex-col items-center py-10'>
            <h1 className='mb-7'>SIGN-IN</h1>
            <div className=''>
                <form ref={form} onSubmit={onSubmitForm}>
                    <div className="" style={{ minWidth: 300, maxWidth: 500 }}>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email :</label>
                        <div className='flex mb-6'>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={selectEmail} onChange={e => setEmail(e.target.value)} placeholder="Email@Example.com" required />
                            <select name="" id="" className='w-px rounded-r-lg relative pl-3 bg-neutral-600' style={{ minWidth: 120 }} ref={select} onChange={onChangeSelect}>
                                <option value="inputValue" className='text-neutral-500'>User Test</option>
                                {
                                    user.map(e => (
                                        <option value={e.key} key={e.key}>{e.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mb-10'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">password :</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" defaultValue={selectPassword} onChange={e => setPassword(e.target.value)} placeholder="**************" required />
                        </div>
                        <div className='grid'>
                            <button className='bg-amber-500 hover:bg-amber-600'>Login</button>
                        </div>
                    </div> 
                </form>
            </div>
        </div>
    )
}