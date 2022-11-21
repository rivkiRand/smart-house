import React from 'react'
import { useState } from 'react'
import './AddProduct.css'

export default function AddProduct(props) {

    const [product,setProduct] = useState('')

    const check =()=>{
      debugger
        if(props.roomsList[props.index].products.length === 5){
            alert('ERROR')
            return
        }
        if(product === 'BOILER' && props.type !== 'bathroom'){
            alert('ERROR');
            return;
        }
        if(product === 'STEREO SYSTEM'){
            let temp = props.roomsList[props.index];
          for(let i =0; i< temp.products.length; i++){
            if(temp.products[i].typeProduct === 'STEREO SYSTEM' ){
                alert('ERROR')
                    return
            }
          }
        }
        props.AddProduct(props.index,product); 
    }

    
  return (
    <div id='addProductDiv'>
        <select name="" id="selectProduct" onChange={(e)=>{setProduct(e.target.value)}}>
            <option value="">select a product</option>
            <option value="AIR CONDITIONER">air conditioner</option>
            <option value="BOILER">boiler</option>
            <option value="STEREO SYSTEM">stereo system</option>
            <option value="LAMP">lamp</option>
        </select>
        <br />
        <button id='addProductBtn' onClick={()=>{props.setFlag(true); props.setProductFlag(false); check()}}>add product</button>
    </div>
  )
}
