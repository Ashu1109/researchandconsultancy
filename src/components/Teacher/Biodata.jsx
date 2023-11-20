import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import ashoksir from "../../assets/AshokSir.png";
import Footer from "../Footer/Footer";
import {
  AiFillPhone,
  AiFillMail,
  AiOutlineProfile,
  AiFillGolden,
  AiFillCaretRight,
} from "react-icons/ai";

const Biodata = () => {
  return (
    <>
      <Navbar />
      <div className="teacher">
        <div className="profile">
          <div className="pht">
            <img src={ashoksir} alt="Ashok sir" />
          </div>
          <div className="info">
            <h2>ASHOK KUMAR MONDAL</h2>
            <p>Assistant Professor</p>
            <h3>Mechanical Engineering</h3>
            <p>
              {" "}
              <AiFillPhone />
              +916206676494
            </p>
            <Link to={"/"}>
              <AiFillMail /> lavkushraj1155@gmail.com
            </Link>
          </div>
          <div className="ppt">
            <Link to={"/"}>
              <AiFillGolden /> Achievements
            </Link>
            <Link to={"/"}>
              <AiOutlineProfile />
              Biodata
            </Link>
          </div>
        </div>
        <div className="Areas">
          <h2>Responsibilities</h2>
          <div>
            <p>
              <AiFillCaretRight />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              quas provident inventore non aliquam illo omnis aperiam nisi
              doloremque, suscipit at delectus sequi quidem earum ullam
              distinctio perspiciatis vel quia.
            </p>
            <p>
              <AiFillCaretRight />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              voluptas amet ex voluptatem quia, maxime sit iusto ratione ab,
              recusandae distinctio. Delectus, mollitia cum natus incidunt
              laudantium possimus aliquid unde!
            </p>
            <p>
              <AiFillCaretRight />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              at incidunt iure necessitatibus cum doloremque exercitationem
              repellat ratione soluta voluptatibus, voluptas commodi, placeat
              tenetur eligendi! Nostrum minima ut nesciunt earum.
            </p>
          </div>

          <h2>Research Areas</h2>
          <div>
            <p>
              <AiFillCaretRight />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorem temporibus repellat blanditiis impedit asperiores
              necessitatibus tempora tempore atque? Excepturi illo eveniet quas
              corporis quos iste impedit accusamus. Suscipit, laboriosam.
            </p>
            <p>
              <AiFillCaretRight />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              at incidunt iure necessitatibus cum doloremque exercitationem
              repellat ratione soluta voluptatibus, voluptas commodi, placeat
              tenetur eligendi! Nostrum minima ut nesciunt earum.
            </p>
            <p>
              <AiFillCaretRight />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              at incidunt iure necessitatibus cum doloremque exercitationem
              repellat ratione soluta voluptatibus, voluptas commodi, placeat
              tenetur eligendi! Nostrum minima ut nesciunt earum.
            </p>
          </div>
        </div>

        <div className="sections">
          <div class="dropdown">
            <button class="dropbtn">
              Research section
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={"#"}>Link1</Link>
              <Link to={"#"}>Link2</Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              Publications
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={"#"}> Current publications</Link>
              <Link to={"#"}> Published Books</Link>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              Projects
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <Link to={"#"}>Current Projects</Link>
              <Link to={"#"}> Completed projects</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Biodata;
