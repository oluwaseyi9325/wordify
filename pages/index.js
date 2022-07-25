import styles from "../styles/Home.module.css";
import Link from "next/link";
import HeaderSection from "../Component/Header";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";
import Carousel from "../Component/Carousel";
import React, { useState, useEffect } from "react";
import NewsFeed from "../Component/NewsFeed";

export default function Home({posts}) {
  return (
    <React.Fragment>
      <HeaderSection />

      <div className="mt-5">
        <h1 className="text-center blog-name d-md-none d-sm-none d-xs-none d-lg-block">
          Newsimefy{" "}
        </h1>
      </div>

      <div className="colomn sticky-top ">
        <NavBar />
      </div>
      <div
        className="mt-4 container"
        style={{ borderBottom: "1px solid lightgrey" }}
      ></div>
      <section className="mb-5 mt-5">
        <Carousel />
      </section>

      <section className="container">
        <h1>Latest news:</h1>
        <NewsFeed posts={posts} />
      </section>

   
    </React.Fragment>
  );
}

export async function getServerSideProps(){
  
  const response= await fetch("http://localhost:1337/api/posts")
  const dataPost = await response.json()
  console.log(dataPost.data)

  return{
    props:{
       posts:dataPost.data
    }
  }


}
