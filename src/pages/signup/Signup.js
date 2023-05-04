import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({setIsUserLoggedin}) => {

  const [showPassword, setShowPassword] = useState(false);

  let navigate= useNavigate()
  //state
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  //handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // register user function
  const register = (user)=>{
    user.fullName&&user.email&&user.password?
    axios.post("http://localhost:3009/user/signup",user)
    .then(res=>{
      alert(res.data.message);
      localStorage.setItem("blogUser",JSON.stringify(res.data.user))
      if(res.data.user){
        setIsUserLoggedin(true);
        navigate("../", { replace: true })
      }
    })
    .catch(err=>console.log(err)):alert("Fill all the fields of the form to register")
  }
  return (
      <div className="signup">
        <header className="d-flex justify-content-center pt-3">
          <h1 className="title">My Blogs</h1>
        </header>
        {/* <main className="d-flex justify-content-center">
          <div className="col col-lg-4 all-side-shadow d-flex justify-content-center">
            <div className="login-form container p-3">
              <h3 className="heading-new-account">Create a new account</h3>
              <p>It's quick and easy.</p>
              <hr />
              <div className="container text-center">
                <div className="row name-input">
                  <input
                    className="col m-1 form-control"
                    name="fullName"
                    onChange={handleChange}
                    placeholder="Full Name"
                    value={user.fullName}
                    type="text"
                  />
                  
                </div>
              </div>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className="form-control mt-2 mb-2"
                placeholder="Email address"
                value={user.email}
              />
              <input
                name="password"
                onChange={handleChange}
                type="password"
                className="form-control mt-2 mb-2"
                placeholder=" New Password"
                value={user.password}
              />
              <div className="new-account btn signup-btn new-account-button d-grid gap-2 mt-2 col-6 mx-auto" onClick={()=>{register(user)}}>
                  Sign Up
              </div>
              <hr />
              <div className="new-account d-grid gap-2 col-6  mx-auto justify-content-center p-3">
                <Link to="/login" className="anchor">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </main> */}
      <div className="row justify-content-center align-items-center h_80vh">
        <div className="col-12 col-lg-6 col-xl-4">
          <div className="login-form login-form-wrapper all-side-shadow container p-5">
            <div className="row text-start mb-3">
              <h1 className="form_title p-2">Welcome To Family</h1>
              <p className="small_text text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="fullName_input">
              <input
                name="fullName"
                onChange={handleChange}
                placeholder="Full Name"
                value={user.fullName}
                type="text"
                className="form-control my-3"
              />
              <div className="fullName_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg>
              </div>
            </div>
            <div className="email_input">
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className="form-control my-3"
                placeholder="Email address"
                value={user.email}
              />
              <div className="email_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </div>
            </div>
            <div className="password_input mb-3">
              <input
                name="password"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                className="form-control my-3"
                placeholder=" New Password"
              />
              <div className="password_icon">
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="cursor-pointer"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-slash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div
              className="new-account btn login-btn new-account-button mt-2 mb-3"
              onClick={() => {
                register(user);
              }}
            >
              Sign up
            </div>
            <div className="row">
              <div className="col-lg-12 text-center new-account ">
                <Link to="/login" className="anchor">
                    Already have an account?
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
     
      </div>
  );
};

export default Signup;    