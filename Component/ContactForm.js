import React from 'react'
import Image from 'next/image'
import contactImage from '../aseet/imgCont.svg'
function ContactForm() {
  return (
    <div>
    
     <div className='container '>

   <div className='container'>
   <div className='row mt-5'>
   <div className='col-lg-6 col-md-7 text-center'>
     <Image src={contactImage} width={400} height={400} />
   </div>

   <div className='col-lg-6 col-md-7 mt-4'>
     
   <div>
     
   <div className='from-group'>
    <input className='form-control contact-form' placeholder='Your Name'  />
   </div>
   <div className='from-group mt-4'>
   <input className='form-control  contact-form' placeholder='Email' />
  </div>
  <div className='from-group  mt-4'>
  <input className='form-control  contact-form' placeholder='Subject' />
 </div>

 <div className='from-group  mt-4'>
  <textarea className='form-control  contact-form' rows={5} placeholder='Write your message...'></textarea>
</div>

  <div className='mt-4'>
    <button className='btn btn-lg bg-dark text-light'>Send Message</button>
  </div>
   
   </div>

   </div>
  
  </div>
   </div>
     
     </div>
    
    </div>
  )
}

export default ContactForm