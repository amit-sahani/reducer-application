//useReducer: It is a hook we use to create state. It takes two params:
// 1. reducer function: it is the function which will have the logics to modify the state. It takes two param, 1. state 2. action
// action: it will be an object which will always have a key with name "type"
// 2. initialValue
//It returns 2 things
// 1. state 2. dispatch
// disptach: It is a method to modify the state. It will take the action object
// useState => [state, setState]

import React, { useReducer, useState } from 'react'
import { initialValue, reducer } from '../Reducer'

const Counter = () => {
    const [counter, dispatch] = useReducer(reducer, initialValue)
    const [inp, setInp] = useState('')
  return (<div>
    <input value={inp} onChange={(e)=>{setInp(Number(e.target.value)|0)}} />
    <button onClick={()=>{dispatch({type:'addByValue', value: inp})}}>Add By value</button>
    <div>{counter}</div>
    <button onClick={()=>{dispatch({type:'increment'})}}>Increment</button>
    <button onClick={()=>{dispatch({type:'decrement'})}}>Decrement</button>
    </div>
  )
}

export default Counter