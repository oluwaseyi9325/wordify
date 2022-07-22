import React from 'react'

function ContactInfo() {
  return (
    <div className='container mt-5'>
  <div className='row'>
     <div className=' col-sm-6 col-xm-3 col-md-6 col-lg-3  text-center mt-3'>
        <div className='py-3 '   style={{backgroundColor:'whitesmoke',borderRadius:'10px'}} >
        <i class="bi bi-telephone-fill h1" style={{color:'#6610f2'}}></i>
        <h3>Phone</h3>
        <div>+234-823349325</div>
        </div>
     </div>
     <div className='col-sm-6 col-xm-3 col-md-6 col-lg-3 text-center mt-3'>
        <div className='py-3' style={{backgroundColor:'whitesmoke',borderRadius:'10px'}}>
        <i class="bi bi-geo-alt-fill h1 "style={{color:'#6610F2'}}></i>
        <h3 className='text-dark'>Address</h3>
        <div>N0 23,Olaolu street,Adenike</div>
        </div>
     </div>
     <div className='col-sm-6 col-xm-3 col-md-6 col-lg-3 text-center mt-3'>
        <div className=' py-3' style={{backgroundColor:'whitesmoke',borderRadius:'10px'}}>
        <i class="bi bi-clock-fill h1 " style={{color:'#6610F2'}}></i>
        <h3>Open Time</h3>
        <div>24hours</div>
        </div>
     </div>
     <div className='col-sm-6 col-xm-3 col-md-6 col-lg-3 text-center mt-3'>
        <div className='py-3' style={{backgroundColor:'whitesmoke',borderRadius:'10px'}}>
        <i class="bi bi-envelope h1 " style={{color:'#6610F2'}}></i>
        <h3>Email</h3>
        <div>sheynet@e-commerce.co.uk</div>
        </div>
     </div>
  </div>
  </div>
  )
}

export default ContactInfo