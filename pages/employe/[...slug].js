import React from 'react'
import { useRouter } from 'next/router'

export default function employe() {
  const router = useRouter();
  console.log(router.query)
  return (
    <div className='container mx-auto bg-slate-500 py-4 mt-4'>
        <h1 className='text-white text-3xl pl-4' >Emploo slags </h1>      
    </div>
  )
}
