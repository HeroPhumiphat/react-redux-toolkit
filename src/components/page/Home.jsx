import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../slice/messageAlertSlice'

export default function Home() {
  const countMessage = useSelector(state => state.countMessage.value)
  const dispatch = useDispatch()

  const onClickUp = () => {
    let message = { alert: 'Success', message: 'You have successfully registered as a new member.' }
    console.log(message)
    dispatch(addMessage(message))
  }
  return (
    <div>
      <h1>Home</h1>
      <br />
      <button className='bg-green-200 mr-5' onClick={onClickUp}>Click +</button>
      <br />
      <br />
      {/* {
        messageAlert.map((e, i) => (
          <div key={+i} className='flex justify-between items-center text-black bg-amber-200 mb-2 w-96 px-5'>
            <p className=''>{e}</p>
            <button className='px-0 bg-transparent' onClick={() => onCLickBtnClose(i)}>X</button>
          </div>
        ))
      } */}
    </div>
  )
}
