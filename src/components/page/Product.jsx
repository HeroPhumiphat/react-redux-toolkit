import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Product() {
  const products = useSelector(state => state.product.value)
  const dispatch = useDispatch()

  const [keyType, setKeyType] = React.useState('All')
  const [cards, setCards] = React.useState(products)

  React.useEffect(() => {
    if (keyType) {
      console.log(keyType)
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

  return (
    <div className='flex flex-col justify-center'>
      <div className='my-5 text-center'>
        <p className='font-bold text-xl underline underline-offset-8 mb-5'>Type Products</p>
        <div className='w-full flex justify-center space-x-4 pt-2'>
          {
            typeProduct.map((type, key) => (
              <div className='font-bold flex items-center' key={+key}>
                <button className={
                  keyType === type
                  ? 'bg-neutral-600 text-white border-none'
                  : 'bg-neutral-200 hover:bg-neutral-300 border-none'
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
              <div className='conta mx-auto' key={+key} style={{ '--i': (key + 1) }}>
                <div className='boxCard mb-8 cursor-pointer mx-auto rounded-md p-0.5' style={{boxShadow: '2px 2px 5px #c1c1c1'}}>
                  <div className='imageProduct rounded-md' style={{backgroundImage: `url(${product.image})`}}>
                  </div>
                  <div className='relative pb-3 pt-1'>
                    <div className='w-full text-start pl-3'>
                      <p className='my-1'>{product.name}</p>
                      <button className='btnAddCart text-sm border-none hover:text-lime-300 mt-2'>Add Cart</button>
                    </div>
                    <p className='absolute right-3 bottom-3 text-4xl'>${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
