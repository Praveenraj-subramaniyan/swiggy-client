import React from "react";
import HomeHeader from "../Components/HomeHeader";
import Footer from "../Components/Footer";
import "./Css/Profile.css";

function Profile() {
  return (
    <div>
      <HomeHeader highlight="profile" />
      <div className="ProfileDiv container-fluid">
        <div className="container">
          <div className="row">
            <div className=" pt-5 col-lg-10 col-sm-12">
              <h3 className="pt-5">Praveen Raj</h3>
              <span className="me-3">8870118193</span>
              <span className="me-3">.</span> <span>spr7408870@gmail.com</span>
            </div>
            <div className=" pt-5 col-lg-2 col-sm-12 mt-5 ">
              <button className="EditProfile py-2 px-3"><b>Edit Profile</b></button>
            </div>
          </div>
        </div>
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
