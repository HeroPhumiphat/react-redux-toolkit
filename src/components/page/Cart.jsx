import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../../slice/cartSlice'

export default function Cart() {
  const carts = useSelector(state => state.cart.value)
  const userLogin = useSelector(state => state.userLogin.value[0])
  const dispatch = useDispatch()
  console.log(carts)

  const [num, setNum] = React.useState(0)
  const [total, setTotal] = React.useState(0)

  React.useEffect(() => {
    if (c) {
      setNum(c)
    }
    if (t) {
      setTotal(t)
    }
  })


  let prod = []
  let c = 0
  let t = 0
  carts.map(e => {
    if (e.user.name === userLogin?.name) {
      console.log(e.user.name, userLogin.name)
      c += e.count
      t += (e.count * e.product.price)
      prod.push(e)
    }
  })

  console.log(prod)

  const onClickBtnCancel = (email, name, count) => {
    console.log(email, name, count)

    carts.map((e, i) => {
      if (e.user.email === email && e.product.name === name && e.count === count) {
        console.log(i)
      }
    })
    dispatch(removeCart([email, name, count]))
  }

  return (
    <div className='boxCart relative w-full h-full flex justify-center items-start pt-12 overflow-auto'>
      <div className='px-5 py-2'>
        <table>
            <tr className=''>
              <th className='px-2 text-sm pb-3'>count</th>
              <th className='px-2 text-sm pb-3'>image</th>
              <th className='px-2 text-sm pb-3'>ProductName</th>
              <th className='px-2 text-sm pb-3'>Price</th>
              <th className='px-2 text-sm pb-3'>Quantity</th>
              <th className='px-2 text-sm pb-3'>Total</th>
              <th className='pl-2 text-sm pb-3'>Action</th>
            </tr>
          {
            prod.map((e, key) => (
              <tr className='border-b' key={+key}>
                <th className='px-2 text-center'>{key + 1}</th>
                <td className='pt-3'>
                  <div className='w-[100px] h-[60px] rounded-sm mx-4 md:mr-4 lg:mr-8 mb-5 md:mb-0' style={{backgroundImage: `url(${e?.product?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                </td>
                <td className='px-2'>{e.product.name}</td>
                <td className='px-2 text-center'>${e?.product?.price}</td>
                <td className='px-2 text-center'>{e?.count}</td>
                <td className='px-2 text-center'>${(e?.count * e?.product?.price).toFixed(2)}</td>
                <td className='pl-3'>
                  <button className='bg-red-400 hover:bg-red-500 text-white border-none px-2 py-1 mx-2' onClick={() => onClickBtnCancel(e.user.email, e.product.name, e.count)}>Cancel</button>
                </td>
              </tr>
            ))
          }
        </table>
        {
          prod.length < 1
          ? <div className='w-full text-center text-2xl text-neutral-400 my-16'>
              <p className='px-2'>The product you selected cannot be found.</p>
            </div>
          : ''
        }
        <div className='mt-12 text-end'>
          <p className='mb-1'><span className='font-bold mr-3'>Quantity: </span>{num}</p>
          <p className='mb-1'><span className='font-bold mr-3'>Amount: </span>${total.toFixed(2)}</p>
          <p className='mb-1'><span className='font-bold mr-3'>Vat 7%: </span>${(total * 0.07).toFixed(2)}</p>
          <p className='text-3xl mt-2'><span className='font-bold mr-3 underline underline-offset-8'>Total: </span>${((total * 0.07) + total).toFixed(2)}</p>
           <button className='mt-12 w-52 text-lg bg-blue-500 hover:bg-blue-600 text-white border-none'>Confirm</button>
        </div>
      </div>
    </div>
  )
}
