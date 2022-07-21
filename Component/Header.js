import React, { useState } from 'react'

function HeaderSection() {
    const [searchInput,setSearch]=useState('')
  return (
    <header className='container-fluid ' style={{backgroundColor:'#6610F2'}}>

    <div className=' row py-3 m-auto'>

    <div className='col-lg-6  col-sm-7 m-auto'>
     <div className='container '>
      <div className='container social-icon ' >
     
      <span className=''> <i className='bi bi-twitter'></i></span>
       
      <i className='bi bi-facebook'></i>

      <i className='bi bi-instagram'></i>
     
      <i className='bi bi-youtube'></i>
     
        </div>
     
     </div>
    </div>

    <div className='col-lg-6  col-sm-7 m-auto'>
    <div  className="input-group search-col">
    <input type="email" placeholder="Enter Your Mail" name="email" className='form-control search-input py-3 pl-5' />
    <div className='input-group-append'>
    <i className='bi bi-search btn text-light' style={{backgroundColor:'#510BC4'}}></i>
  
 </div>
 </div>
   {/* <div className="input-group container w-50">

    <input type="text" className="form-control  " value={searchInput} onChange={(e)=>setSearch(e.target.value)} style={{ color:'black'}} placeholder="Type Keyword to search..." aria-label="Username" aria-describedby="basic-addon1"  />

   
  </div>*/}
    </div>

      
    </div>


</header>
  )
}

export default HeaderSection