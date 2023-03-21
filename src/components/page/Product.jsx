import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../slice/cartSlice'
import { clickType } from '../../slice/clickTypeSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import { stateLoginTrue } from '../../slice/stateLoginSlice'
import { clearDocHome } from '../../slice/textHomeSlice'

export default function Product() {
  const products = useSelector(state => state.product.value)
  const userLogin = useSelector(state => state.userLogin.value)
  const productFromHome = useSelector(state => state.textHome.value)
  const checkScroll = useSelector(state => state.checkScrollType.value)
  const dispatch = useDispatch()

  const [keyType, setKeyType] = React.useState('All')
  const [cards, setCards] = React.useState(products)
  const [showProduct, setShowProduct] = React.useState('')
  const [count, setCount] = React.useState(1)
  const boxfilterType = React.useRef()

  React.useEffect(() => {
    if (showProduct === '') {
      setCount(1)
    }
    if (productFromHome)  {
      setShowProduct(productFromHome)
      dispatch(clearDocHome())
    }

    if (checkScroll === true) {
      boxfilterType.current.classList.add('fixed')
      boxfilterType.current.classList.add('top-12')
      boxfilterType.current.classList.add('bg-white')
      boxfilterType.current.classList.add('z-30')
      boxfilterType.current.classList.add('pt-6')
      boxfilterType.current.classList.add('pb-2')
    } else {
      boxfilterType.current.classList.remove('fixed')
      boxfilterType.current.classList.remove('top-12')
      boxfilterType.current.classList.remove('bg-white')
      boxfilterType.current.classList.remove('z-30')
      boxfilterType.current.classList.remove('pt-6')
      boxfilterType.current.classList.remove('pb-2')
    }
  })

  const typeProduct = ['All']
  products.map(product => {
    if (!typeProduct.some((e) => e === product.type)) {
      typeProduct.push(product.type)
    }
  })

  const onClickAddType = (type) => {
    setKeyType(type)

    if (type === 'All') {
      setCards(products)
    } else {
      let validation = []
      products.map(e => {
        if (e.type === type) {
          validation.push(e)
        }
      })
      setCards(validation)
    }
  }
  const onClickProductOne = (product) => {
    if (userLogin.length === 0) {
      return dispatch(stateLoginTrue())
    }

    let message = { alert: 'Warning', message: `You have added a ${product.name} to your basket.`}
    dispatch(addMessage(message))

    const doc = [ userLogin[0]?.name, userLogin[0]?.email, product, 1]
    return dispatch(addCart(doc))
  }

  const onClickProduct = (key) => {
    setShowProduct(cards[key])
  }

  const onClickCloseShowCard = () => {
    setShowProduct('')
  }

  const onCLickAddCart = () => {
    if (userLogin.length === 0) {
      return dispatch(stateLoginTrue())
    }
    let message = { alert: 'Warning', message: `You have added ${count} ${showProduct.name} to your basket.`}
    dispatch(addMessage(message))

    const doc = [ userLogin[0]?.name, userLogin[0]?.email, showProduct, count]
    return dispatch(addCart(doc))
  }

  const onClickCount = (value) => {
    if (count > 0 || (count === 0 && value === 'plus')) {
      if (value === 'plus') {
        setCount(count + 1)
      } else if (value === 'minus') {
        setCount(count - 1)
      }
    }
  }

  const onClickType = () => {
    if (checkScroll === true) {
      dispatch(clickType())
    }
  }

  return (
    <div className='flex flex-col justify-center z-30'>
      <div className='my-5 text-center'>
        <p className='font-bold text-xl underline underline-offset-8 mb-5'>Type Products</p>
        <div className='w-full flex justify-center space-x-1 md:space-x-3 pt-2' ref={boxfilterType}>
          {
            typeProduct.map((type, key) => (
              <div className='font-bold flex items-center' key={+key} onClick={onClickType}>
                <button className={
                  keyType === type
                  ? 'bg-neutral-600 text-sm text-white border-none'
                  : 'bg-neutral-200 text-xs hover:bg-neutral-300 border-none'
                } onClick={() => onClickAddType(type)}>{type}</button>
              </div>
            ))
          }
        </div>
      </div>

      <div className='text-center mt-2'>
        <div className='flex flex-wrap px-auto container mx-auto mt-5'>
          {
            cards.map((product, key) => (
              <div className='conta mx-auto z-20' key={+key} style={{ '--i': (key + 1) }}>
                <div className='boxCard mb-8 cursor-pointer rounded-md p-0.5' style={{boxShadow: '2px 2px 5px #c1c1c1'}}>
                  <div className='imageProduct rounded-md cursor-pointer' style={{backgroundImage: typeof product.image === 'string' ? `url(${product?.image})` : `url(${URL?.createObjectURL(product?.image)})`}} onClick={() => onClickProduct(key)}></div>
                  <div className='relative pb-1 md:pb-3 pt-1 cursor-default'>
                    <div className='w-full text-start pl-1 md:pl-3'>
                      <p className='my-1 text-sm md:textbase'>{product.name}</p>
                      <button className='btnAddCart border-none hover:text-lime-300 mt-2 text-xs md:text-sm' onClick={() => onClickProductOne(product)}>Add Cart</button>
                    </div>
                    <p className='absolute right-3 bottom-1 md:bottom-3 text-xl md:text-4xl'>${(+product.price).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {
        showProduct?.name?.length > 0
          ? <div className='fixed z-40 w-full bottom-0 left-0 flex justify-center items-center' style={{height: window.innerHeight - 63}}>
              <div className='absolute w-full h-full bg-neutral-800 opacity-30 backdrop-blur-3xl z-0' onClick={() => setShowProduct('')}></div>
              <div className='docProduct relative p-3 rounded-none h-full w-full md:w-[800px] md:h-min lg:h-min lg:w-[1000px] md:rounded-md bg-white z-30 lg:pb-7 overflow-y-auto'>
                <button className='absolute right-1.5 top-1.5 text-sm bg-red-300 hover:bg-red-400 font-bold border-none' onClick={onClickCloseShowCard}>Close</button>
                <h1 className='text-base md:text-lg lg:text-xl font-bold mb-5 underline underline-offset-8'>{showProduct?.name}</h1>
                <div className='flex flex-wrap'>
                  <div className='w-[400px] h-[270px] md:w-[400px] md:h-[270px] lg:w-[600px] lg:h-[450px] rounded-md mx-4 md:mr-4 lg:mr-8 mb-5 md:mb-0' style={{backgroundImage: typeof showProduct.image === 'string' ? `url(${showProduct?.image})` : `url(${URL?.createObjectURL(showProduct?.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                  <div className='relative w-[300px] mr-0 ml-4'>
                    <p className=' text-sm md:text-sm lg:text-base'><span className='font-bold'>Name: </span>{showProduct.name}</p>
                    <p className='text-sm md:text-sm lg:text-base'><span className='font-bold'>Type: </span>{showProduct.type}</p>
                    <p className='text-sm md:text-sm lg:text-base'><span className='font-bold'>Information: </span>{showProduct.information}</p>
                    <p className='md:text-xl lg:text-2xl mt-3'><span className='font-bold'>Price: </span>${Math.floor(showProduct.price)}<sup className='text-sm pl-0.5 font-bold'>.{(showProduct.price * 100) % 100}</sup><span className='relative text-base font-bold'> / Piece.</span></p>
                    <div className='w-28 md:w-40 flex justify-around items-center mt-2 border-2 border-neutral-200 px-1 lg:p-2 rounded-md'>
                      <i className="fa-solid fa-plus bg-green-500 px-1.5 py-0.5 rounded-sm text-sm font-bold cursor-pointer text-white" onClick={() => onClickCount('plus')}></i>
                      <input type="number" className='w-8 md:w-12 border-none mx-1 px-0 text-center md:text-base' value={count} readOnly />
                      <i className="fa-solid fa-minus bg-red-500 px-1.5 py-0.5 rounded-sm text-sm font-bold cursor-pointer text-white" onClick={() => onClickCount('minus')}></i>
                    </div>
                    <div>
                      <p className='text-base md:text-lg lg:text-xl font-bold mt-3 mb-2'>Total: ${showProduct.price} x <span className='text-blue-500'> {count}</span> = <span className='text-amber-500 md:text-2xl lg:text-3xl'>${(showProduct.price * count).toFixed(2)}</span></p>
                    </div>
                    <div className='grid md:w-32'>
                      <button className='mt-1 py-2 bg-blue-500 hover:bg-blue-600 text-white border-none  text-sm md:text-base' onClick={onCLickAddCart}>Add Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          : ''
      }
    </div>
  )
}
