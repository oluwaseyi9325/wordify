import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react'
import AdminHeader from '../../Component/AdminHeader';
import AdminNav from '../../Component/AdminNav';
import Layout from './LayoutFile/layout';

function Admin() {
    const[category,setCategory]=useState("")
    const[description,setDescription]=useState("")
    const[body,setBody]=useState("")
    const[imgUrl,setImgurl]=useState("")

    const publishBtn=()=>{
        if (category&&description&&body&&imgUrl) {
            axios.post("https://newsimefy.herokuapp.com/items",{
                "category":category,
                "description":description,
                "body":body,
                "imgUrl":imgUrl
            })
            setCategory("")
            setDescription("")
            setBody("")
            setImgurl("")
        }else{
            alert("Please , Enter all field !!!")
        }
    }


  return (
    <React.Fragment>

    <AdminHeader/>
        
   
   
       <div className='bg-white'>
       
       <div className='container-fluid'>
       <div className='row mt-5  mb-5'>
       <div className='col-lg-3 col-md-4'>
          <AdminNav/>
       </div>
       

       <div className='container col-lg-9 col-md-8' style={{borderLeft:"10px solid grey"}}>

       <div className='container'>
       <div className='row mr-5' >
       <div className='col-lg-6 col-md-7'>
 <label className='h4'>News Category:-</label>
   <select value={category} onChange={(e)=>setCategory(e.target.value)} class="form-select form-select-md " >
   <option value="">Pick Category</option>
  <option value="Politics">Politics</option>
  <option value="Sport">Sport</option>
  <option value="Education">Education</option>
 </select>

 <label className='h5'>Image:-</label>
  <input value={imgUrl} onChange={(e)=>setImgurl(e.target.value)} placeholder='Image url must be valid' className='form-control' type="url" />
  </div>

<div className='col-lg-6 col-md-7'>
   <label className='h4'>Description:_</label>
 <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control' placeholder='description' />
</div>

</div>
       </div> 

    <div className=' mt-5 container mr-5'>
      <label className='h4'>Body of the News:-</label>
      <textarea className='form-control' value={body} onChange={(e)=>setBody(e.target.value)} multiple placeholder='body' rows="10" cols="20"></textarea>
    </div>
 
    <div className='mt-5 text-right mr-3'>
      <button className='btn btn-lg btn-success' onClick={()=>publishBtn()}>Publish</button>
    </div>
       
   
   </div>

       </div>
       </div>
       </div>
        
    
           


    
    
    </React.Fragment>
  )
}

export default Admin;

