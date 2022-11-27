import "../Login/Login.css";
import React from "react";
import { Navbar } from "../Navbar/Navbar";
 import { users } from "../../backend/db/users";
import { useAuth } from "../../context/auth-context";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export const LoginPage = () => {
  const [userDetail, setUserDetail] = useState({email:"",password:""});
  const { user, setUser } = useAuth();

 const navigate = useNavigate();
 
  //  const testCredentials = {
  //    email: "abc@gmail.com",
  //    password: "abc123",
  //  };
    const loginHandler = (e) => {
      const { name, value } = e.target;
      setUserDetail((prev) => ({ ...prev, [name]: value }));
    };
 
  const logInUserHandler = async()=> {
    
     try{
     
       const response = await axios.post("/api/auth/login",userDetail);
       console.log(response);
       setUser({
         users: response.data.foundUser,
        token: response.data.encodedToken,
      });
     
       navigate("/");
       console.log(user)
      
      console.log(response.data.foundUser);
     
     }
     
     catch(error)
     {
        console.log(error)
     }
  };
  

  return (
    <>
      <Navbar />
      <div>
        <div className="login-container">
          <h2 className="login-heading">Login</h2>
          <div>Please enter your email and password</div>

          <input
            name="email"
            id="email-auth"
            onChange={(e) => loginHandler(e)}
            value={userDetail.email}
            type="text"
            placeholder="Email"
            autoComplete="on"
          />
          <input
            name="password"
            id="password-auth"
            onChange={(e) => loginHandler(e)}
            value={userDetail.password}
            type="password"
            placeholder="Password"
            autoComplete="on"
          />

          <button className="login-button" onClick={() => logInUserHandler()}>
           
            <h4>CONTINUE</h4>
           
          </button>
          <Link to="/signup">
            <div class="sign-up-text">
               Don't have an account? <span class="sign-up-link">Sign up!</span>
            </div>
          </Link>
          <div class="guest-credentials-link"> Use Guest Credentials</div>
        </div>
      </div>
    </>
  );
};
