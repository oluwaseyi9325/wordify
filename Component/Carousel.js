import React from "react";

function Carousel() {
  return (
    <div>
      <div className="container">
        <div
          id="carousel-all"
          className="carousel carousel-fade  slide "
          data-ride="carousel"
        >
        <ol className="carousel-indicators text-light" style={{listStyleType:'circle',fontSize:'24px'}}>
            <li data-target="#carousel-all" className="active" data-slide-to="0"> </li>
            <li data-target="#carousel-all"  data-slide-to="1"> </li>
            <li data-target="#carousel-all" data-slide-to="2"> </li>
           
           
  </ol>

          <div className="carousel-inner">
            <div className="carousel-item active text-center p-4 bg-info carol-1 animate__animated animate__fadeInDown">
              <h1
                className="carousel-header mt-4 blog-name-car"
                style={{ color: "grey" }}
                id="head-1"
              >
                Welcome to <span className="">Newsimefy</span>
              </h1>
              <p
                className="carousel-text  mt-3 text-light"
                id="text-1"
                style={{
                  letterSpacing: "1px",
                  fontSize: "20px",
                  lineHeight: "30px",
                }}
              >
                We are NEWS-Blog company, ready to provide Latest trends and
                World news in all aspect-- Entertainment , Sport , Politics ,
                Animal Wide . etc <i>ENROL YOUR CHILD.</i>
              </p>

              <div className="carousel-footer mt-4">
                <button className="btn btn-info btn-lg">
                  START READING...
                </button>
              </div>
            </div>
            <div className="carousel-item  text-center p-5 text-danger carol-2 animate__animated animate__fadeInUp">
              <h3
                className="carousel-header mt-4 blog-name-car"
                style={{ color: "grey" }}
                id="head-1"
              >
                Get Motivate From us...
              </h3>
              <p
                className="carousel-text mt-5 text-light"
                id="text-1"
                style={{
                  letterSpacing: "1px",
                  fontSize: "20px",
                  lineHeight: "35px",
                }}
              >
                We are here to motivate you with Artciles from schoolars in the
                World !!!
                <p>So get Prepare to Read....</p>
              </p>
            </div>
            <div className="carousel-item animate__animated animate__zoomIn  text-center p-5 text-white carol-3">
              <h1
                className="carousel-header mt-4 blog-name-car"
                style={{ color: "grey" }}
                id="head-1"
              >
                <i> You want to explore?</i>
              </h1>
              <h6
                className="carousel-header mt-lg-4 mt-sm-2 blog-name-car"
                style={{ color: "grey" }}
                id="head-1"
              >
                <i>
                  <small>then, Read from us...</small>
                </i>
              </h6>
              <p className="carousel-text mt-5" id="text-1">
                <button className="btn btn-lg btn-info">
                  Click to Explore
                </button>
              </p>
            </div>
          </div>
          {/* <a href="#carousel-all" className="carousel-control-prev" data-slide="prev"><span className="carousel-control-prev-icon"></span></a>
  <a href="#carousel-all" className="carousel-control-next" data-slide="next"><span className="carousel-control-next-icon"></span></a>*/}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
