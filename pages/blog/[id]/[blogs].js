import React from 'react'
import { useRouter } from 'next/router'

export default function comment() {
  const router = useRouter()
  console.log(router.pathname)
  console.log(router.query)
   return (
    <div className='container mx-auto bg-slate-500 my-4 py-5' >
         <h1>Comment loo lavel</h1>
    </div>
  )
}
