import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HeaderSection from '../Component/Header'
import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer'
import Carousel from '../Component/Carousel'
import { useState,useEffect } from 'react'

export default function Home() {
  
  
  
  return (
    <div>

  <HeaderSection />

 

     <div className='mt-5'>
<h1 className='text-center blog-name d-md-none d-sm-none d-xs-none d-lg-block'>Wordify  </h1>
     </div>

      <div className='colomn sticky-top '>
          <NavBar />
      </div>
                <hr className='container text-center ' />
 
                  <section className='mb-5 mt-5'>

                  <Carousel />

                  </section>

       
    <Footer/>   
     
    </div>
  )
}
