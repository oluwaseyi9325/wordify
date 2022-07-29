import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import instag from '../aseet/img1.jpg'
import useSWR from 'swr'

function RelatedNews({NewsSec}) {
  const{data,error}=useSWR(`https://newsimefy.herokuapp.com/items?category=${NewsSec}`,{  revalidateOnFocus:false,})
  if(error) return (
    <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>An error occur, please contact the admin !!!</i>
       </div>
      </div>
  )
  if(!data) return (
    <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>Processing....</i>
       </div>
      </div>
  )
  return (
    <div className=''>
      
    {
      data.slice(0,3).map(val=>{
        return(
          <div className='pb-2 mt-3' style={{borderBottom:'1px solid grey'}}>
            <div className='row'>
            <div className='col-8'>
            <Link href='/'><a>{val.description}</a></Link>
            </div>
            <div className='col-4'>
              <Image src={val.imgUrl} width={300} height={200}  />
            </div>
            </div>
       </div>
        )
      })
    }

  

 

    </div>)
}

export default RelatedNews