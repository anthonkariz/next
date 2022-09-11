import React from 'react'
import {getFeaturedEvents,tonyEvent,getAllEvents,DUMMY_EVENTS} from '../../data'
import Allevents from '../../components/allevents'
export default function eventsHome() {


    
        const tonyevent = tonyEvent()
       const getFeaturedevents = getFeaturedEvents()


 
  return (
    <div className='container mx-auto bg-slate-300 p-5 mt-3'>
        EventsHome
        <Allevents events={DUMMY_EVENTS}/>
      
    </div>
  )
}
