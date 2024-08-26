import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
            Thank you for visiting FUTURISTA BLOGS. We hope you find our blog both informative and enjoyable. Explore our sections and stay connected with the latest and greatest in sports, technology, automobiles, lifestyle, travel, and business.
          </p>
          <p>
            <span>Email:</span>satyaswarupjena9@gmail.com
          </p>
          <p>
            <span>Phone:</span>7735846816
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">FUTURISTA <span>BLOG</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/satyaswarup.jena07/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://github.com/satyaswarup129"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.linkedin.com/in/satyaswarup-jena-6089822a8/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
