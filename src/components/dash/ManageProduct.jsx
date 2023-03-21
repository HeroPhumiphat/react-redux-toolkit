import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addConfirmAlert } from '../../slice/confirmSlice'
import { addDashEditUser } from '../../slice/dashEditUserSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import { deleteProduct } from '../../slice/productSlice'

export default function ManageProduct() {
  const products = useSelector(state => state.product.value)
  const confirmSlice = useSelector(state => state.confirm.value)
  const dispatch = useDispatch()

  const [index, setIndex] = React.useState('')
  const [keyword, setKeyword] = React.useState('')

  let doc = []
  products.map(e => {
    if (e.quality !== 'ADMIN') {
      doc.push(e)
    }
  })

  React.useEffect(() => {
    if (confirmSlice?.state === 'ok' && confirmSlice?.alert === 'deleteUser') {
      let message = { alert: 'Warning', message: `You have deleted Item "${keyword}"`}
      dispatch(addMessage(message))
      dispatch(deleteProduct(index))
      dispatch(addConfirmAlert(''))
      setIndex('')
    }
  })

  const onClickEditUser = (user) => {
    dispatch(addDashEditUser(user))
  }

  const onClickDelUser = (key, name) => {
    setIndex(key)
    setKeyword(name)
    let doc = { state: '', alert: 'deleteUser', message: `Are you sure you want to delete the Item name : "${name}"?`}
    dispatch(addConfirmAlert(doc))
  }

  return (
    <div className='mt-5 px-2 sm:p-5 flex justify-center items-center'>
      <div>
        <div className='flex justify-between space-x-4 w-full'>
          <p className='text-2xl underline underline-offset-8'>Manage Product</p>
          <Link to='/dash/create-product' onClick={() => {
            dispatch(addDashEditUser({ product: { name: ''} }))
          }} className='bg-blue-500 text-white text-xs sm:text-sm py-2 px-3 sm:px-7 rounded-sm font-bold'>Add new Item</Link>
        </div>
        <div className='flex flex-wrap'>
          <div className='mt-3 mr-0 lg:mr-12'>
            <div className='mt-3'>
              <p><span className='font-bold w-12 pr-2'>All Products: </span>&nbsp;{doc.length}</p>
            </div>
            <div className='mt-2'>
              <p className='text-sm text-neutral-400 mb-2'>Information table list Items.</p>
              <table className='hidden sm:block'>
                <thead>
                  <tr className='uppercase text-sm'>
                    <th className='px-2'>count</th>
                    <th className='px-2'>image</th>
                    <th className='px-2 text-center'>name</th>
                    <th className='px-2 text-center'>type</th>
                    <th className='px-2 text-center'>price</th>
                    <th className='px-2'>action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    doc.map((product, key) => (
                      <tr key={+key}>
                        <th className='py-2 border-b px-2 text-center'>{key + 1}</th>
                        <td className='py-2 border-b px-2'>
                          <div className='w-[150px] h-[160px] rounded-sm mx-auto' style={{backgroundImage: typeof product.image === 'string' ? `url(${product?.image})` : `url(${URL?.createObjectURL(product?.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                        </td>
                        <td className='py-2 border-b px-2 text-center'>
                          {
                              product.name?.length > 15
                                ? <p>{product.name.substr(0, 15)}...</p>
                                : <p>{product.name}</p>
                          }
                        </td>
                        <td className='py-2 border-b px-2 text-center'>{product.type}</td>
                        <td className='py-2 border-b px-2 text-center'>{product.price}</td>
                        <td className='py-2 border-b px-2 text-center'>
                          <Link to='/dash/create-product' className='text-xs py-2 px-3 rounded-sm mx-0.5 bg-amber-400 font-bold' onClick={() => onClickEditUser({ product, key })}>Edit</Link>
                          <button className='text-xs py-1.5 mx-0.5 bg-red-400 font-bold rounded-sm' onClick={() =>  onClickDelUser(key, product.name)}>Del</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <table className='sm:hidden'>
                  <thead>
                    <tr className='uppercase text-xs'>
                      <th className='px-0'>count</th>
                      <th className='px-1'>Information</th>
                      <th className='pl-1 text-center'>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      doc.map((product, key) => (
                        <tr className='relative' key={+key}>
                          <th className='px-0 border-b text-sm'>{key + 1}</th>
                          <td className='text-center border-b pb-1 pt-3 px-1 text-sm'>
                            <div className='w-[100px] h-[60px] rounded-sm mx-auto mb-3' style={{backgroundImage: typeof product.image === 'string' ? `url(${product?.image})` : `url(${URL?.createObjectURL(product?.image)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                            {
                              product.name?.length > 15
                                ? <p>Name: {product.name.substr(0, 15)}...</p>
                                : <p>Name: {product.name}</p>
                            }
                            <p>Price: {product.price}</p>
                            <p>Type: {product.type}</p>
                          </td>
                          <td className='mb-0 border-b pl-1 text-center mt-2 pb-1 pt-2'>
                            <Link to='/dash/create-product' className='text-xs py-2 px-3 rounded-sm m-0.5 bg-amber-400 font-bold' onClick={() => onClickEditUser({ product, key})}>Edit</Link>
                            <button className='text-xs py-1.5 px-3 mx-0.5 bg-red-400 font-bold mt-2 rounded-sm' onClick={() => onClickDelUser(key, product.name)}>Del</button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
