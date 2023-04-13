import React from 'react'
import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()

  React.useEffect(() => {
    // navigate('/')
  }, [])
  return (
    <div>test</div>
  )
}

export default Test
