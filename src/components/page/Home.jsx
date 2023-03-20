import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTextHome } from '../../slice/textHomeSlice'

export default function Home() {
  const textHome = useSelector(state => state.textHome.value.join(''))
  const products = useSelector(state => state.product.value)
  const dispatch = useDispatch()

  React.useEffect(() => {

  })

  const onMouse = () => {
    console.log('a')
  }

  const [content, setContent] = React.useState('')

  return (
    <div className='w-full h-full flex justify-center pt-5'>
      <div className='relative py-5 flex flex-col justify-center text-center'>
        <p className='text-5xl'>Welcom to Web Demo</p>

        <div className='flex justify-start items-center overflow-x-auto h-[500px] px-5 py-7'>
          {
            products.map((product, key) => (
              key < 7
              ? <div className='image-home min-w-[70px] h-[300px] hover:h-[380px] hover:w-[100px] rounded-full mx-2 hover:-mx-1.5 z-20 hover:z-30'>
                  <div className='z-30 absolute top-0 left-1 rounded-full opacity-80 bg-zinc-800 w-full h-full transition duration-300 ease-out hover:opacity-0 cursor-pointer' onH></div>
                  <div className='z-20 relative w-full h-full rounded-full ml-1 cursor-pointer transition duration-300 ease-out hover:scale-110' style={{ backgroundImage: typeof product?.image === 'string' ? `url(${product?.image})` : `url(${URL?.createObjectURL(product?.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} onMouseEnter={onMouse}></div>
                </div>
                : ''
            ))
          }
          </div>
      </div>
    </div>
  )
}
