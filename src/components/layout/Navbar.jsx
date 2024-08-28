// import React, { useContext } from "react";
// import { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Context } from "../../main";
// import { MdDarkMode } from "react-icons/md";
// import { CiLight } from "react-icons/ci";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const handleNavbar = () => {
//     setShow(!show);
//   };
  
//   const isDashboard = useLocation("https://futurista-client.vercel.app/dashboard");
  
//   const { mode, setMode, isAuthenticated, user, setIsAuthenticated } = useContext(Context);
  
//   const navigateTo = useNavigate();
//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(
//         "https://futurista-server.onrender.com/api/v1/user/logout",
//         { withCredentials: true }
//       );
//       setIsAuthenticated(false);
//       toast.success(data.message);
//       navigateTo("/");
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section
//       className={
//         isDashboard.pathname === "/dashboard"
//           ? "hideNavbar"
//           : mode === "light"
//           ? "header light-navbar"
//           : "header dark-navbar"
//       }
//     >
//       <nav>
//         <div className="logo">
//           FUTURISTA<span>BLOGS</span>
//         </div>
//         <div className={show ? "links show" : "links"}>
//           <ul>
//             <li>
//               <Link to={"/"} onClick={handleNavbar}>
//                 HOME
//               </Link>
//             </li>
//             <li>
//               <Link to={"/blogs"} onClick={handleNavbar}>
//                 BLOGS
//               </Link>
//             </li>
//             <li>
//               <Link to={"/authors"} onClick={handleNavbar}>
//                 AUTHORS
//               </Link>
//             </li>
//             <li>
//               <Link to={"/about"} onClick={handleNavbar}>
//                 ABOUT
//               </Link>
//             </li>
//           </ul>
//           <div className="btns">
//             <button
//               onClick={() =>
//                 mode === "light" ? setMode("dark") : setMode("light")
//               }
//               className={
//                 mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
//               }
//             >
//               {mode === "light" ? (
//                 <CiLight className="light-icon" />
//               ) : (
//                 <MdDarkMode className="dark-icon" />
//               )}
//             </button>
//             {isAuthenticated && user && user.role === "Author" ? (
//               <Link
//                 to={"/dashboard"}
//                 onClick={handleNavbar}
//                 className="dashboard-btn"
//               >
//                 DASHBOARD
//               </Link>
//             ) : (
//               ""
//             )}
//             {!isAuthenticated ? (
//               <Link to={"/login"} onClick={handleNavbar} className="login-btn">
//                 LOGIN
//               </Link>
//             ) : (
//               <div>
//                 <button className="logout-btn" onClick={handleLogout}>
//                   LOGOUT
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <RxHamburgerMenu className="hamburger" onClick={handleNavbar} />
//       </nav>
//     </section>
//   );
// };

// export default Navbar;



import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main"; // Ensure this is the correct path


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleNavbar = () => {
    setShow(!show);
  };

  const location = useLocation("https://futurista-client.vercel.app/dashboard");
  const { mode, setMode, isAuthenticated, user, setIsAuthenticated } = useContext(Context);

  const navigateTo = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        "https://futurista-server.onrender.com/api/v1/user/logout",
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      toast.success(data.message);
      navigateTo("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <section
      className={
        location.pathname === "/dashboard"
          ? "hideNavbar"
          : mode === "light"
          ? "header light-navbar"
          : "header dark-navbar"
      }
    >
      <nav>
        <div className="logo">
          FUTURISTA<span>BLOGS</span>
        </div>
        <div className={show ? "links show" : "links"}>
          <ul>
            <li>
              <Link to={"/"} onClick={handleNavbar}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/blogs"} onClick={handleNavbar}>
                BLOGS
              </Link>
            </li>
            <li>
              <Link to={"/authors"} onClick={handleNavbar}>
                AUTHORS
              </Link>
            </li>
            <li>
              <Link to={"/about"} onClick={handleNavbar}>
                ABOUT
              </Link>
            </li>
          </ul>
          <div className="btns">
            <button
              onClick={() =>
                mode === "light" ? setMode("dark") : setMode("light")
              }
              className={
                mode === "light" ? "mode-btn light-mode" : "mode-btn dark-mode"
              }
            >
              {mode === "light" ? (
                <CiLight className="light-icon" />
              ) : (
                <MdDarkMode className="dark-icon" />
              )}
            </button>
            {isAuthenticated && user && user.role === "Author" ? (
              <Link
                to={"/dashboard"}
                onClick={handleNavbar}
                className="dashboard-btn"
              >
                DASHBOARD
              </Link>
            ) : (
              ""
            )}
            {isAuthenticated === false ? (
              <Link to={"/login"} onClick={handleNavbar} className="login-btn">
                LOGIN
              </Link>
            ) : (
              <div>
                <button className="logout-btn" onClick={handleLogout}>
                  LOGOUT
                </button>
              </div>
            )}
          </div>
        </div>
        <RxHamburgerMenu className="hamburger" onClick={handleNavbar} />
      </nav>
    </section>
  );
};

export default Navbar;

