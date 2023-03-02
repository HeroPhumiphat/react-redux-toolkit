import React from 'react'

export default function Create() {
    return (
        <h1>Create</h1>   
    )
}


// import React from 'react'
// import Dash from '../Dash'

// import '../product/style.css'

// export default function Create() {
//     const showImage = React.useRef()
//     const file = React.useRef()
//     const form = React.useRef()

//     const onSubmitForm = (e) => {
//         e.preventDefault()
//         const fd = new FormData(form.current)
//         const fe = Object.fromEntries(fd.entries())
//         fetch('/api/products/create', {
//             method: 'POST',
//             body: JSON.stringify(fe),
//             headers: {'Content-Type': 'application/json'}
//         })
//         .then(res => res.text())
//         .then(result => {
//             if (result === 'true') {
//                 form.current.reset()
//                 alert('save product information')
//             } else {
//                 alert('เกิดข้อผิดพลาด ข้อมูลไม่ถูกบันทึก')
//             }
//         })
//         .catch(err => alert(err))
//     }


//     return (
//         <div className='relative flex w-full h-40'>
//             {/* ให้ใส่ mt-16 ด้วย */}
//             <div className='relative mt-16 z-10 pl-32 md:pl-16 pt-10 flex flex-col overflow-y-auto' style={{height: window.innerHeight - 73}}>
//                 <h1 className='text-xl md:text-2xl underline underline-offset-8 decoration-sky-400 mb-8'>Add a new Item.</h1>
//                 <form action="" className='p-10'>
//                     <p className='mb-5 text-neutral-400'>Specify Sroduct Information.</p>
//                     <div className='lg:flex'>
//                         <div className='w-72 mr-10 mb-5'>
//                             <label>
//                                 <span className="text-sm font-medium text-white">
//                                     Product Name :
//                                 </span>
//                                 <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-xs sm:text-sm text-neutral-800 font-medium focus:ring-1 mb-2" placeholder="Enter Product name." required />
//                             </label>
//                             <label>
//                                 <span className="text-sm font-medium text-white">
//                                     Product Price :
//                                 </span>
//                                 <div className='flex  mb-2'>
//                                     <input type="number" name="price" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-l-md text-xs sm:text-sm text-neutral-800 font-medium focus:ring-1 w-full" placeholder="0" required />
//                                     <select name="" id="" className='mt-1 rounded-r-lg w-3/12 text-sm pl-1'>
//                                         <option value="THE">THB</option>
//                                         <option value="USD">USD</option>
//                                     </select>
//                                 </div>
//                             </label>
//                             <label>
//                                 <span className="text-sm font-medium text-white">
//                                     Product Type :
//                                 </span>
//                                 <div className='flex items-center justify-center'>
//                                     <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-8/12 rounded-md text-xs sm:text-sm text-neutral-800 font-medium focus:ring-1 mb-2" placeholder="Type." />
//                                     <p className='text-sm px-2'>OR</p>
//                                     <select name="" id="" className='w-4/12 px-1 py-2 -mt-1 rounded-lg' required>
//                                         <option value="" disabled>choice</option>
//                                         <option value="">Book</option>
//                                         <option value="">Food</option>
//                                         <option value="">Car</option>
//                                         <option value="">Electornic</option>
//                                     </select>
//                                 </div>
//                             </label>
//                             <label>
//                                 <span className="text-sm font-medium text-white">
//                                     Product Information :
//                                 </span>
//                                 <input type="text" name="information" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-xs sm:text-sm text-neutral-800 font-medium focus:ring-1 mb-2" placeholder="Enter Product Information." required />
//                             </label>
//                         </div>
//                         <div className='w-72'>
//                             <div className='border border-amber-400 h-60 rounded-lg mb-3' ref={showImage}></div>
//                             <label class="flex justify-center w-full pb-7 pl-7">
//                                 <input type="file" className="block w-full text-sm text-whtie
//                                 file:mr-4 file:py-2 file:px-4
//                                 file:rounded-full file:border-0
//                                 file:text-sm file:font-semibold
//                                 file:bg-violet-50 file:text-blue-700
//                                 hover:file:bg-blue-100 cursor-pointer
//                                 " ref={file} />
//                             </label>
//                             <div className='grid'>
//                                 <button>Confirm</button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
