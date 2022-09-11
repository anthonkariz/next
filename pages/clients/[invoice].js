import React from 'react'
import { useRouter } from 'next/router'

export default function invoice() {
   const router = useRouter();
   console.log(router.pathname)
   console.log(router.query)



  return (
    <div>
        <h1>invoice</h1>
      
    </div>
  )
}
