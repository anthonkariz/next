import React from 'react'
import Router, { useRouter } from 'next/router'

export default function Blogin() {
    const route = useRouter();
    console.log(route.pathname)
    console.log(route.query)
  return (
    <div className='container mx-auto bg-slate-500 my-4 py-5' >
         <h1 className='text-white pl-10 text-4lx'>Comment index {route.query.id}</h1>
    </div>
  )
}
