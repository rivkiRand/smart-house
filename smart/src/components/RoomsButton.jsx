import React from 'react'
import { Link } from 'react-router-dom'
import './RoomsButton.css'


export default function Rooms(props) {

  return (
    <div id='roomBtnDiv'>
   <Link to={`/room${props.name}`}><button id='roomBtn' style={{backgroundColor:props.color}}>{props.name}</button></Link>
    </div>
  )
}

