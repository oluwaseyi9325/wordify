import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
function PageNotFound() {
    const getRouter=useRouter()
    // setTimeout(()=>{
    //     getRouter.push('/')
    // },3000)
  return (
    <div>
    
    
    <div className='container text-center mt-5'>
    <div className='container mt-5'>
      <div className='mt-5'>
        <h1 className='err404 mt-5'>Oopps!</h1>
      </div>
      <div className='mt-3'>
        <h3 style={{color:'yellow'}}><b>404 - PAGE NOT FOUND</b></h3>
      </div>
      <div className='container w-50  d-lg-block d-none mt-4 h5'>
      <p style={{color:'#2d3e50'}} >The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
      </div>
      <div className='container  d-md-block d-lg-none  mt-4 h5'>
      <p style={{color:'#2d3e50'}} >The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
      </div>
      <div className='mt-3'>
      
      <Link href='/'   className='btn btn-lg text-white shadow'><a className='btn btn-lg text-light' style={{backgroundColor:'#2d3e50',borderRadius:'30px',textDecoration:'none'}}>GO TO HOMEPAGE</a></Link> 
    </div>
    </div> 
    </div>
    
    </div>
  )
}

export default PageNotFound

PageNotFound.getLayout= function getLayout(pages) {
    return(
        <div>
          {pages}
        </div>
    )
    
}

