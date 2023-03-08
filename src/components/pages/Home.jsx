import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addIndexType, removeIndexType } from '../../slice/stateIndexType'

export default function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.value)
    const indexType = useSelector(state => state.stateIndexType.value)
    const prodType = []
    products.map(product => {
        if (!prodType.some(e => e === product.type)) {
            prodType.push(product.type)
        }
    })
    
    const onChangeInputChangeBox = (event, key) => {
        if (event.target.checked === true) {
            dispatch(addIndexType(key))
        } else {
            dispatch(removeIndexType(key))
        }
    }
    
    return (
        <div>
            <p className='font-medium'>Select Type Product : </p>
            <div className='ml-8 mt-2 flex'>
                {
                    prodType.map((type, key) => (
                        <div className='mr-4' key={+key}>
                            <input type="checkbox" value={type} onChange={() => onChangeInputChangeBox(event, key)} />
                            <label className='ml-1'>{type}</label>
                        </div>
                    ))
                }
            </div>
            <div className='mt-7'>
            {   
                indexType.length > 0 
                    ? indexType.map((type, i) => (
                        <div className='' key={+i}>
                            <p className='text-xl font-medium'>Products Type : {prodType[type]}</p>
                            <div className='flex flex-wrap pt-5 pl-12'>
                                {   
                                    products.map((product, key) => (
                                        product.type === prodType[type]
                                        ?   <div className='card relative w-52 h-72 bg-neutral-800 rounded-md mr-5 mb-5' key={+key}>
                                                <img src={
                                                    typeof product.image === 'string'
                                                    ? product.image
                                                    : URL.createObjectURL(product.image)
                                                } alt={product.name} className='rounded-t-md' style={{ minWidth: '100%', minHeight: '60%' }} />
                                                <div className='absolute bottom-0 w-full bg-neutral-600 p-2 rounded-b-md' style={{ minHeight: '40%'}}>
                                                    <p>{product.name}</p>
                                                    <p className='text-xs'>{product.information}</p>
                                                    <Link className='absolute bottom-2 left-2 text-sm bg-neutral-800 px-5 py-2 rounded-full'>Add Cart</Link>
                                                    <p className='absolute bottom-3 right-4 text-xl font-medium'>${product.price}</p>
                                                </div>
                                            </div>
                                        : ''
                                    ))
                                }
                            </div>
                            <br />
                        </div>
                    ))
                : <div className='flex flex-wrap'>
                    {
                        products.map((product, key) => (
                            <div className='card relative w-52 h-72 bg-neutral-800 rounded-md mr-5 mb-8' key={+key} style={{ '--i': key }}>
                                <img src={product.image} alt={product.name} className='rounded-t-md' style={{ minWidth: '100%', minHeight: '60%' }} />
                                <div className='absolute bottom-0 w-full bg-neutral-600 p-2 rounded-b-md' style={{ minHeight: '40%'}}>
                                    <p>{product.name}</p>
                                    <p className='text-xs'>{product.information}</p>
                                    <Link className='absolute bottom-2 left-2 text-sm bg-neutral-800 px-5 py-2 rounded-full'>Add Cart</Link>
                                    <p className='absolute bottom-3 right-4 text-xl font-medium'>${product.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            </div>            
        </div>
    )
}