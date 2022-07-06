import React, { useState } from 'react'

export default function New3() {
    const[cls,setcls]=useState()
  return (
      <>
      <style>
          {`
            {color:red}
              {color:blue}
          `}
      </style>
    <div>
        <button className='btn'onClick={()=>setcls(cls==="red"?"green":"red")} >button</button>
        
    </div>
      </>
  )
}
