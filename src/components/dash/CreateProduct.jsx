import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addDashEditUser as addDashEditProduct } from '../../slice/dashEditUserSlice'
import { addMessage } from '../../slice/messageAlertSlice'
import { addProduct, editProduct } from '../../slice/productSlice'

export default function CreateProduct() {
  const navigate = useNavigate()

  const dashEditProduct = useSelector(state => state.dashEditUser.value)
  const dispatch = useDispatch()

  const form = React.useRef()
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')
  const [type, setType] = React.useState('')
  const [information, setInformation] = React.useState('')
  const [image, setImage] = React.useState('')

  const onClickClose = () => {
    navigate('/dash/manage-product')
    dispatch(addDashEditProduct(''))
  }

  React.useEffect(() => {
    if (dashEditProduct?.key >= 0) {
      setName(dashEditProduct?.product.name)
      setPrice(dashEditProduct?.product.price)
      setType(dashEditProduct?.product.type)
      setInformation(dashEditProduct?.product.information)
      setImage(dashEditProduct?.product.image)
    }
  }, [])

  const onChangeInputFile = (event) => {
    const file = event.target.files[0]
    if(file === undefined) {
      return setImage('')
    }
    return setImage(file)
  }

  const onSubmitForm = (event) => {
    event.preventDefault()

    let doc
    let message

    if (dashEditProduct?.product.name === '') {
      doc = { name, price, type, information, image }
      message = { alert: 'Success', message: `You have successfully added a new product named "${name}".`}
      dispatch(addProduct(doc))
    } else {
      let newProduct = { name, price, type, information, image }
      // [key, newDoc]
      doc = [ dashEditProduct.key, newProduct ]
      dispatch(editProduct(doc))

      message = { alert: 'Success', message: `You have successfully added a Ediit product named "${dashEditProduct.product.name}".`}

    }

    dispatch(addMessage(message))
    navigate('/dash/manage-product')
  }

  return (
    <div className='px-5 py-3 flex justify-center items-center w-full pt-12'>
      <div className='w-[350px] md:w-[650px] pl-3'>
        <div className='relative'>
          {
            dashEditProduct.product.name === ''
              ? <p className='text-lg md:text-2xl font-bold underline underline-offset-8 mb-7'>Add new Item.</p>
              : <p className='text-lg md:text-2xl font-bold underline underline-offset-8 mb-7'>Edit Item.</p>
          }
          <button className='absolute right-0 -top-0.5 bg-red-300 hover:bg-red-400 border-none text-white py-2.5 text-xs px-3.5 rounded-md' onClick={onClickClose}>X</button>
        </div>
        <form ref={form} onSubmit={onSubmitForm} >
          <div className='flex justify-between px-3'>
            <div className='flex flex-col text-sm'>
              <label htmlFor="name" className='text-sm md:text-base font-bold'>ProductName : </label>
              <input type="text" id='name' className='rounded-md mt-1 mb-3' onChange={(e) => setName(e.target.value)} placeholder='Please enter the Product Name?' defaultValue={dashEditProduct.product.name} required />
              <label htmlFor="price" className='text-sm md:text-base font-bold'>Price : </label>
              <input type="number" id='price' className='rounded-md mt-1 mb-3' onChange={(e) => setPrice(e.target.value)} placeholder='Please enter the Product Price?' defaultValue={dashEditProduct.product.price} step={0.01} required />
              <label htmlFor="type" className='text-sm md:text-base font-bold'>Type : </label>
              <input type="text" id='type' className='rounded-md mt-1 mb-3' onChange={(e) => setType(e.target.value)} placeholder='Please enter the Product Type?' defaultValue={dashEditProduct.product.type} required />
              <label htmlFor="information" className='text-sm md:text-base font-bold'>Information : </label>
              <textarea type="text" id='information' className='rounded-md mt-1 mb-3' onChange={(e) => setInformation(e.target.value)} placeholder='Please enter Information?' defaultValue={dashEditProduct.product.information} required />
              <label htmlFor="information" className='text-sm md:text-base font-bold'>Image : </label>
              <div className='conta mx-auto mt-4 md:hidden'>
                <div className='boxCard mb-8 cursor-pointer rounded-md p-0.5' style={{boxShadow: '2px 2px 5px #c1c1c1'}}>
                  {
                    image === ''
                      ? <div className='w-[160px] h-[180px] flex justify-center items-center border'>
                          <p>image preview</p>
                        </div>
                      : typeof image === 'string'
                        ? <div className='imageProduct rounded-md cursor-pointer' style={{backgroundImage: `url(${image})`}}></div>
                        : <div className='imageProduct rounded-md cursor-pointer' style={{backgroundImage: `url(${URL?.createObjectURL(image)})`}}></div>
                  }
                  <div className='relative pb-1 md:pb-3 pt-1 cursor-default'>
                    <div className='w-full text-start pl-1 md:pl-3'>
                      <p className='my-1 text-sm md:text-base'>{name}</p>
                      <button className='btnAddCart cursor-pointer border-none hover:text-lime-300 mt-2 text-xs md:text-sm' disabled>Add Cart</button>
                    </div>
                    <p className='absolute right-3 bottom-1 md:bottom-3 text-xl md:text-4xl'>${price}</p>
                  </div>
                </div>
              </div>
              {
                image === ''
                  ? <input type="file" accept='image/*' id='information' className='rounded-md mt-1 mb-3' onChange={onChangeInputFile} required />
                  : <input type="file" accept='image/*' id='information' className='rounded-md mt-1 mb-3' onChange={onChangeInputFile} />

              }
              {
                dashEditProduct?.product?.name?.length > 0
                  ? <button className='tracking-wide font-bold bg-amber-400 hover:bg-amber-500 text-white mt-3 py-3 rounded-md'>Confirm</button>
                  : <button className='tracking-wide font-bold bg-blue-500 hover:bg-blue-600 text-white mt-3 py-3 rounded-md'>Create</button>
              }
            </div>
            <div className='hidden md:block'>
              <div className='mx-auto mt-4'>
                <div className='boxCard mb-8 cursor-pointer rounded-md p-0.5' style={{boxShadow: '2px 2px 5px #c1c1c1'}}>
                  {
                    image === ''
                      ? <div className='w-[180px] h-[200px] flex justify-center items-center border'>
                          <p>image preview</p>
                        </div>
                      : typeof image === 'string'
                        ? <div className='imageProduct rounded-md cursor-pointer' style={{backgroundImage: `url(${image})`}}></div>
                        : <div className='imageProduct rounded-md cursor-pointer' style={{backgroundImage: `url(${URL?.createObjectURL(image)})`}}></div>
                  }
                  <div className='relative pb-1 pt-1 cursor-default'>
                    <div className='w-full text-start pl-1 md:pl-3'>
                      <p className='my-1 text-sm'>{name}</p>
                      <button className='btnAddCart cursor-pointer border-none hover:text-lime-300 mt-2 text-sm' disabled>Add Cart</button>
                    </div>
                    <p className='absolute right-3 bottom-1 md:bottom-3 text-xl'>${price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
