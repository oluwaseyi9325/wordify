import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

function AdminNav() {
  const { asPath } = useRouter();
  const routes = useRouter();
  const [getRoute, setGetRoute] = useState("");
  const [col, setColapse] = useState("collapse");
  const [expandCol, setExpandCol] = useState("");
  useEffect(() => {
    setGetRoute(asPath);
    console.log(getRoute);
  }, [asPath]);
  const togBtn = () => {
    setExpandCol("navbar-expand-lg");
  };
  return (
    <div className="pl-3">
      <nav
        className={`navbar  navbar-dark   " id="nav-all`}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <i
          style={{ fontSize: "40px", color: "black" }}
          className="navbar-toggler bi bi-list"
          data-toggle="collapse"
          data-target="#royalnav"
          onClick={() => togBtn()}
        ></i>

        <div>
          <Image
            src={require("../public/icon-192x192.png")}
            width={50}
            height={45}
          />
        </div>

        <div
          className={` navbar-collapse justify-content-center  `}
          id="royalnav"
        >
          <ul className="list-group navbar-nav  nav-background  pb-3 animate__animated animate__fadeInLeft shadow">
            <div>
              <button
                type="button"
                onClick={() =>
                  routes.push(`/ADMIN`, undefined, { shallow: true })
                }
                className={`list-group-item list-group-item-action ${
                  getRoute === "/ADMIN" ? "active" : ""
                } h4`}
              >
                Dashboard
              </button>
              <button
                type="button"
                onClick={() =>
                  routes.push(`/ADMIN/NewsTable`, undefined, { shallow: true })
                }
                className={`list-group-item list-group-item-action ${
                  getRoute === "/ADMIN/NewsTable" ? "active" : ""
                } h4`}
              >
                News Table
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action h4"
              >
                Submitted News
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action h4"
              >
                User Commets
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action h4"
              >
                Register Editor
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action h4"
              >
                Setting
              </button>
              <button
                type="button"
                className="list-group-item list-group-item-action h4"
              >
                Logout
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;
