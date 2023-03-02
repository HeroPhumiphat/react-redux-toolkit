import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../Slice/userSlice'

export default function Register() {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.value)
    const checkAuth = useSelector((state) => state.login.value)
    const dispatch = useDispatch()

    const form = React.useRef()
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [count, setCount] = React.useState(0)

    const onSubmitForm = (event) => {
        event.preventDefault()
        let key = user.length
        let quality = 'USER'
        console.log(key, email, password, quality, name)
        dispatch(addUser({ key, email, password, quality, name }))
        let n = count 
        setCount(n+1)
    }

    React.useEffect(() => {
        if (count) {
            navigate('/login')
        }
    })

    return (
        <div className='w-full flex flex-col items-center py-10'>
            <h1 className='mb-7'>SIGN-UP</h1>
            <div>
                <form ref={form} onSubmit={onSubmitForm}>
                    <div className="" style={{ minWidth: 300, maxWidth: 500 }}>
                        <div className='mb-5'>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-white">Username :</label>
                            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="FirstName  LastName" onChange={e => setName(e.target.value)} required />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email :</label>
                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email@Example.com" onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className='mb-5'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password :</label>
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1" placeholder="Enter password." onChange={e => setPassword(e.target.value)} required />
                            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter password (confirm)" disabled />
                        </div>
                        <div className='grid'>
                            <button className='bg-blue-500 hover:bg-blue-600'>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}