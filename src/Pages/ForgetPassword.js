import React, { useEffect, useState } from "react";
import "./Css/ForgetPassword.css";
import logo from "../images/swiggy.svg";
import { ForgetPasswordApi } from "../Api/api";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const navigate = useNavigate();
  const [isVisible, setisVisible] = useState({
    status: "false",
    message: "Email id is not register",
  });
  async function HandleSubmit(event) {
    event.preventDefault();
    const response = await ForgetPasswordApi();
    if (response === true) {
      navigate("/newpassword");
    } else {
      setisVisible((prevState) => ({
        ...prevState,
        status: true,
      }));
    }
  }
  return (
    <div className="container-fluid">
      <div className="">
        <img alt="Logo" className="logo2  mt-2" src={logo} />
      </div>
      <div className="container">
      <i class="fa-solid fa-lock fa-10x"></i>
        <form action="" onSubmit={HandleSubmit}>
          <h2>Forget Password</h2>
          <input
            type="email"
            name=""
            placeholder="Email"
            id="email"
            value=""
            onChange=""
            required
          />
          <label
            htmlFor="emailid"
            className={
              isVisible.status === true ? "visually-true" : "visually-hidden"
            }
          >
            {isVisible.message}
          </label>
          <button type="submit" className="isloginbtn">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
