import axios from 'axios'
import React from 'react'
import useSWR from 'swr'
import AdminHeader from '../../Component/AdminHeader'
import AdminNav from '../../Component/AdminNav'
import Layout from './LayoutFile/layout'


function NewsTable() {
    const {data,error,mutate}=useSWR("https://newsimefy.onrender.com/items")
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
    
  if(!data) return(
    <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>Loading News Table ...</i>
       </div>
      </div>
  )
   const delBtn=(delIndex)=>{
    axios.delete(`https://newsimefy.onrender.com/items/${delIndex}`)
    mutate()
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

    
     <div className='container table-responsive'>
    
     <table className='table table-bordered table-striped '>
       <thead className='bg-dark text-white'>
          <tr>
          <th>S/N</th>
          <th>IDs</th>
          <th>Category</th>
          <th>Description</th>
           <th>Actions</th>
          </tr>
       </thead>
       <tbody>
            {
                data.map((val,i)=>{
                    return(
                        <tr key={val.id}>
                        <td>{i+1}</td>
           <td>{val.id}</td>
           <td>{val.category}</td>
           <td>{val.description}</td>
           <td className=' text-center' >
               
               <button className='btn btn-sm btn-danger' onClick={()=>delBtn(val.id)}>Delete</button>
              
               
               <button className='btn btn-sm btn-success ml-5'>Edit</button>
              
           </td>
           </tr>
                    )
                })
            }
       </tbody>
     
     </table>

    
    </div>
  

 
     
 
 </div>

     </div>
     </div>
     </div>
     
      

       

    
    
     
     
     </React.Fragment>
  )
}

export default NewsTable