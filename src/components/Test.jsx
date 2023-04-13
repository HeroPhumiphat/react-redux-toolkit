import React from 'react'
import { useNavigate } from 'react-router-dom'

function Test() {
  const navigate = useNavigate()

  React.useEffect(() => {
    navigate('/')
  }, [])
  return (
    <div></div>
  )
}

export default Test
