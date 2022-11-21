import React from 'react'
import {Link} from 'react-router-dom'
import RoomList from './RoomList'

export default function homePage(props) {
  return (
    <div>
      <RoomList roomsArr={props.roomsList}/>
      <Link to={'/addroom'}><button style={{backgroundColor:'black',color:'white',width:'250px',height:'50px',fontSize:'larger',fontWeight:"bolder"}}>add room</button></Link>
    </div>
  )
}
