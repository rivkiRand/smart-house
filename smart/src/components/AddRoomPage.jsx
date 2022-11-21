import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './AddRoom.css'

export default function AddRoomPage(props) {

  const [roomName,setRoomName] = useState('');
  const [roomColor,setRoomColor] = useState('');
  const [roomType, setRoomType] = useState('');

  const nav = useNavigate();

  const valid = () =>{
    if((roomName.length > 5  || roomName === '') || roomType === ''){
      alert('ERROR')
    }
    else{
     props.addRoomToRoomList(roomName,roomColor,roomType);
    }
  
  }



  return (
    <div id='addRoomDiv'>
        <select className='addRoomItem' name="" id="" onChange={(e)=>{setRoomType(e.target.value)}}>
            <option value="">select a type room</option>
            <option value="bedroom">bedroom</option>
            <option value="bathroom">bathroom</option>
            <option value="kitchen">kitchen</option>
        </select>
        <br />
        <input className='addRoomItem' onChange={(e)=>{setRoomName(e.target.value)}} type="text"  placeholder=' Enter a room name'/>
        <br />
        <input className='addRoomItem' onChange={(e)=>{setRoomColor(e.target.value)}} type="text"  placeholder=' Enter a room color'/>
        <br />
        <button id='addRoomBtn' className='addRoomItem' onClick={()=>{valid();nav('/')}}>add</button>
    </div>
  )
}
