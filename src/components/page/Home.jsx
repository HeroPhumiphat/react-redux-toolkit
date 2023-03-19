import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTextHome } from '../../slice/textHomeSlice'

export default function Home() {
  const textHome = useSelector(state => state.textHome.value.join(''))
  const products = useSelector(state => state.product.value)
  const dispatch = useDispatch()

  const [content, setContent] = React.useState('')

  return (
    <div className='w-full h-full flex justify-center pt-5'>
      <div className='relative max-w-[1000px] w-10/12 border border-blue-100 py-5 text-center'>
        <p className='text-5xl'>Welcom to Web Demo</p>

        <div className='flex justify-start items-start mt-12 overflow-x-auto px-2 w-full h-full py-7'>
          {
            products.map((product, key) => (
              <div className='image-home min-w-[200px] h-[330px] mx-3 rounded-full cursor-pointer hover:object-scale-down transition hover:ease-out duration-100' style={{ backgroundImage: typeof product?.image === 'string' ? `url(${product?.image})` : `url(${URL?.createObjectURL(product?.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
            ))
          }
          </div>
        <div className='h-96'></div>
      </div>
    </div>
  )
}
