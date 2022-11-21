import React from 'react'
import './DeleteProduct.css'

export default function DeleteProduct(props) {
  return (
    <div id='delDiv'>
        <h3>Are you sure you want to delete this item?</h3>
        <button id='delBtn' onClick={()=>{props.setFlag(false); props.deleteProduct(props.roomIndex,props.productIndex)}}>delete</button>
    </div>
  )
}
