import React,{useState} from 'react'
import Add from './Add';
import AddProduct from './AddProduct';
import Product from './Product';

export default function Room(props) {

  const [flag,setFlag] = useState(true);
  const [productFlag,setProductFlag] = useState(false);

  const showBtnAdd =()=>{
    if(flag === true){
      return <Add setFlag={setFlag} setProductFlag={setProductFlag}/>
    }
  }

  const showAddProduct = () =>{
    if(productFlag === true){
      return <AddProduct setFlag={setFlag} setProductFlag={setProductFlag} type={props.type} index={props.index} AddProduct={props.AddProduct} roomsList={props.roomsList}/>
    }
  }


  return (
    <div>
      <h2 style={{textAlign:'left',marginLeft:'70px'}}>room name: {props.name}</h2>
      <h2 style={{textAlign:'left',marginLeft:'70px'}}>room type: {props.type}</h2>
      {showBtnAdd()}
      {props.roomsList[props.index].products.map((val,index)=>{
        return <Product iconClass={val.iconClass} typeProduct={val.typeProduct} active={val.active} roomIndex={props.index} productIndex={index} onOff={props.onOff} deleteProduct={props.deleteProduct}/>
      })}
     {showAddProduct()}

    </div>
  )
}
