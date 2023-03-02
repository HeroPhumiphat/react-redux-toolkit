import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, updateUser } from '../../../Slice/userSlice'

export default function MenageUser() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.user.value)
    const copyUsers = []
    users.map(user => {
        copyUsers.push(Object.entries(user))
    })
    const [edit, setEdit] = React.useState('')
    const [editName, setEditName] = React.useState('')
    const [editEmail, setEditEmail] = React.useState('')
    const [editPassword, setEditPassword] = React.useState('')
    const formEdit = React.useRef()

    const onSubmitFormEdit = (e) => {
        e.preventDefault()
        if (editName) {
            copyUsers[edit][4][1] = editName
        }
        if (editEmail) {
            copyUsers[edit][1][1] = editEmail
        }
        if (editPassword) {
            copyUsers[edit][2][1] = editPassword
        }
        let result = []
        copyUsers.map((user) => {
            let toObj = { key: user[0][1], email: user[1][1], password: user[2][1], quality: user[3][1], name: user[4][1]}
            result.push(toObj)
        })
        dispatch(updateUser(result))
        setEdit('')
    }

    return (
        <>
            <div className='mb-7 ml-5 flex'>
                <Link className='text-neutral-400 hover:text-red-500'>/ Menage Users</Link>
            </div>
            <div className='text-start'>
                <p className='text-neutral-400 mb-3'>Table show list Users.</p>
                <div className='rounded-lg overflow-x-auto' style={{maxWidth: 500}}>
                    <table className='w-full text-sm text-left text-neutral-700'>
                        <thead className='text-xs text-white uppercase bg-neutral-600'>
                            <tr>
                                <th className='px-4 py-3'>Name</th>
                                <th className='px-2 py-3'>Email</th>
                                <th className='px-2 py-3'>Password</th>
                                <th className='px-3 py-3 text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   
                                users.map((e, i) => (
                                    i > 0
                                        ?   <tr className='bg-white border-b text-xs md:text-sm' key={+i}>
                                                <td className='px-4 py-2 font-medium text-gray-700 whitespace-nowrap'>{e.name}</td>
                                                <td className='px-2 py-2'>{e.email}</td>
                                                <td className='px-2  py-2'>{e.password}</td>
                                                <td className='pr-0 md:px-2 py-1 space-x-1 text-center'>
                                                    <button className='bg-amber-500 text-white py-1 px-2 mb-1' onClick={() => {edit === '' ? setEdit(i) : alert('กรุณาแก้ไขข้อมูลให้เสร็จ แล้วกด submit ก่อนทำรายการถัดไป')}
                                                    }>Edit</button>
                                                    <button className='bg-red-500 text-white py-1 px-3' onClick={() => dispatch(deleteUser(i))}>delete</button>
                                                </td>
                                            </tr>
                                        :   ' '   
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {
                    edit > 0 
                    ?   <form ref={formEdit} onSubmit={onSubmitFormEdit}>
                            <div className="mt-5 bg-neutral-600 rounded-lg p-2 w-80">
                                <p className='text-white text-sm mb-3'>Edit Username : {users[edit]?.name}</p>
                                <div className='px-1'>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1 mr-3" placeholder="Enter Username" defaultValue={edit > 0 ? users[edit]?.name : ''} onChange={e => setEditName(e.target.value)} required />
                                    <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1 mr-5" placeholder="Enter Email" defaultValue={users[edit]?.email} onChange={e => setEditEmail(e.target.value)} required />
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-1 mr-5" placeholder="Enter Password" defaultValue={users[edit]?.password} onChange={e => setEditPassword(e.target.value)} required />
                                    <button className='bg-blue-500 hover:bg-blue-600 w-full mb-1'>Confirm</button>
                                </div>
                            </div>
                        </form> 
                    : ''
                }
            </div>
        </>
    )
}