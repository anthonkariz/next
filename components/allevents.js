import React from 'react'

export default function Allevents(props) {
    const {events} =  props
    console.log(events)
  return(

    events.map(events=><ul className='ml-5' >
        <li className='bg-slate-100 my-4 pl-4 py-3' key={events.id}> {events.title}</li>
        
        </ul>)

  )
  
}
