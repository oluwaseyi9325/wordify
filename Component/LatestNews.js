import React from "react";
import Image from "next/image";
import instag from "/aseet/img1.jpg";
import int from "/aseet/img2.jpg";
import inst from "/aseet/img3.jpg";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
// import { Router } from "react-router-dom";
function LatestNews({dataList}) {
   
    if (!dataList) {
        <h1>loading....</h1>
    }
    const pp=process.env.port
    const { data, error,mutate } = useSWR(`https://newsimefy.onrender.com/items?_sort=id&_order=desc`,
  
  {
    // revalidateOnFocus:false,
    // refreshInterval:1000,
    
  }  )
  const routes=useRouter()

  if(error) return (
    <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>An error occur, please contact the admin !!!</i>
       </div>
      </div>
  )
  if(!data) return (
    <div className="text-center mt-5 mb-5">
      <div className="" >
         <span  className="spinner-border text-warning spinner-border-lg" ></span>
      </div>
       <div className="mt-3 mb-4 text-muted">
         <i>Processing....</i>
       </div>
      </div>
  )
    
  return (
    <div className="mb-5">
      <div className="row ml-">
         
        {
        data.slice(0,4).map((val,i)=>{
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
                        <h5 className="card-title">{val.category}</h5>
                        <p className="card-text ">
                          <Link href="/">
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
  );
}

export default LatestNews;

export async function getStaticProps(){
  const response = await fetch(`https://newsimefy.onrender.com/items`)
  const data =await response.json()

  return{
      props:{
          dataList:data
      }
  }
}

