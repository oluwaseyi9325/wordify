import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
function NavBar() {
    const {asPath} = useRouter()
    const [getRoute,setGetRoute]=useState("")
    useEffect(()=>{
       setGetRoute(asPath)
       console.log(getRoute)
    },[asPath])
    // const [wid, setWidth] =useState(0) 
    // const [shad,setShad]=useState('')
    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //       if (typeof window !== 'undefined') {
    //         setWidth(window.innerWidth)
    //       }
    //       console.log('my width :::', wid)
    //    })
    //   },[wid])
    //   if (wid>700) {
    //     setShad('shadow')
    //   }
  return (
    



<nav class="navbar navbar-expand-md navbar-dark "   id="nav-all">
                
               
                <i style={{fontSize:'50px',color:'black'}} className="navbar-toggler bi bi-list" data-toggle="collapse" data-target="#royalnav"></i>
                <h2 className=' d-md-block d-lg-none blog-name-res'>Wordify</h2>

                <div class="collapse navbar-collapse justify-content-center  " id="royalnav">
                
                <ul class="navbar-nav  nav-background pl-4 pt-4 pr-5 pb-2 animate__animated animate__fadeInDown shadow ">

                <li id={getRoute==="/"?"navText":""} className="nav-item  ml-5"  ><Link href="/"  id=" listMargin"><a id='listMargin'>HOME</a></Link></li>

                <li id={getRoute===""?"navText":""}  className="nav-item ml-5 dropdown"  ><Link href="" className="nav-link  dropdown-toggle" style={{color:'#2d3e50'}}><a id='listMargin'>CATEGORY</a>
                  
                
                </Link>
                <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
              </ul>
                </li>

               

                   

                <li className="nav-item listMargin dropdown show ml-5"  ><a id='listMargin dropdownMenuLink' className='dropdown-toggle' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ABOUT</a>
                
                
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
              </ul>
            
                </li>

                <li className="nav-item listMargin ml-5"  ><Link href="/" className="nav-link" style={{color:'#2d3e50'}}><a id='listMargin'>HELP</a></Link></li>


                <li id={getRoute==="/contact"?"navText":""}  className="nav-item ml-5"  ><Link href="/contact" className="nav-link" style={{color:'#2d3e50'}}><a id='listMargin'>CONTACT</a></Link></li>
                </ul>
                </div>

            </nav> 
  )
}

export default NavBar