import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../../slice/cartSlice'
import { addConfirmAlert } from '../../slice/confirmSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import Product from './Product'

export default function Cart() {
  const carts = useSelector(state => state.cart.value)
  const userLogin = useSelector(state => state.userLogin.value[0])
  const confirmSlice = useSelector(state => state.confirm.value)
  const dispatch = useDispatch()

  const [num, setNum] = React.useState(0)
  const [total, setTotal] = React.useState(0)
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (c) {
      setNum(c)
    }
    if (t) {
      setTotal(t)
    }

    if (userLogin?.name === undefined || prod.length === 0) {
      setNum(0)
      setTotal(0)
    }

    if (confirmSlice.state === 'ok' && confirmSlice.alert === 'removeCart') {
      dispatch(removeCart([email, name, count]))
      dispatch(addConfirmAlert(''))
      let message = { alert: 'Warning', message: `You have successfully canceled the "${name}" order.`}
      dispatch(addMessage(message))
    }

    if (confirmSlice.state === 'ok' && confirmSlice.alert === 'confirmCart') {
      prod.map(e => {
        dispatch(removeCart([e.user.email, e.product.name, e.count]))
      })
      let message = { alert: 'Success', message: 'You have completed your order.'}
      dispatch(addMessage(message))
      dispatch(addConfirmAlert(''))
    }
  })


  let prod = []
  let c = 0
  let t = 0
  carts.map(e => {
    if (e.user.name === userLogin?.name) {
      c += e.count
      t += (e.count * e.product.price)
      prod.push(e)
    }
  })

  const onClickBtnCancel = (email, name, count) => {
    setEmail(email)
    setName(name)
    setCount(count)
    let doc = { state: '', alert: 'removeCart', message: `Do you want to cancel your "${name}" order?`}
    dispatch(addConfirmAlert(doc))
  }

  const onClickConfirmOrder = () => {
    let doc = { state: '', alert: 'confirmCart', message: 'Check the contents of the items in the basket. and then press confirm to place an order.'}
    dispatch(addConfirmAlert(doc))
  }

  return (
    <div className='boxCart relative w-full h-full flex justify-center items-start pt-0 md:pt-12 overflow-y-auto overflow-x-hidden z-30'>
      <div className='px-5 py-2'>
        <table className='hidden md:block'>
          <thead>
            <tr className='uppercase'>
              <th className='px-2 text-sm pb-3'>Count</th>
              <th className='px-2 text-sm pb-3'>Image</th>
              <th className='px-2 text-sm pb-3'>ProductName</th>
              <th className='px-2 text-sm pb-3'>Price</th>
              <th className='px-2 text-sm pb-3'>Quantity</th>
              <th className='px-2 text-sm pb-3'>Total</th>
              <th className='pl-2 text-sm pb-3'>Action</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>
        <table className='block md:hidden'>
          <thead>
            <tr>
              <th className='px-2'>Count</th>
              <th className='px-2 text-center'>Information</th>
              <th className='px-2 text-center'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              prod.map((e, key) => (
                <tr className='border-b' key={+key}>
                  <td className='text-center'><p>{key + 1}</p></td>
                  <td className='text-center'>
                    <div className='w-[150px] h-[100px] rounded-sm mx-4 md:mr-4 lg:mr-8 my-2 md:mb-0' style={{backgroundImage: `url(${e?.product?.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                    <p className='text-sm mt-3 font-bold'>{e.product.name}</p>
                    <p className='text-xs'><span className='font-bold'>price: </span>${e.product.price}</p>
                    <p className='text-xs'><span className='font-bold'>Quantity: </span>{e.count}</p>
                    <p className='text-xs mb-2'><span className='font-bold'>Total: </span>${(e.count * e.product.price).toFixed(2)}</p>
                  </td>
                  <td className='pl-2'>
                    <button className='bg-red-400 hover:bg-red-500 text-white border-none px-2 py-1 mx-2 text-xs' onClick={() => onClickBtnCancel(e.user.email, e.product.name, e.count)}>Cancel</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        {
          prod.length < 1
          ? <div className='w-full text-center text-sm md:text-2xl text-neutral-400 my-16'>
              <p className='px-2'>The product you selected cannot be found.</p>
            </div>
          : ''
        }
        <div className='mt-12 text-end text-xs md:text-base'>
          <p className='mb-1'><span className='font-bold mr-3'>Quantity: </span>{num}</p>
          <p className='mb-1'><span className='font-bold mr-3'>Amount: </span>${total.toFixed(2)}</p>
          <p className='mb-1'><span className='font-bold mr-3'>Vat 7%: </span>${(total * 0.07).toFixed(2)}</p>
          <p className='text-lg md:text-3xl mt-2'><span className='font-bold mr-3 underline underline-offset-8'>Total: </span>${((total * 0.07) + total).toFixed(2)}</p>
          {
            prod.length === 0
              ? <button className='mt-5 md:mt-12 w-52 text-sm md:text-lg bg-blue-500 hover:bg-blue-600 text-white border-none' onClick={onClickConfirmOrder} disabled>Confirm</button>
              : <button className='mt-5 md:mt-12 w-52 text-sm md:text-lg bg-blue-500 hover:bg-blue-600 text-white border-none' onClick={onClickConfirmOrder}>Confirm</button>
          }
        </div>
      </div>
    </div>
  )
}
