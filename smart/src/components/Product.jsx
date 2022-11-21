import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Product.css'
import DeleteProduct from './DeleteProduct';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

export default function Product(props) {
 
  const[flag,setFlag] = useState(false);

  const onOff = () =>{
    if(props.active === 'red'){
      return 'OFF'
    }
    else{
      return 'ON'
    }
  }

  const showDeletePopUp = ()=>{
    if(flag === true){
      return <DeleteProduct deleteProduct={props.deleteProduct} roomIndex={props.roomIndex} productIndex={props.productIndex} setFlag={setFlag}/>
    }
  }

  
  return (
    <div id='productDiv'>
      <button className='productItem' id='productBtn' onClick={()=>{props.onOff(props.roomIndex,props.productIndex)}}>
       <FontAwesomeIcon id='icon' icon={props.iconClass} style={{color:props.active, fontSize:'50px'}}/></button>
       <span className='productItem'>{props.typeProduct}</span>
       <span className='productItem'>{onOff()}</span>
       {/* <button id='delete' className='productItem' onClick={()=>{setFlag(true)}}>-</button> */}
       <FontAwesomeIcon id='delete' className='productItem' onClick={()=>{setFlag(true)}} icon="fa-solid fa-trash-can"/>
       {showDeletePopUp()}
       <hr />
    </div>
  )
}

