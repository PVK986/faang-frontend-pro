import React, { useState } from 'react'
import CounterDisplay from './CounterDisplay'
import CounterControls from './CounterControls'

const CounterContainer = () => {
  
  const [count,setCount] = useState(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  const decrement = () => {
    setCount(prev => prev - 1)
  }
  const reset = () => {
    setCount(0)
  }
  
    return (
    <>

        <CounterDisplay count={count}/>
        <CounterControls onIncrement={increment} onDecrement={decrement} onReset={reset}/>
    </>
  )
}

export default CounterContainer