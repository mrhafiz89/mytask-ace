
import React, { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth_services from "../services/auth_services";
import { useNavigate } from "react-router-dom";

const checkLogin = {
  username: "",
  password: ""
}

const registerUser = {
  name: "",
  email: "",
  usernameRegister: "",
  passwordRegister: "",
  address: ""
}

export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const options = [
    {
      label: "Subang Jaya",
      value: "Subang Jaya",
    },
    {
      label: "Petaling Jaya",
      value: "Petaling Jaya",
    },
    {
      label: "Shah Alam",
      value: "Shah Alam",
    },
    {
      label: "Klang",
      value: "Klang",
    },
  ];

  
  const [formValue, setFormValue] = useState(checkLogin);
  const {username, password} = formValue;

  const [formRegister, setFormRegister] = useState(registerUser);
  const {name, email, address, usernameRegister, passwordRegister} = formRegister;

  const navigates = useNavigate();

  const handleChange = (e)=> {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  };

  const handleChangeRegister = (e)=> {
    setFormRegister({...formRegister, [e.target.name]: e.target.value})
    //console.log(e.target.value);
  };

  const handleLogin = async () => {
    if(username && password){
      //console.log(usernameRegister+"-"+passwordRegister);
      try {
        await auth_services.login(username, password);
        await toast.success('Thank You '+username,{
           position: toast.POSITION.BOTTOM_RIGHT
        });
      
      //console.log(data);
      localStorage.setItem("is_login", true);
       setTimeout(() => {
          navigates('/dashboard');
        },2000);

      }catch(error){
        //console.log(error.response.data);
        toast.error(error.response.data.message,{
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
     
    }else{
      toast.error('Please type input',{
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  const handleRegister = async () => {
    if(usernameRegister && passwordRegister){
      //console.log(usernameRegister, email, passwordRegister, address, name);
      try {
        await auth_services.register(usernameRegister, email, passwordRegister, address, name);
        //console.log("xxxx");
        await toast.success('Thank You!!! '+username,{
           position: toast.POSITION.BOTTOM_RIGHT
        });
        
       setTimeout(() => {
          navigates('/');
        },1000);

      }catch(error){
        //console.log(error.response.data);
        toast.error(error.response.data.message,{
          position: toast.POSITION.BOTTOM_RIGHT
        });
      }
     
    }else{
      toast.error('Please type input',{
        position: toast.POSITION.BOTTOM_RIGHT
      });
    }
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <div className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <a href="#"><span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span></a>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={()=> handleLogin()}>
                Submit
              </button>
              <ToastContainer />
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <div className="Auth-form">
        <div className="Auth-form-content">
          <h3 href="#" className="Auth-form-title" onClick={changeAuthMode}>Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <a href="#"><span href="#" className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span></a>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="name"
              value={name}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
              name="usernameRegister"
              value={usernameRegister}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="form-group mt-3">
            <label>City Address</label>
            <select 
              className="form-control mt-1"
              name="address"
              value={address} 
              onChange={handleChangeRegister}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
            
          </select>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name="passwordRegister"
              value={passwordRegister}
              onChange={handleChangeRegister}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={()=> handleRegister()}>
              Submit
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}
