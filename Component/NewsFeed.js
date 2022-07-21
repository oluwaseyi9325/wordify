import React from 'react'
import Image from 'next/image';
import instag from '/aseet/img1.jpg'
import int from '/aseet/img2.jpg'
import inst from '/aseet/img3.jpg'
function NewsFeed() {
  return (
      <div className='mb-5'>
      
     <h1>Latest News</h1>
     <div className='row ml-'>


     <div className='col-lg-3 col-md-6 col-sm-4 mt-3 '>
     <div class="card shadow card-width">
    
     <Image  class="card-img-top" src={inst} alt='card img' width={200} height={160} />
     <div className='text-center text-muted  card-text mr-0' style={{marginTop:"-30px"}}>
      
     <section className='row'>
       
     <div className='col-5'>
     <span className=' p-2' style={{backgroundColor:"whitesmoke"}}><i class="bi bi-hand-thumbs-up"></i> Like
     <span className="badge badge-info">10</span></span>
   </div>
   <div className='col-7 '>

    <span className=' p-2' style={{backgroundColor:"whitesmoke"}}>
    <i class="bi bi-chat-left"></i> 
    <span> Comment</span><span className="badge badge-info">10</span>
    </span>
 </div>
  
     </section>
     
     </div>
    
     <div class="card-body mt-1">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
    
   </div>
     </div>


     <div className='col-lg-3 col-md-6 col-sm-4 mt-3 '>
     <div class="card shadow card-width">
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={160} />
     <div className='text-center text-muted  card-text mr-0' style={{marginTop:"-30px"}}>
      
     <section className='row'>
       
     <div className='col-5'>
     <span className=' p-2' style={{backgroundColor:"whitesmoke"}}><i class="bi bi-hand-thumbs-up"></i> Like
     <span className="badge badge-info">10</span></span>
   </div>
   <div className='col-7 '>

    <span className=' p-2' style={{backgroundColor:"whitesmoke"}}>
    <i class="bi bi-chat-left"></i> 
    <span> Comment</span><span className="badge badge-info">10</span>
    </span>
 </div>
  
     </section>
     
     </div>
    
     <div class="card-body mt-1">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
    
   </div>
     </div>


     <div className='col-lg-3 col-md-6 col-sm-4 mt-3 '>
     <div class="card shadow card-width">
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={160} />
     <div className='text-center text-muted  card-text mr-0' style={{marginTop:"-30px"}}>
      
     <section className='row'>
       
     <div className='col-5'>
     <span className=' p-2' style={{backgroundColor:"whitesmoke"}}><i class="bi bi-hand-thumbs-up"></i> Like
     <span className="badge badge-info">10</span></span>
   </div>
   <div className='col-7 '>

    <span className=' p-2' style={{backgroundColor:"whitesmoke"}}>
    <i class="bi bi-chat-left"></i> 
    <span> Comment</span><span className="badge badge-info">10</span>
    </span>
 </div>
  
     </section>
     
     </div>
    
     <div class="card-body mt-1">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
    
   </div>
     </div>



     <div className='col-lg-3 col-md-6 col-sm-4 mt-3 '>
     <div class="card shadow card-width">
    
     <Image  class="card-img-top" src={int} alt='card img' width={200} height={160} />
     <div className='text-center text-muted  card-text mr-0' style={{marginTop:"-30px"}}>
      
     <section className='row'>
       
     <div className='col-5'>
     <span className=' p-2' style={{backgroundColor:"whitesmoke"}}><i class="bi bi-hand-thumbs-up"></i> Like
     <span className="badge badge-info">10</span></span>
   </div>
   <div className='col-7 '>

    <span className=' p-2' style={{backgroundColor:"whitesmoke"}}>
    <i class="bi bi-chat-left"></i> 
    <span> Comment</span><span className="badge badge-info">10</span>
    </span>
 </div>
  
     </section>
     
     </div>
    
     <div class="card-body mt-1">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   
    
   </div>
     </div>
     
     </div>


    
      
      
      </div>
  );
}

export default NewsFeed