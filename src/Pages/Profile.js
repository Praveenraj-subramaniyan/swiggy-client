import React, { useState } from "react";
import HomeHeader from "../Components/HomeHeader";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import "./Css/Profile.css";

function Profile() {
  const [buttonClick, setbuttonClick] = useState(1);
  const navigate = useNavigate();
  function Logout() {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      navigate("/");
    }
  }
  return (
    <div>
      <HomeHeader highlight="profile" />
      <div className="ProfileDiv">
        <div className="containerprofilediv px-3">
          <div className="row ps-5">
            <div className=" pt-5 col-lg-10 col-sm-12">
              <h3 className="pt-5">Praveen Raj</h3>
              <span className="me-3">8870118193</span>
              <span className="me-3">.</span> <span>spr7408870@gmail.com</span>
            </div>
            <div className=" pt-5 col-lg-2 col-sm-12 mt-5 pb-5">
              <button className="EditProfile py-2 px-3">
                <b>Edit Profile</b>
              </button>
            </div>
          </div>
          <div className="Profilebuttondiv ps-4">
            <button
              className={` ${
                buttonClick === 1
                  ? "bg-light Profilebuttonclicked"
                  : "Profilebutton"
              }`}
              onClick={() => {
                setbuttonClick(2);
              }}
            >
              Address
            </button>
            <button
              className={` ${
                buttonClick === 2
                  ? "bg-light Profilebuttonclicked"
                  : "Profilebutton"
              }`}
              onClick={() => {
                setbuttonClick(1);
              }}
            >
              Orders
            </button>
            <button
              className={` ${
                buttonClick === 3
                  ? "bg-light Profilebuttonclicked"
                  : "Profilebutton"
              }`}
              onClick={() => Logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className=" ProfilesecondDiv pt-5 px-5">
        {buttonClick === 1 && <div>
          
          </div>}
        {buttonClick === 2 && <div>orders</div>}
        {buttonClick === 3 && <div></div>}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Profile;
