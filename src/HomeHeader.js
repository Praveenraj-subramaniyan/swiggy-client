import React, { useEffect, useState } from "react";
import logo from "./images/swiggy.svg";
import "./HomeHeader.css";
import { Link } from "react-router-dom";

function HomeHeader(data) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row HeaderRow ">
          <div className="col-1 ">
            <img className="logo1" src={logo} />
          </div>
          <div className="col-3 Poogavanapuramdiv">
            <span className="Poogavanapuram">
              <b>Poogavanapuram</b>
            </span>
            <span className="text-secondary"> chinnaiyan Colony, Poon...</span>
            <i className="fa dropdownIcon">&#xf107;</i>
          </div>
          <div
            className={`offset-2 col Searchdiv ${
              data.highlight === "home" ? "highlight" : ""
            } `}
          >
            <Link to={`/home`}>
              <i class="fa fa-home  px-2 " aria-hidden="true"></i>
              <span className="">Home</span>
            </Link>
          </div>
          <div
            className={`col Searchdiv ${
              data.highlight === "search" ? "highlight" : ""
            } `}
          >
            <Link to={`/Search`}>
              <i className="fa px-2">&#xf002;</i>
              <span className="">search</span>
            </Link>
          </div>
          <div className="col Searchdiv">
            <i class="fa fa-percent  px-2" aria-hidden="true"></i>
            <span className="">
              Offer<sup className="New"> New</sup>
            </span>
          </div>
          <div className="col Searchdiv">
            <i class="fa fa-shopping-cart  px-2" aria-hidden="true"></i>
            <span className="">Cart</span>
          </div>
          <div className="col Searchdiv overflow-hidden">
            <i class="fa fa-user  px-2" aria-hidden="true"></i>
            <span className="">Praveen</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
