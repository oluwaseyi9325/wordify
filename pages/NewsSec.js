import React, { useState } from "react";
import Image from "next/image";
import instag from "/aseet/img1.jpg";
import int from "/aseet/img2.jpg";
import inst from "/aseet/img3.jpg";
import Link from "next/link";
import axios from 'axios'
import {useRouter} from 'next/router'
function NewsSec({posts}) {
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
  
        routes.push(`/NewsSec?filters[title][$eq]=Sport`,undefined, {shallow:true})



    }
    
  return (
    <div className="mb-5">
    <button className="btn btn-info" onClick={()=>btn()}></button>
      <div className="row ml-">
     
         
        {
        eve.map((val,i)=>{
                return(
                    <div className="col-lg-3 col-md-6 col-sm-6 mt-5 box">
                    <div className="card shadow card-width">
                      <Image
                        className="card-img-top"
                        src={require(`../aseet/img${i+1}.jpg`)}
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
                          <Link href={``}>
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
  );
}

export default NewsSec;

export async function getServerSideProps(context){
    const {query}=context;
    const { category }= query;
    const getEverything= category? "?filters[title][$eq]=Sport":''
    const response= await fetch(`http://localhost:1337/api/posts${getEverything}`)
    const dataPost = await response.json()
    
    // console.log(category)
  
    return{
      props:{
         posts:dataPost.data
      }
    }
  
  
  }



