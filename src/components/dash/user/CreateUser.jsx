import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../../../Slice/userSlice'

export default function CreateUser() {
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
            navigate('/dash/user/menage')
        }
    })

    return (
        <div className='w-full'>
            <div className='mb-7 ml-5 flex'>
                <Link to='/dash/user/menage' className='text-neutral-400 hover:text-red-500 mr-3'>/ Menage Users</Link>
                <Link className='text-neutral-400 hover:text-red-500'>/ Create User</Link>
            </div>

            <h1 className='mb-7 text-2xl underline text-white underline-offset-4 decoration-blue-500'>Create User</h1>
            <div>
                <form ref={form} onSubmit={onSubmitForm}>
                    <div className="w-80">
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
                        </div>
                        <div className='grid'>
                            <button className='bg-blue-500 hover:bg-blue-600'>Confirm</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}