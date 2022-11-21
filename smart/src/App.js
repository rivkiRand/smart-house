import {HashRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import AddRoomPage from './components/AddRoomPage';
import HomePage from './components/HomePage';
import {useState,useEffect} from 'react'
import Room from './components/Room';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import gg from './gg.png'


library.add(fas)


function App() {

  const [roomsList,setRoomsList] = useState([]);
  const [flag,setFalg] = useState(false);


  useEffect(()=>{
    fetch('/getData')
    .then((res)=>{
      return res.json()
    }).then((data)=>{
       setRoomsList(data)
    })
  },[flag])
  


  const addRoomToRoomList = (n,c,t)=>{
    let temp = {
      name:n,
      color:c,
      type:t,
      products:[]
    }
   
    fetch('/addRoom',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'post',
      body:JSON.stringify({
        room:temp
      })
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      setFalg(!flag)
    }).catch((err)=>{
      if(err)throw err;
    })
  }

  const AddProduct =(roomIndex,typeProduct)=>{
    let temp = {active: 'red',typeProduct,iconClass: getIconClass(typeProduct)}

    fetch('/addProductInRoom',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'post',
      body:JSON.stringify({
        myRoom:roomsList[roomIndex],
        myProduct:temp
      })
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      setFalg(!flag)
    }).catch((err)=>{
      if(err)throw err;
    })
  }
  const getIconClass =(typeProduct)=>{

    switch(typeProduct){
      case 'LAMP': return   "fa-solid fa-lightbulb"
      case 'AIR CONDITIONER': return "fa-solid fa-fan"
      case 'BOILER': return "fa-solid fa-shower"
      case 'STEREO SYSTEM': return "fa-solid fa-radio"
      default:return
    }
  }

  const onOff =(roomIndex,productIndex)=>{
      if(roomsList[roomIndex].products[productIndex].active === 'red'){
        roomsList[roomIndex].products[productIndex].active = 'green'
      }
      else{
        roomsList[roomIndex].products[productIndex].active = 'red'
      }
    
    setRoomsList([...roomsList])
  }

  const deleteProduct =(roomIndex,productIndex) =>{
    // roomsList[roomIndex].products.splice(productIndex,1);
    // setRoomsList([...roomsList])
    fetch('/deleteProduct',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'put',
      body:JSON.stringify({
        myRoom:roomsList[roomIndex],
        index:productIndex
      })
    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      setFalg(!flag)
    }).catch((err)=>{
      if(err)throw err;
    })
  }


  return (
    <div className="App">
      <img style={{marginBottom:'0px' ,marginTop:'10px',marginLeft:'26%', display:'block',position:'absolute'}} src={gg} alt="" />
      <br />
      <h1 style={{marginTop:'0px' ,textAlign:'left',display:'inline-block',marginRight:'55%'}}>Smart House</h1>
      <HashRouter>
      <Routes>

        <Route path='/' element={<HomePage roomsList={roomsList}/>}/>
        <Route path='/addroom' element={<AddRoomPage addRoomToRoomList={addRoomToRoomList}/>}/>
        
        {roomsList.map((val,index)=>{
          return <Route path={`/room${val.name}`} element={<Room name={val.name} type={val.type} index={index} AddProduct={AddProduct} deleteProduct={deleteProduct} roomsList={roomsList} onOff={onOff}/>}/>
        })}
      


      </Routes>
      </HashRouter>
   
    </div>
  );
}

export default App;
