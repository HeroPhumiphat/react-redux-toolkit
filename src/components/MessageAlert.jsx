import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearMessage, removeMessage } from '../slice/messageAlertSlice'

export default function MessageAlert() {
  const messageAlert = useSelector(state => state.messageAlert.value)
  const dispatch = useDispatch()

  const boxAlert = React.useRef()

  const onClickBtnCloseMessageAlert = (key) => {
    dispatch(removeMessage(key))
  }

  React.useEffect(() => {
    if (messageAlert.length > 0) {
      clear()
    }
  })

  const clear = (key) => {
    let i=0
    const time = setInterval(() => {
      i++
      if (i >= 5) {
        clearInterval(time)
        dispatch(clearMessage(key))
      }
    }, 1000)
  }

  return (
    <div className='absolute top-20 right-5' style={{maxWidth: 350}}>
      {
        messageAlert.map((msg, key) => (
          <div className={
            msg?.alert.toLowerCase() === 'success'
              ? 'alert relative mb-3 bg-green-200 rounded-md pl-5 py-3 pr-10 text-sm z-50'
              : msg?.alert.toLowerCase() === 'warning'
                ? 'alert relative mb-3 bg-amber-200 rounded-md px-5 py-3 pr-8 text-sm z-50'
                : 'alert relative mb-3 bg-red-200 rounded-md px-5 py-3 pr-8 text-sm z-50'
          } key={+key} ref={boxAlert}>
            <p className=''><span className='font-bold mr-2'>{msg?.alert}!,</span>{msg?.message}</p>
            <button className='absolute right-2 bg-red-300 border-none top-2.5 text-xs py-1 px-2 hover:bg-red-400' onClick={() => onClickBtnCloseMessageAlert(key)}>X</button>
          </div>
        ))
      }
    </div>
  )
}
