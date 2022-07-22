import React from 'react'
import Link from 'next/link'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'
import Image from 'next/image'
import instag from '../aseet/img1.jpg'

function news() {
  return (
    <div>
      

        <div className=" pt-2 pb-2 h1 mb-3 text-center text-white container-fluid" style={{backgroundColor:"#6610F2"}}>
        <span className='blog-name-contact'>Category</span> ||
       <i className='getInTouch'> Sport</i>
     </div>

    <NavBar />
    <div className='mt-4 container' style={{borderBottom:'1px solid lightgrey'}}></div>
    <section className='container mt-4'>
    
     <aisde className='row'>

     <div className='col-lg-8 col-md-9'>

     <h2>BREAKING: Nigerian Women Team, Super Falcons Boycotts Training Over Unpaid Bonuses Ahead Of ....</h2>
     
       <div>
         <Image src={instag} height={400} width={800} />
       </div>

       <p className='mt-3'>
          
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec. Facilisis sed odio morbi quis. In eu mi bibendum neque egestas congue quisque egestas. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Id velit ut tortor pretium viverra suspendisse. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Eget duis at tellus at urna condimentum mattis. Id porta nibh venenatis cras sed felis eget velit. Mauris pharetra et ultrices neque ornare aenean. Dolor magna eget est lorem ipsum dolor sit. Laoreet suspendisse interdum consectetur libero id faucibus. Ipsum dolor sit amet consectetur adipiscing elit ut. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Libero volutpat sed cras ornare arcu dui vivamus. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Sit amet dictum sit amet justo donec enim diam. Sit amet luctus venenatis lectus.
     <br /> <br />
       In iaculis nunc sed augue. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Ultricies integer quis auctor elit. Gravida neque convallis a cras semper. Sit amet nulla facilisi morbi tempus iaculis. Nisi scelerisque eu ultrices vitae auctor eu. Neque ornare aenean euismod elementum nisi quis eleifend quam. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Leo in vitae turpis massa sed elementum tempus egestas. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Congue quisque egestas diam in arcu cursus euismod. Enim ut sem viverra aliquet eget sit amet. Neque vitae tempus quam pellentesque nec nam.
       
       Vel orci porta non pulvinar. Mattis nunc sed blandit libero. At erat pellentesque adipiscing commodo. Massa vitae tortor condimentum lacinia quis vel. Cursus metus aliquam eleifend mi in. Massa massa ultricies mi quis hendrerit. Nibh venenatis cras sed felis eget velit. Eget arcu dictum varius duis at. Purus in mollis nunc sed id semper. Massa vitae tortor condimentum lacinia quis vel eros.
       <br /> <br />
       Donec adipiscing tristique risus nec. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Mattis vulputate enim nulla aliquet porttitor lacus luctus. Aliquam ut porttitor leo a diam sollicitudin tempor id eu. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Pretium fusce id velit ut tortor. Fusce ut placerat orci nulla pellentesque dignissim enim. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Eget mauris pharetra et ultrices. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Varius vel pharetra vel turpis nunc. Vel pharetra vel turpis nunc eget lorem dolor sed. Dignissim enim sit amet venenatis urna. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper. Diam maecenas sed enim ut sem viverra aliquet. Tellus in hac habitasse platea dictumst vestibulum rhoncus.
       
       Sagittis id consectetur purus ut faucibus. Ut placerat orci nulla pellentesque dignissim enim sit. Sociis natoque penatibus et magnis dis parturient montes nascetur. Amet aliquam id diam maecenas ultricies mi eget mauris. Urna cursus eget nunc scelerisque. Odio ut sem nulla pharetra diam sit amet. Ac tortor vitae purus faucibus ornare suspendisse. Pellentesque habitant morbi tristique senectus et netus. Senectus et netus et malesuada fames ac turpis egestas maecenas. Purus semper eget duis at tellus at urna. Sit amet consectetur adipiscing elit. Faucibus interdum posuere lorem ipsum dolor. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Vitae purus faucibus ornare suspendisse sed nisi lacus. Adipiscing enim eu turpis egestas.

       </p>
     
     </div>

     <div className='col-lg-4 col-md-5'>
      <h3>Related news:-</h3>
      <div>
      
      <div className='pb-2 mt-3' style={{display:'flex',borderBottom:'1px solid grey'}}>
         <div className=''>
         <Link href='/'><a>BREAKING: Nigerian Women Team, Super Falcons Boycotts Training Over Unpaid Bonuses</a></Link>
         </div>
         <div className=''>
           <Image src={instag} width={300} height={200} />
         </div>
      </div>

      <div className='pb-2 mt-3' style={{display:'flex',borderBottom:'1px solid grey'}}>
      <div className=''>
      <Link href='/'><a>BREAKING: Nigerian Women Team, Super Falcons Boycotts Training Over Unpaid Bonuses</a></Link>
      </div>
      <div className=''>
        <Image src={instag} width={300} height={200} />
      </div>
   </div>

   <div className='pb-2 mt-3' style={{display:'flex',borderBottom:'1px solid grey'}}>
      <div className=''>
      <Link href='/'><a>BREAKING: Nigerian Women Team, Super Falcons Boycotts Training Over Unpaid Bonuses</a></Link>
      </div>
      <div className=''>
        <Image src={instag} width={300} height={200} />
      </div>
   </div>

   <div className='pb-2 mt-3' style={{display:'flex',borderBottom:'1px solid grey'}}>
      <div className=''>
      <Link href='/'><a>BREAKING: Nigerian Women Team, Super Falcons Boycotts Training Over Unpaid Bonuses</a></Link>
      </div>
      <div className=''>
        <Image src={instag} width={300} height={200} />
      </div>
   </div>

   <div className='pb-2 mt-3' style={{display:'flex',borderBottom:'1px solid grey'}}>
      <div className=''>
      <Link href='/'><a>BREAKING: Nigerian Women Team, Super Falcons Boycotts Training Over Unpaid Bonuses</a></Link>
      </div>
      <div className=''>
        <Image src={instag} width={300} height={200} />
      </div>
   </div>
   

      </div>
     </div>
     
     </aisde>
     
    
    </section>

    <div className='mt-5'></div>
    
    <Footer/>
    </div>
  )
}

export default news