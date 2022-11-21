import React from 'react'
import './Add.css'

export default function Add(props) {
  return (
    <div>
        <button id='AddBtn'onClick={()=>{props.setFlag(false); props.setProductFlag(true)}}>+</button>
    </div>
  )
}
