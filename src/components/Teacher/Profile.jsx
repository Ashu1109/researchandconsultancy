import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import pht from "../../assets/AshokSir.png";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="researchContainer">
          <div className="title">Research Areas</div>
          <div className="researchsection">
            <Link>Robotics</Link>
            <Link>Energy</Link>
            <Link>Material Scince</Link>
            <Link>Biological science</Link>
            <Link>Engineering</Link>
            <Link>Chemistry</Link>
            <Link>Psycology</Link>
            <Link>Artificial Inteligence</Link>
            <Link>Computer Science</Link>
            <Link>Micro biology</Link>
            <Link>Data science</Link>
            <Link>Earth science</Link>
            <Link>Technology</Link>
            <Link>Microbiology</Link>
          </div>
        </div>
        <div className="teacherprofile">
          <Link to={"/Biodata"} className="link">
            <div className="faculties">
              <div className="card">
                <div className="image">
                  <img src={pht} alt="ashoksir" />
                  <h2>ASHOK KUMAR MONDAL</h2>
                </div>
                <div className="content">
                  <h2>ASHOK KUMAR MONDAL</h2>
                  <p>Assistant Professor</p>
                  <h3>Mechanical Engineering</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
