import logo from "./images/swiggy.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "./Footer";
import { Navigate } from 'react-router-dom';
import { Route,Routes, useNavigate,BrowserRouter } from "react-router-dom";

function Start() {
  const navigate1 =useNavigate();
  const [isVisible, setisVisible] = useState({
    status: "visually-hidden",
    message: "null",
    for: "null",
  });
  const [loginData, setloginData] = useState({
    emailIdLogin: "",
    passwordLogin: "",
  });
  function HandleLoginData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setloginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function HandleLoginSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/login";
    axios
      .post(url, loginData)
      .then((res) => {
        console.error(res.data);
        HandleLoginResponse(res.data, "login");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function HandleLoginResponse(response, value) {
    if (response === "True") {
      const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      Cookies.set("Swiggy_client", JSON.stringify(loginData), {
        expires: expiryDate,
      });
      const cookieValue = Cookies.get("Swiggy_client");
      const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
      navigate1("/home")
    } 
    else if (response === "Invalid") {
      setisVisible({
        status: "visually-true",
        message: "Invalid username and password",
        for: value,
      });
    } else if (response === "False") {
      setisVisible({
        status: "visually-true",
        message: "Invalid password",
        for: value,
      });
    }
  }
  const [signupData, setsignupData] = useState({
    nameSignup: "",
    emailIdSignup: "",
    passwordSignup: "",
    confirmpasswordSignup: "",
  });
  function HandleSignUpData(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setsignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  function HandleSignUpSubmit(event) {
    event.preventDefault();
    if (signupData.confirmpasswordSignup === signupData.passwordSignup) {
      const url = "http://localhost:3000/signup";
      axios
        .post(url, signupData)
        .then((res) => {
          console.error(res.data);
          HandleSignUpResponse(res.data, "signup");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      setisVisible({
        status: "visually-true",
        message: "Password Mismatch",
        for: "signup",
      });
    }
  }
  function HandleSignUpResponse(response, value) {
    if (response === "True") {
      alert("Registration succesfull");
      SwitchTab("signupDiv");
    } else if (response === "False") {
      setisVisible({
        status: "visually-true",
        message: "Already registered",
        for: value,
      });
    } else {
      setisVisible({
        status: "visually-true",
        message: "Server time out",
        for: value,
      });
    }
  }
  // let currentIndex = 0;
  // setInterval(() => {
  //   let titles = [
  //     "Hungry?",
  //     "Late night at office?",
  //     "Movie marathon?",
  //     "Game night?",
  //     "Cooking gone wrong?",
  //   ];
  //   var element = document.getElementById("ChangingElement");
  //   element.innerText = titles[currentIndex];
  //   currentIndex++;
  //   if (currentIndex === 5) {
  //     currentIndex = 0;
  //   }
  //   console.log(titles[currentIndex]);
  // }, 4000);
  function SwitchTab(value) {
    if (value === "signupDiv") {
      var element = document.getElementById(value);
      element.style.visibility = "visible";
      var element = document.getElementById("loginDiv");
      element.style.visibility = "hidden";
    } else if (value === "loginDiv") {
      var element = document.getElementById(value);
      element.style.visibility = "visible";
      var element = document.getElementById("signupDiv");
      element.style.visibility = "hidden";
    }
    setisVisible((preState) => ({
      ...preState,
      status: "visually-hidden",
    }));
  }
  function Close(value) {
    var element = document.getElementById(value);
    element.style.visibility = "hidden";
    setsignupData({
      nameSignup: "",
      emailIdSignup: "",
      passwordSignup: "",
      confirmpasswordSignup: "",
    });
    setloginData({
      emailIdLogin: "",
      passwordLogin: "",
    });
    setisVisible((preState) => ({
      ...preState,
      status: "visually-hidden",
    }));
  }
  function LoginVisible(value) {
    var element = document.getElementById(value);
    element.style.visibility = "visible";
  }
  return (
    <div>
      <div className="container-fluid firstrow">
        <div className="row firstrow row1 ml-5">
          <div className="container col-sm-7 ml-5">
            <div className="container firstrow mt-5 mx-5">
              <div className="row col-12 firstrow  ">
                <div className="col-6">
                  <img className="logo" src={logo} />
                  <span className="Swiggycolour">swiggy</span>
                </div>
                <div className="col-6 mt-2 " id="loginsign">
                  <button
                    type="button"
                    className="btn mx-2 loginButton"
                    onClick={() => LoginVisible("loginDiv")}
                  >
                    <b>Login</b>
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => LoginVisible("signupDiv")}
                  >
                    Sign Up
                  </button>
                </div>
                <div className="col-sm-12 mt-5">
                  <h1 id="ChangingElement">Hungry?</h1>
                  <h4 className="greyColour">
                    Order food from favourite restaurants near you.
                  </h4>
                </div>
                <div className="row">
                  <div className="col-sm-10 mt-5 ">
                    <div className="search-bar">
                      <input
                        type="text"
                        placeholder="Enter delivery location"
                      ></input>
                      <button type="submit">Find Food</button>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-secondary">POPULAR CITIES IN INDIA</p>
                <p className="mt-3 cities">
                  Ahmedabad <span className="text-secondary">Bangalore</span>{" "}
                  Chennai <span className="text-secondary">Delhi</span> Gurgaon
                  <span className="text-secondary"> Hyderabad </span>
                  Kolkata
                  <span className="text-secondary"> Mumbai </span> Pune & more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-5 imagefirstDiv firstrow">
            <img
              className="firstImage"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid brownColour">
        <div className="row">
          <div className="col-sm-4">
            <img
              className=""
              width="104"
              height="199"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
            />
            <h6 className="mt-3">No Minimum Order</h6>
            <p>
              Order in for yourself or for the group,
              <br /> with no restrictions on order value
            </p>
          </div>
          <div className="col-sm-4">
            <img
              className=""
              width="112"
              height="206"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
            />
            <h6 className="mt-3">Live Order Tracking</h6>
            <p>
              Know where your order is at all times,
              <br /> from the restaurant to your doorstep
            </p>
          </div>
          <div className="col-sm-4">
            <img
              className=""
              width="124"
              height="188"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
            />
            <h6 className="mt-3">Lightning-Fast Delivery</h6>
            <p>
              Experience Swiggy's superfast delivery,
              <br /> for food delivered fresh & on time
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <div className="container-fluid loginDiv" id="loginDiv">
        <div className="row">
          <div className="col-8 loginleftDiv"></div>
          <div className="col-4 loginrighttDiv">
            <button
              className="btn "
              value="loginDiv"
              onClick={() => Close("loginDiv")}
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="row createAcc">
              <div className="col-5  mt-4  ms-3 pe-0 ps-0">
                <h4 className="Login">Login</h4>

                <p onClick={() => SwitchTab("signupDiv")}>
                  or{" "}
                  <button className="btn orangeColour switchTapButton">
                    {" "}
                    Create an account{" "}
                  </button>
                </p>
              </div>
              <div className="col-5 ">
                <img
                  width="100"
                  height="105"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                />
              </div>
            </div>
            <form onSubmit={HandleLoginSubmit}>
              <div className="row inputBoxDiv">
                <div className="col-12  mt-4  ms-3">
                  <input
                    className="pt-3 ps-2 pb-3 inputLogin"
                    placeholder="Email"
                    type="email"
                    onChange={HandleLoginData}
                    name="emailIdLogin"
                    id="emailid"
                    value={loginData.emailIdLogin}
                    required
                  />
                  <input
                    className="mt-3 pt-3 ps-2 pb-3 inputLogin"
                    placeholder="Password"
                    type="password"
                    onChange={HandleLoginData}
                    name="passwordLogin"
                    value={loginData.passwordLogin}
                    required
                  />
                  <label
                    htmlFor="emailIdLogin"
                    className={
                      isVisible.for === "login"
                        ? isVisible.status
                        : "visually-hidden"
                    }
                  >
                    {isVisible.message}
                  </label>
                </div>
                <div>
                  <button
                    className="btn LoginButton mt-4 ms-3 pt-1 pb-2"
                    type="submit"
                  >
                    Login
                  </button>
                  <p className=" ms-3 mt-1">
                    <span className="text-secondary">
                      By clicking on Login, I accept the{" "}
                    </span>
                    Terms & Conditions & Privacy Policy
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid loginDiv" id="signupDiv">
        <div className="row">
          <div className="col-8  loginleftDiv"></div>
          <div className="col-4   loginrighttDiv">
            <button className="btn " onClick={() => Close("signupDiv")}>
              <i className="fas fa-times"></i>
            </button>
            <div className="row createAcc">
              <div className="col-5  mt-4  ms-3 pe-0 ps-0">
                <h4 className="Login">Sign up</h4>
                <p onClick={() => SwitchTab("loginDiv")}>
                  or{" "}
                  <button className="btn orangeColour switchTapButton">
                    {" "}
                    login to your account{" "}
                  </button>
                </p>
              </div>
              <div className="col-5 ms-3">
                <img
                  width="100"
                  height="105"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                />
              </div>
            </div>
            <form onSubmit={HandleSignUpSubmit}>
              <div className="row inputBoxDiv">
                <div className="col-12  mt-4  ms-3">
                  <input
                    placeholder="Name"
                    type="text"
                    required
                    className="pt-3 ps-2 pb-3 mb-3 inputLogin"
                    name="nameSignup"
                    value={signupData.nameSignup}
                    onChange={HandleSignUpData}
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    required
                    className="pt-3 ps-2 pb-3 mb-3 inputLogin"
                    id="emailidsignup"
                    name="emailIdSignup"
                    value={signupData.emailIdSignup}
                    onChange={HandleSignUpData}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    className="pt-3 ps-2 pb-3 inputLogin"
                    name="passwordSignup"
                    value={signupData.passwordSignup}
                    onChange={HandleSignUpData}
                  />
                  <input
                    placeholder="Confirm password"
                    type="password"
                    required
                    className="mt-3 pt-3 ps-2 pb-3 inputLogin"
                    name="confirmpasswordSignup"
                    value={signupData.confirmpasswordSignup}
                    onChange={HandleSignUpData}
                  />
                  <label
                    htmlFor="emailid"
                    className={
                      isVisible.for === "signup"
                        ? isVisible.status
                        : "visually-hidden"
                    }
                  >
                    {isVisible.message}
                  </label>
                </div>
                <div>
                  <button
                    className="btn LoginButton mt-4 ms-3 pt-1 pb-2"
                    type="submit"
                  >
                    Sign up
                  </button>
                  <p className=" ms-3 mt-1">
                    <span className="text-secondary">
                      By creating an account, I accept the{" "}
                    </span>
                    Terms & Conditions & Privacy Policy
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
