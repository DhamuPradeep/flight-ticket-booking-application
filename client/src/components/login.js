import React, { useState } from "react";
import "../css/signup.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";


const LogIn = () => {

    const [inputs,setInputs] = useState({})
    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values=>({...values,[name]:value}))
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(inputs)
      await axios.post('http://localhost:8000/auth/login', inputs)
      .then((res) => {
          console.log("Login successfully")
          navigate("/");
      }).catch((error) => {
          console.log(error)
      })
    }

    return (
    <div className="formbold-main-wrapper bodybg">
    <div className="formbold-form-wrapper">
      <form  method="POST">
        <div className="formbold-form-title">
          <h2 className="">Sign Up</h2>
        </div>
  
          <div>
            <label for="firstname" className="formbold-form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="firstname"
              className="formbold-form-input"
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <label className="formbold-form-label"> PassWord </label>
            <input
              type="password"
              name="password"
              id="password"
              className="formbold-form-input"
              onChange={handleChange}
              required
            />
          </div>
      
        <button className="formbold-btn" onClick={handleSubmit}>Register Now</button>
      </form>
    </div>
  </div>
    )
}

export default LogIn