import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'
import Image from 'next/image'
import instag from '../aseet/img1.jpg'
// import  from 'react'
// import ReactReadMoreReadLess from "react-read-more-read-less";
import ReadMoreAndLess from 'react-read-more-less';
import NewsFeedHeader from '../Component/NewsFeedHeader'
import RelatedNews from '../Component/RelatedNews'
import NewsComments from '../Component/NewsComments'
import axios from 'axios'
// import { json } from 'stream/consumers'

function news({dataList}) {
  const[NewsSec,setNewsSec]=useState(dataList[0].category)
  const[postId,setPostId]=useState(dataList[0].id)
    // const [para,setPar]=useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae .")
      // console.log(posts,"here")
      
     
  return (
    <div>
        
    <NewsFeedHeader NewsSec={NewsSec}  />
    
    <NavBar />
    <div className='mt-4 container' style={{borderBottom:'1px solid lightgrey'}}></div>
    <section className='container mt-4'>
    
     <aisde className='row'>

     <div className='col-lg-8 col-md-9'>

     {
      dataList.map((val)=>{
       return(
        <div>
        <h2>{val.description}</h2>
        <div>
        <Image src={val.imgUrl} height={400} width={800} />
       
      </div>
      <p className='mt-3'>{val.body}</p>
        </div>
       )
      })
     }

    

       <p className='mt-3'>

     

      {/* <ReadMoreAndLess
               
                className="read-more-content"
                charLimit={250}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readLessStyle={"bg-info"}
            >
                {para}
  </ReadMoreAndLess>*/}
         

       </p>
     
     </div>

     <div className='col-lg-4 col-md-5 mt-3'>
        <h5>News Reactions:</h5>
          <NewsComments postId={postId} />
       
      <h3 className='mt-5'>Related news:-</h3>
        
      <div className=''>
      <RelatedNews NewsSec={NewsSec}  />
      </div>
      
     </div>
     
     </aisde>
     
    
    </section>

    <div className='mt-5'></div>
    </div>
  )
}

export default news

export async function getServerSideProps(context){

  const {query} = context;
  const {description}=query;
  const getQuery= description? `description=${description.replace(/ /g,"%20")}`:""
  const response = await fetch(`https://newsimefy.herokuapp.com/items?${getQuery}`)
  const data =await response.json()
  console.log(getQuery)
  return{
      props:{
          dataList:data
      }
  }
}
// https://nextjs.org/docs/api-reference/next/image