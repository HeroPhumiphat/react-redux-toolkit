import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addDocHome,  } from '../../slice/textHomeSlice'

export default function Home() {
  const products = useSelector(state => state.product.value)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [show, setShow] = React.useState('')
  const [bg, setBg] = React.useState('')

  const onHover = (product) => {
    product.name?.length > 15
      ? setShow(`${product.name.substr(0, 15)}... ($${product.price})`)
      : setShow(`${product.name} ($${product.price})`)
    setBg(product.image)
  }

  const onHoverLeave = () => {
    setShow('')
    setBg('')
  }

  const onClickElem = (product) => {
    dispatch(addDocHome(product))
    navigate('/product')
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='absolute w-full h-full -z-10 opacity-40 blur-sm' style={{ backgroundImage: typeof bg === 'string' ? `url(${bg})` : `url(${URL?.createObjectURL(bg)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
      <div className='relative py-2 md:py-5 flex flex-col justify-center text-center'>
        <p className='text-3xl md:text-5xl font-bold'>Welcom to Web Demo</p>

        <div className='flex justify-start items-center overflow-x-auto h-[400px] md:h-[500px] py-7 px-16'>
          {
            products.map((product, key) => (
              key < 7
                ? <div className='rotate-6 md:rotate-12' key={+key} onClick={() => onClickElem(product)}>
                    <div className='box-image-home relative w-8 md:w-24 h-80 md:h-96 rounded-full  cursor-pointer overflow-hidden max-w-[300px] transition duration-200 ease-in-out  hover:z-30 text-center mx-1 border hover:translate-y-[-30px] border-none' style={{'--x': key + 1}} onMouseEnter={() => onHover(product)} onMouseLeave={onHoverLeave}>
                      <div className='absolute w-full h-full bg-blue-900 opacity-30 blur-md hover:opacity-0 hover:blur-none transition duration-500 ease-out z-20'></div>
                      <div className='absolute -top-0 -left-32 md:-left-40 w-60 md:w-96 h-[400px] -rotate-12 z-10' style={{ backgroundImage: typeof product?.image === 'string' ? `url(${product?.image})` : `url(${URL?.createObjectURL(product?.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                    </div>
                  </div>
                : ''
            ))
          }
          <div className='absolute text-center -bottom-7 w-8/12 md:w-10/12'>
            <p className='text-lg md:text-3xl font-bold'>{show}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
