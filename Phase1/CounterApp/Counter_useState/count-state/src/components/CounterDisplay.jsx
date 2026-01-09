import React from 'react'

const CounterDisplay = ({count}) => {
  return (
    <>
        <div className='pt-50 pb-10 flex justify-center items-center text-blue-500 text-4xl'> Value : {count} </div>
    </>
  )
}

export default CounterDisplay