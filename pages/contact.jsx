import React from "react";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import ContactForm from "../Component/ContactForm";
import ContactInfo from "../Component/ContactInfo";
import { useRouter } from "next/router";

function contact() {
  const router = useRouter();
  console.log(router);

  return (
    <React.Fragment>
      <div
        className=" pt-3 pb-3 h1 mb-5 text-center text-white container-fluid"
        style={{ backgroundColor: "#6610F2" }}
      >
        <span className="blog-name-contact">Newsimefy</span> ||
        <i className="getInTouch"> talk with us !!!</i>
      </div>
      <div className="colomn sticky-top ">
        <NavBar />
      </div>

      <ContactInfo />

      <ContactForm />

      <div className="container mt-5 mb-5">
        <div className="mt-5 " style={{ width: "100%" }}>
          <h2 className="text-center">
            <i>
              <u>Visit Our Office</u>
            </i>
          </h2>
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=LAUTECH%20OGBOMOSHO,%20Adenike%20area,%20OGBOMOSO+(SHEY-NET%20E-COMMERCE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/marine-gps/">navigation gps</a>
          </iframe>
        </div>
      </div>

      <div style={{ height: "100px" }}></div>

      <Footer />
    </React.Fragment>
  );
}

export default contact;
