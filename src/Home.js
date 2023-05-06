import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import "./Home.css";
import Card from "./Card";

function Home() {
  const [itemList, setItemList] = useState([]);
  const [filteritemList, setfilteritemList] = useState([]);
  const [buttonClick, setbuttonClick] = useState(1);
  useEffect(() => {
    const cookieValue = Cookies.get("Swiggy_client");
    const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
    async function SendResponse() {
      const url = "http://localhost:3000/home";
      let listData = await axios
        .get(url)
        .then((res) => {
          res.data.sort((a, b) => {
          if (a.res_name < b.res_name) {
            return -1;
          }
          if (a.res_name > b.res_name) {
            return 1;
          }
          return 0;
        });
          setItemList(res.data);
          setfilteritemList(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    SendResponse();
  }, []);
  function HandleHomeButton(data)
  {
    if(data==="Relevance"){
      filteritemList.sort((a, b) => {
        if (a.res_name < b.res_name) {
          return -1;
        }
        if (a.res_name > b.res_name) {
          return 1;
        }
        return 0;
      });
      setbuttonClick(1);
    }
    else if(data==="Rating"){
      filteritemList.sort((a, b) => {
        if (a.ratting > b.ratting) {
          return -1;
        }
        if (a.ratting < b.ratting) {
          return 1;
        }
        return 0;
      });
      setbuttonClick(2);
    }
    else if(data==="Low"){
      setbuttonClick(3);
      console.log("3");
      console.log(filteritemList); 
    }
    else if(data==="High"){
      setbuttonClick(4);
      console.log("4");
      console.log(filteritemList); 
    }
  }
  return (
    <div>
      <HomeHeader />
      <div className="HeaderRow1">
        <div className="row HeaderRow ">
          <div className=" col restaurantsCountDiv Poogavanapuramdiv">
            <span>1525 restaurants</span>
          </div>
          <div className="offset-2 col-6 btn-group  HomeHeader  Relevance ">
            <button className="btn "><a className={`activeHomeBtn1 ${buttonClick === 1 ? "activeHomeBtn" : ""}`} onClick={() =>HandleHomeButton("Relevance")}>Relevance</a></button>
            <button className="btn "><a className={`activeHomeBtn1 ${buttonClick === 2 ? "activeHomeBtn" : ""}`} onClick={() =>HandleHomeButton("Rating")}> Rating ...</a></button>
            <button className="btn "><a className={`activeHomeBtn1 ${buttonClick === 3 ? "activeHomeBtn" : ""}`} onClick={() =>HandleHomeButton("Low")}>Cost:Low To High</a></button>
            <button className="btn "><a className={`activeHomeBtn1 ${buttonClick === 4 ? "activeHomeBtn" : ""}`} onClick={() =>HandleHomeButton("High")}>Cost:High To Low</a></button>
            {/* <button className="btn "><a className={`activeHomeBtn1 ${buttonClick === 5 ? "activeHomeBtn" : ""}`}>Filters</a></button> */}
          </div>
        </div>
      </div>
      <div className="HeaderRowBorder"></div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {filteritemList[0] && filteritemList.map((item) => {
            return (
              <Card
                resName={item.res_name}
                rating={item.ratting}
                location={item.location}
                image={item.image_url}
                id={item._id}
                offer={item.offer}
                coupon={item.coupon}
              />
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Home;
