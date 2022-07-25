import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function NavBar() {
  const { asPath } = useRouter();
  const [getRoute, setGetRoute] = useState("");
  useEffect(() => {
    setGetRoute(asPath);
    console.log(getRoute);
  }, [asPath]);
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
    <nav className="navbar navbar-expand-md navbar-dark " id="nav-all">
      <i
        style={{ fontSize: "50px", color: "black" }}
        className="navbar-toggler bi bi-list"
        data-toggle="collapse"
        data-target="#royalnav"
      ></i>
      <h2 className=" d-md-block d-lg-none blog-name-res">Newsimefy</h2>

      <div
        className="collapse navbar-collapse justify-content-center  "
        id="royalnav"
      >
        <ul className="navbar-nav  nav-background pl-4  pr-5 pb-3 animate__animated animate__fadeInDown shadow ">
          <li id={getRoute === "/" ? "navText" : ""} className="nav-item  ml-5 mt-4">
            <Link href="/" id=" listMargin">
              <a id="listMargin">HOME</a>
            </Link>
          </li>

         

          <li  id={getRoute === ( "/category/sport"|| "/category/politics"|| "/category/education") ? "navText" : ""} className="nav-item listMargin dropdown show ml-5 mt-4" style={{cursor:'pointer'}}>
            <a
           
              id="listMargin dropdownMenuLink"
              className="dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{color:"#676767"}}
            >
             CATEGORY
            </a>

            <ul id="dropdownBorder" className="dropdown-menu  shadow animate__animated animate__fadeInDown" aria-labelledby="dropdownMenuLink">
            <li id="dropdownItem" className="dropdown-item">
            <Link href="/category/Sport" >
              <a >Sport</a>
            </Link>
          </li> 
              <li id="dropdownItem" className="dropdown-item">
              <Link href="/category/politics" >
                <a >Politics</a>
              </Link>
            </li>
            <li id="" className="dropdown-item">
            <Link href="/category/education" >
              <a >Education</a>
            </Link>
          </li>
            </ul>
          </li>

         

          <li
            id={getRoute === "/contact" ? "navText" : ""}
            className="nav-item ml-5 mt-4"
          >
            <Link
              href="/contact"
              className="nav-link"
              style={{ color: "#2d3e50" }}
            >
              <a id="listMargin">CONTACT</a>
            </Link>
          </li>

          <li
         
          className="nav-item ml-5 mt-4"
        >
          <Link
            href="#?"
            className="nav-link"
            style={{ color: "#2d3e50" }}
          >
            <a id="listMargin">ABOUT</a>
          </Link>
        </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
