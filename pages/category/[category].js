import React, { useState } from "react";
import Image from "next/image";
import instag from "/aseet/img1.jpg";
import int from "/aseet/img2.jpg";
import inst from "/aseet/img3.jpg";
import Link from "next/link";
import axios from 'axios'
import {useRouter} from 'next/router'
function CategoryNews({posts,par}) {
    console.log(posts,"feed")
    if (!posts) {
        <h1>loading....</h1>
    }
const [eve,setEve]=useState(posts)
const routes = useRouter()
    const btn=()=>{

         
        axios.get(`http://localhost:1337/api/posts?filters[title][$eq]=Sport`).then((response)=>{
            setEve(response.data.data)
            // console.log(response.data.data)
        }).catch(err=>console.log('sorry'))
  
        routes.push(`/category/${par}?filters[title][$eq]=Sport`,undefined, {shallow:true})



    }
    
  return (
    <div className="container">
    <div className="mb-5">
    <button className="btn btn-info" onClick={()=>btn()}></button>
      <div className="row ml-">
     
         
        {
        eve.map((val,i)=>{
                return(
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 box">
                    <div className="card shadow card-width">
                     
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
                              <span className="badge badge-info">10</span>
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
                        <h5 className="card-title">Sport</h5>
                        <p className="card-text ">
                          <Link href={`/category/${par}?filters[title][$eq]=sport`}>
                            <a>
                              BREAKING: Nigerian Women Team, Super Falcons Boycotts
                              Training Over Unpaid Bonuses Ahead Of ....
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

export default CategoryNews;

export async function getServerSideProps(context){
    const {query,params}=context;
    const { cate }= query;
    const getEverything= cate? `?filters[title][$eq]=${params.category}`:''
    const response= await fetch(`http://localhost:1337/api/posts${getEverything}`)
    const dataPost = await response.json()
    // console.log(dataPost.data)
    console.log(cate)
  
    return{
      props:{
         posts:dataPost.data,
         par:params.category
      }
    }
  
  
  }



