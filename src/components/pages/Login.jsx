import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from 'js-cookie';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { mode, isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://futurista-server.onrender.com/api/v1/user/login",
        { email, password, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
        // if (res.data.token) {
        //   Cookies.set('token', res.data.token, { expires: 7, secure: true, sameSite: 'strict' });
        //   console.log("Token set in cookie: " + res.data.token); // Log the token being set
        // } else {
        //   console.log("No token received from backend");
        // }
        setIsAuthenticated(true);
        setUser(res.data.user);
        toast.success(res.data.message);
        setEmail("");
        setPassword("");
        setRole("");
        navigateTo("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  if(isAuthenticated){
    return <Navigate to={'/'}/>
  }

  return (
    <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
      <section className="auth-form">
        <form onSubmit={handleLogin}>
          <h1>LOGIN</h1>
          <div>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">SELECT ROLE</option>
              <option value="Reader">READER</option>
              <option value="Author">AUTHOR</option>
            </select>
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Don't have any Account? <Link to={"/register"}>Register Now</Link>
          </p>

          <button className="submit-btn" type="submit">
            LOGIN
          </button>
        </form>
      </section>
    </article>
  );
};

export default Login;
