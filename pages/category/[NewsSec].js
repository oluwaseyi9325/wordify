import React, { useEffect, useState } from "react";
import Image from "next/image";
import instag from "/aseet/img1.jpg";
import int from "/aseet/img2.jpg";
import inst from "/aseet/img3.jpg";
import Link from "next/link";
import axios from 'axios'
import {useRouter} from 'next/router'
import category from "../cate";
import NewsFeedHeader from "../../Component/NewsFeedHeader";
import NavBar from "../../Component/NavBar";
function NewsSec({dataList,NewsSec}) {
    
const [eventList,setEve]=useState(dataList)
const [nam,setNam]=useState("Sport")
const routes = useRouter()
    
         
    // const btnGet=()=>{
    //         axios.get(`http://localhost:5001/details?category=${NewsSec}`).then((response)=>{
    //         setEve(response.data)
    //         // console.log(response.data.data)
    //     }).catch(err=>console.log('sorry'))
  
    //     routes.push(`/category/${NewsSec}`,undefined, {shallow:true})

    //  }


   
    if (routes.isFallback) {
      return (
        <div className="text-center">
           <div className="spinner-grow text-info"></div>
        </div>
      )
  }

  return (
    <div className="">

     

      <NewsFeedHeader NewsSec={NewsSec} />

      <NavBar  />
   
    {/*<button className="btn btn-info" onClick={()=>btn()}>click me</button>*/}
      <div className="container mb-5">
      <div className="row ml-">
      
     {
      !eventList[0] && <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>News in this category are not Ready or delayed by your Network !!!</i>
       </div>
      </div>
    }
    
         
      {
      eventList.map((val,i)=>{
        
              return(
                  <div className="col-lg-3 col-md-6 col-sm-6 mt-5 box" onClick={()=>routes.push(`/news?description=${val.description}`)}>
                  <div className="card shadow card-width">
                   <Image
                      className="card-img-top"
                      src={val.imgUrl}
                      alt="card img"
                      width={200}
                      height={160}
              />
                    <div
                      className="text-center text-muted  card-text mr-0"
                      style={{ marginTop: "-30px" }}
                    >
                      <section className="row">
                        <div className="col-5">
                          <span
                            className=" p-2"
                            style={{ backgroundColor: "whitesmoke" }}
                          >
                            <i className="bi bi-hand-thumbs-up"></i> Like
                            <span className="badge badge-info">0</span>
                          </span>
                        </div>
                        <div className="col-7 ">
                          <span
                            className=" p-2"
                            style={{ backgroundColor: "whitesmoke" }}
                          >
                            <i className="bi bi-chat-left"></i>
                            <span> Comment</span>
                            <span className="badge badge-info">10</span>
                          </span>
                        </div>
                      </section>
                    </div>
        
                    <div className="card-body mt-1">
                      <h5 className="card-title">{val.category}</h5>
                      <p className="card-text ">
                        <Link href={`/news?description=${val.description}`}>
                          <a>
                           {val.description}
                          </a>
                        </Link>
                      </p>
                      <Link href="/contact">
                        <a
                          style={{
                            border: "2px solid lightgrey",
                            backgroundColor: "whitesmoke",
                          }}
                          className="btn  btn-sm btn-outlined"
                        >
                          Read More...
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
          })
      }

    

    

    
    </div>
      </div>
    </div>
  );
}

export default NewsSec;





export async function getServerSideProps(context){

  const {query,params} = context;
  const {category}=query;
  const {NewsSec}=params;
  const getQuery= category? `category=${NewsSec}`:''
  const response = await fetch(`https://newsimefy.onrender.com/items?category=${NewsSec}`)
  const data =await response.json()
console.log(NewsSec)


  return{
      props:{
          dataList:data,
          NewsSec,
      },
     
  }
}



