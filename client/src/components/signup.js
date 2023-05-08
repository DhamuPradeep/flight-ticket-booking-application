import React, { useState } from "react";
import "../css/signup.css"
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const SignUp = () => {

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
      await axios.post('http://localhost:8000/auth/register', inputs)
      .then((res) => {
          console.log("posted successfully")
          navigate("/login");
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
  
        <div className="formbold-input-flex">
          <div>
            <label for="email" className="formbold-form-label"> Email </label>
            <input
              type="email"
              name="email"
              id="email"
              className="formbold-form-input"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="phone" className="formbold-form-label"> Phone number </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="formbold-form-input"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="formbold-mb-3">
          <label for="address2" className="formbold-form-label">
            Street Address 
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="formbold-form-input"
            onChange={handleChange}
            required
          />
        </div>
  
        <div className="formbold-input-flex">
          <div>
            <label for="state" className="formbold-form-label"> State/Prvince </label>
            <input
              type="text"
              name="state"
              id="state"
              className="formbold-form-input"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label for="country" className="formbold-form-label"> Country </label>
            <input
              type="text"
              name="country"
              id="country"
              className="formbold-form-input"
              onChange={handleChange}
              required
            />
          </div>
        </div>
  
        <div className="formbold-input-flex">
          <div>
            <label for="post" className="formbold-form-label"> Post/Zip code </label>
            <input
              type="text"
              name="pincode"
              id="pincode"
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
        </div>
  
        <button className="formbold-btn" onClick={handleSubmit}>Register Now</button>
      </form>
    </div>
  </div>
    )
}

export default SignUp