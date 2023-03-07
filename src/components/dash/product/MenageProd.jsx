import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function MenageProd() {
    const products = useSelector((state) => state.products.value) 
    console.log(...products)
    return (
        <div>
            <div className='mb-7 ml-5 flex'>
                <Link className='text-neutral-400 hover:text-red-500'>&#62; Menage Product Information</Link>
            </div>
            <div className='flex flex-wrap'>
                <div className='flex flex-wrap'>
                    <div className='mr-5 mb-5'>
                        <p className='text-neutral-400 mb-3'>Overview.</p>
                        <div className='flex flex-wrap'>
                            <div className="relative w-52 h-36 border-l-8 border-amber-500 bg-white rounded-md py-2 px-4 mb-2 mr-5">
                                <p className='text-neutral-800 font-bold underline underline-offset-2'>Products List</p>
                                <p className='absolute bottom-4 right-7 text-7xl text-amber-500 font-medium'>{products.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className='mr-10 mb-5'>
                        <div>
                            <p className='text-neutral-400 mb-3'>Add new Item.</p>
                            <div>
                                <Link to='/dash/product/create' className="relative w-52 h-36 bg-blue-500 hover:bg-blue-600 rounded-md py-2 px-4 cursor-cell flex justify-center items-center text-white hover:text-white">
                                    <i className="fa-solid fa-plus text-3xl"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mr-7 mb-5'>
                    <div>
                        <p className='text-neutral-400 mb-3'>Table show list product information.</p>
                        <div className='rounded-lg overflow-x-auto' style={{maxWidth: 1000}}>
                            <table className='w-full text-sm text-left text-neutral-700'>
                                <thead className='text-xs text-white uppercase bg-neutral-600'>
                                    <tr>
                                        <th className='px-6 py-3'>
                                            Products name
                                        </th>
                                        <th className='px-3 md:px-6 py-3'>Category</th>
                                        <th className='px-3 md:px-6 py-3'>Price</th>
                                        <th className='px-3 md:px-6 py-3 text-center'>Image</th>
                                        <th className='px-3 md:px-6 py-3 text-center'>Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product, i) => (
                                            <tr className='bg-white border-b text-xs md:text-sm' key={+i}>
                                                <th className='px-6 py-2 font-medium text-gray-900 whitespace-nowrap'>{product.name}</th>
                                                <td className='px-3 md:px-6 py-2 text-center'>{product.category}</td>
                                                <td className='px-3 md:px-6 py-2 text-center'>${product.price}</td>
                                                <td className='px-3 md:px-6 py-0.5 max-w-px'>
                                                    {product.image}
                                                    {/* <div style={{height: 70, minWidth: 100, backgroundImage: "url('https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=600')", backgroundSize: '130%', backgroundPosition: 'center'}}></div> */}
                                                </td>
                                                <td className='pr-2 md:px-4 py-1 space-x-1 text-center'>
                                                    <button className='bg-amber-500 text-white py-1 px-2 mb-1'>Edit</button>
                                                    <button className='bg-red-500 text-white py-1 px-2'>delete</button>
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
