import React from 'react'
import { Link } from 'react-router-dom'
import pht from "../../assets/AshokSir.png";

const Card = () => {
  return (
    
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
  )
}

export default Card