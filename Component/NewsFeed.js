import React from 'react'
import Image from 'next/image';
import instag from '/aseet/img1.jpg'
function NewsFeed() {
  return (
      <div className='mb-5'>
      
     <h1>Latest News</h1>
     <div className='row ml-'>
     <div className='col-lg-3 col-sm-4 mt-3'>
     <div class="card shadow card-width">
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     </div>
     <div className='col-lg-3 col-sm-4 mt-3 '>
     <div class="card shadow" >
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     </div>
     <div className='col-lg-3 col-sm-4 mt-3'>
     <div class="card shadow">
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     </div>
     <div className='col-lg-3 col-sm-4 mt-3'>
     <div class="card shadow" >
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
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