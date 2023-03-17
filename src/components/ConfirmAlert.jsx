import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addConfirmAlert } from '../slice/confirmSlice'

export default function ConfirmAlert() {
  const confirmSlice = useSelector(state => state.confirm.value)
  const dispatch = useDispatch()

  return (
    <div>
      {
        confirmSlice === '' || confirmSlice.state === 'ok'
        ? ''
        : <div className='absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center'>
            <div className='absolute top-0 left-0 w-full h-full z-30 bg-neutral-800 opacity-30 backdrop-blur-3xl' onClick={() => dispatch(addConfirmAlert(''))}></div>
            <div className='boxConfirm relative w-96 min-h-min py-2 rounded-md bg-white z-50'>
              <div className='relative py-2 pb-16 text-center pt-4 px-10'>
                <p className='text-lg'>{confirmSlice.message}</p>
              </div>
              <div className='absolute bottom-2 w-full px-2 space-x-0.5 text-sm flex'>
                <button className='bg-blue-500 hover:bg-blue-600 rounded-sm w-6/12 text-white py-3 font-bold border-none' onClick={() => dispatch(addConfirmAlert({state: 'ok', alert: confirmSlice.alert}))}>Confirm</button>
                <button className='bg-red-400 w-6/12 py-3.5 rounded-sm hover:bg-red-500 text-white border-none' onClick={() => dispatch(addConfirmAlert(''))}>Cancel</button>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
