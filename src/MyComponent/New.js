import React, { useState } from 'react'

export default function New() {
    const[count,setcount]=useState(0)
    const inc=()=>{
        if(count<10){
        setcount(count+1)
        }
        else{
            setcount(10)
        }
    }
    const dec=()=>{
        if(count>0){
        setcount(count-1)
        }
        else{
            setcount(0)
        }
    }

  return (
    

    <div>
        <h2>{count}</h2>
      <button className='btn btn-primary mx-2' onClick={inc} >increment</button>
      <button className='btn btn-primary'onClick={dec} >decrement</button>
    </div>
  )
}
