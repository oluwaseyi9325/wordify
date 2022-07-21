import React from 'react'
import Image from 'next/image';
import instag from '/aseet/img1.jpg'
function NewsFeed() {
  return (
      <div className='mb-5'>
      
     <h1>Latest News</h1>
     <div className='row card-deck'>
     <div className='col-lg-3 col-md-4'>
     <div class="card" style={{width: "18rem"}}>
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     </div>
     <div className='col-lg-3 col-md-4'>
     <div class="card" style={{width: "18rem"}}>
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     </div>
     <div className='col-lg-3 col-md-4'>
     <div class="card" style={{width: "18rem"}}>
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     </div>
     <div className='col-lg-3 col-md-4'>
     <div class="card" style={{width: "18rem"}}>
    
     <Image  class="card-img-top" src={instag} alt='card img' width={200} height={150} />
     <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
     </div>
     
     </div>


     <div class="card-deck row">
  <div class="card col-lg-4 col-md-5">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card col-lg-4 col-md-5">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card col-lg-4 col-md-5">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
      
      
      </div>
  );
}

export default NewsFeed