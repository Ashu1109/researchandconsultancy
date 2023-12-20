import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./biodata.scss";
import "./profile.scss";
import Card from "./Card";
import teacherData from '../../Data/TeacherData.json'
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
          <div className="topic">All Researchers</div>
          {
            teacherData.Teacherdata.map((teacherData) =>(<Card/>))
          }
          </div>
          </div>
      <Footer />
    </>
  );
};

export default Profile;
