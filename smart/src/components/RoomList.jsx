import React from 'react'
import RoomsButton from './RoomsButton'

export default function RoomList(props) {
  return (
    <div>
        {props.roomsArr.map((val,index)=>{
            return <RoomsButton name={val.name} color={val.color} type={val.type} index={index}/>
        })}
    </div>
  )
}
