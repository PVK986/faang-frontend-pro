import React from 'react'

const CounterControls = ({onIncrement,onDecrement,onReset}) => {
  return (
    <>
        <div className='flex gap-2 justify-center items-center'>
        <button onClick={onIncrement} className='p-2 border border-black flex items-center justify-center hover:text-red-500 cursor-pointer'>+</button>
        <button onClick={onDecrement} className='p-2 border border-black flex items-center justify-center hover:text-red-500 cursor-pointer'>-</button>
        <button onClick={onReset} className='p-2 border border-black flex items-center justify-center hover:text-red-500 cursor-pointer'>Clear</button>
        </div>
    </>
  )
}

export default CounterControls