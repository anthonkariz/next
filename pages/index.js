
import { useEffect,useState } from 'react';
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
//https://github.com/mschwarzmueller/nextjs-course-code/tree/02-file-based-routing
// https://github.com/bradtraversy/simple_react_pagination
export default function Home() {
  const router = useRouter();
  const goTo = (param) =>{

    router.push(`/blog/slug/${param}`)
  }

  const goTowithParams = (params)=>{
    console.log(params)
    
    router.push({
      pathname:'/blog/[id]/[blogs]',
      query:params
    })
    
  }
  useEffect(() => {
    loadJson()
  }, [])

    const  loadJson = async () =>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((json) =>{
        console.log('json')
        console.log(json)
      } )

    }


  return (
    <div className='container mx-auto bg-slate-500 py-5 my-5 pl-5 text-white'>
      <div>
      <h1>Home</h1>

      </div>
      <div>
        <ul>
        <li> <Link href='/blog'>Blog </Link> </li>
          <li> <Link href='/blog/subblog'>Blog slug </Link> </li>
          <li>
          <button className='bg-red-300 p-3 rounded-full' onClick={()=>goTo('tony')}> got to </button>
         </li>
         <li>
         <button className='bg-red-200 p-3 rounded-full mt-4'  onClick={()=>goTowithParams({id:10,blogs:'this-and-that'})}> with params  </button>
         </li>
        
        </ul>
      </div>

      <div className='container mx-auto bg-sky-200 mt-7'>
        sky

      </div>
       
    </div>
  )
}
