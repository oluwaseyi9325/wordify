import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import instag from '../aseet/img1.jpg'

function RelatedNews() {
  return (
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
 

    </div>)
}

export default RelatedNews