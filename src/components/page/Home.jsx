import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTextHome } from '../../slice/textHomeSlice'

export default function Home() {
  const products = useSelector(state => state.product.value)
  const dispatch = useDispatch()

  const [show, setShow] = React.useState('')
  const bgHome = React.useRef()

  const [bg, setBg] = React.useState('')
  React.useEffect(() => {
    console.log(bg)
  })

  const onHover = (product) => {
    setShow(`${product.name} ($${product.price})`)
    setBg(product.image)
  }

  const onHoverLeave = () => {
    setShow('')
    setBg('')
  }

  return (
    <div className='w-full h-full flex justify-center'>
      <div className='absolute w-full h-full -z-10 opacity-60 blur-sm' style={{ backgroundImage: typeof bg === 'string' ? `url(${bg})` : `url(${URL?.createObjectURL(bg)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
      <div className='relative py-2 md:py-5 flex flex-col justify-center text-center'>
        <p className='text-2xl md:text-5xl'>Welcom to Web Demo</p>

        <div className='flex justify-start items-center overflow-x-auto h-[400px] md:h-[500px] py-7 px-16'>
          {
            products.map((product, key) => (
              key < 7
                ? <div className='rotate-6 md:rotate-12' key={+key}>
                    <div className='box-image-home relative w-7 md:w-24 h-80 md:h-96 rounded-full  cursor-pointer overflow-hidden max-w-[300px] transition duration-200 ease-in-out  hover:z-30 text-center mx-1 border hover:translate-y-[-30px] border-none' style={{'--x': key + 1}} onMouseEnter={() => onHover(product)} onMouseLeave={onHoverLeave}>
                      <div className='absolute w-full h-full bg-blue-500 opacity-30 blur-md hover:opacity-0 hover:blur-none transition duration-500 ease-out z-20'></div>
                      <div className='absolute -top-0 -left-40 hover:left-12 w-60 md:w-96 h-[400px] -rotate-12 z-10' style={{ backgroundImage: typeof product?.image === 'string' ? `url(${product?.image})` : `url(${URL?.createObjectURL(product?.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                  </div>
                : ''
            ))
          }
          <div className='absolute text-center bottom-16 w-8/12 md:w-10/12'>
            <p className='text-lg md:text-3xl'>{show}</p>

          </div>
        </div>
      </div>
    </div>
  )
}
