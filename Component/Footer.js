import Image from "next/image";
import React from "react";
import instag from "/aseet/Instagram-images.PNG";

function Footer() {
  return (
    <div>
      <footer className=" pb-3" style={{ backgroundColor: "black" }}>
        <section className="container" id="?">
          <div className=" row">
            <div className="col-lg-3 col-md-4 pt-4">
              <h4 className="text-light">About Us</h4>
              <p className="text-muted">
                We are NEWS-Blog company, ready to provide Latest trends and
                World news in all aspect-- Entertainment , Sport , Politics ,
                Animal Wide . etc
              </p>
            </div>

            <div className="col-lg-3 col-md-4 pt-4">
              <h4 className="text-light">Newsletter</h4>
              <p className="text-muted">Stay update with our latest</p>
              <div>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter Your Mail"
                    name="email"
                    className="form-control"
                  />
                  <div className="input-group-append">
                    <i className="bi bi-send btn btn-warning"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 pt-4">
              <h4 className="text-light">Twitter Trends</h4>

              <div>
                <Image src={instag} width={370} height={150} />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 pt-4">
              <h4 className="text-light">Follow Us</h4>
              <p className="text-muted">Let us be social</p>
              <div style={{ letterSpacing: "30px" }}>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-behance"></i>
                <i className="bi bi-youtube"></i>
              </div>
            </div>
          </div>
        </section>

        <p className="text-center text-muted mt-2">
          <small>Copyright © 2022 All Rights Reserved | Newsimefy</small>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
