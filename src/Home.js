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
  useEffect(() => {
    async function SendResponse() {
      const url = "http://localhost:3000/home";
      let listData = await axios
        .get(url)
        .then((res) => {
          setItemList(res.data);
          console.error(res.data);
          //HandleResponse(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    SendResponse();
  }, []);
  return (
    <div>
      <HomeHeader />
      <div className="HeaderRow1">
        <div className="row HeaderRow ">
          <div className=" col restaurantsCountDiv Poogavanapuramdiv">
            <span>1525 restaurants</span>
          </div>
          <div className="offset-1 col-7 btn-group  HomeHeader  Relevance ">
            <button className="btn "><a className="activeHomeBtn">Relevance</a></button>
            <button className="btn "><a className="activeHomeBtn"> Rating ...</a></button>
            <button className="btn "><a className="activeHomeBtn">Cost:Low To High</a></button>
            <button className="btn "><a className="activeHomeBtn">Cost:High To Low</a></button>
            <button className="btn "><a className="activeHomeBtn">Filters</a></button>
          </div>
        </div>
      </div>
      <div className="HeaderRowBorder"></div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {itemList.map((item) => {
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
