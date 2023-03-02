import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stateFalse } from '../../Slice/dashStateSlice'

export default function Home() {
    const userLogin = useSelector((state) => state.login.value[0])

    const dispatch = useDispatch()
    dispatch(stateFalse())
    
    return (
        <>
            <h1>Home</h1>
            {
                userLogin?.name.length > 0  
                ? <p>Username: {userLogin?.name}<br />Email: {userLogin?.email} <br />Quality: {userLogin?.quality}</p>
                : ''
            }
        </>
    )
}