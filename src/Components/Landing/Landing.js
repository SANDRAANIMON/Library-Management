import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="land">
        <div className="tsk">
          <div className="hd_icon">
            <i className="fas fa-check"></i>{" "}
          </div>
          libraree.
        </div>

        <div className="land_mid">
          <h1>libraree, Read and Grow</h1>
          <br />
          <h5>
            The more you read, the smarter you will get! We’re the place for
            reading, writing and research.
          </h5>
        </div>
        <div className="mid_btn">
          <Link to="/login">
            <button className="mid1">Get Started</button>
          </Link>
        </div>
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <div className="dot4"></div>
      </div>
    </>
  );
};

export default Landing;
