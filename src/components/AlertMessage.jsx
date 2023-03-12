import React from 'react'
import { useSelector } from 'react-redux'

export default function AlertMessage() {
  const messageAlert = useSelector(state => state.messageAlert.value)
  const boxAlert = React.useRef()
  React.useEffect(() => {
  })

  return (
    <div>
      <p ref={boxAlert}><span className='font-bold'>Success!</span>, {messageAlert[1]}</p>
    </div>
  )
}
