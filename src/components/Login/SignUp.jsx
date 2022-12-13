import React from 'react';
import "../Login/Login.css";
import { useAuth } from '../../context/auth-context';
import{Link,Navigate,useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import { Navbar } from '../Navbar/Navbar';

const SignUp = () => {
  const navigate = useNavigate();
    const [userSignup,setUserSignUp] = useState(
        {
            email:"",
            password:"",
            firstName:"",
            lastName:"",
        }
        );
    const {setUser} = useAuth();
    const signUpHandler = (e) => 
    {
        setUserSignUp((previousState) => ({
            ...previousState,[e.target.name]:e.target.value,
        }))
    };
    const signUpUserHandler = async () => 
    {
        try {
            const response = await axios.post("/api/auth/signup",userSignup);
            setUser({
                users:response.data.createdUser,
                token:response.data.token,
            });
           navigate("/");
            
        }
        catch(error)
        {
            console.log(error);
        }
    }

  return (
    <div>
      <Navbar />
      <main>
        <div className="login-container">
          <h2 className="login-heading">Sign Up</h2>
          <div>Please enter your email and password</div>
          <input
            name="firstName"
            id="email-auth"
            onChange={(e) => signUpHandler(e)}
            value={userSignup.firstName}
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            id="email-auth"
            onChange={(e) => signUpHandler(e)}
            value={userSignup.lastName}
            type="text"
            placeholder="Last Name"
          />

          <input
            name="email"
            id="email-auth"
            onChange={(e) => signUpHandler(e)}
            value={userSignup.email}
            type="text"
            placeholder="Email"
          />
          <input
            name="password"
            id="password-auth"
            onChange={(e) => signUpHandler(e)}
            value={userSignup.password}
            type="password"
            placeholder="Password"
          />

          <button
            className="login-button"
            onClick={() => signUpUserHandler()}
          >
            <Link to="/" className="link-primary-solid">
              <h4>Sign Up</h4>
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
