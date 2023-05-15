import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import HomeHeader from "./HomeHeader";
import "./Home.css";
import Card from "./Card";
import DishCard from "./DishCard";

function Home() {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);
  const [filteritemList, setfilteritemList] = useState([]);
  const [buttonClick, setbuttonClick] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const cookieValue = Cookies.get("Swiggy_client");
    const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
    async function SendResponse() {
      const url = "http://localhost:3000/home";
      let listData = await axios
        .post(url, loginDataFromCookie)
        .then((res) => {
          if (res.data === "") {
            navigate("/");
          }
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
          const dishes = res.data.flatMap((data) =>
            data.dishes.map((dish) => ({ ...dish, res_name: data.res_name }))
          );
          setfilteritemList(dishes);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    SendResponse();
  }, []);
  function setitem(data) {
    if (data === "Low") {
      filteritemList.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        }
        if (a.price > b.price) {
          return 1;
        }
        return 0;
      });
      setbuttonClick(3);
    } else if (data === "High") {
      filteritemList.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        }
        if (a.price < b.price) {
          return 1;
        }
        return 0;
      });
      setbuttonClick(4);
    }
  }
  function HandleHomeButton(data) {
    if (data === "Relevance") {
      itemList.sort((a, b) => {
        if (a.res_name < b.res_name) {
          return -1;
        }
        if (a.res_name > b.res_name) {
          return 1;
        }
        return 0;
      });
      setbuttonClick(1);
    } else if (data === "Rating") {
      itemList.sort((a, b) => {
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
  }
  if (isLoading) {
    return <div class="spinner-border  isLoading"></div>;
  }
  return (
    <div>
      <HomeHeader highlight="home" />

      <div className="HeaderRow1">
        <div className="row HeaderRow2 ">
          <div className=" col restaurantsCountDiv Poogavanapuramdiv">
            <span>1525 restaurants</span>
          </div>
          <div className="offset-2 col-6 btn-group  HomeHeader  Relevance ">
            <button className="btn ">
              <a
                className={`activeHomeBtn1 ${
                  buttonClick === 1 ? "activeHomeBtn" : ""
                }`}
                onClick={() => HandleHomeButton("Relevance")}
              >
                Relevance
              </a>
            </button>
            <button className="btn ">
              <a
                className={`activeHomeBtn1 ${
                  buttonClick === 2 ? "activeHomeBtn" : ""
                }`}
                onClick={() => HandleHomeButton("Rating")}
              >
                {" "}
                Rating ...
              </a>
            </button>
            <button className="btn ">
              <a
                className={`activeHomeBtn1 ${
                  buttonClick === 3 ? "activeHomeBtn" : ""
                }`}
                // onClick={() => HandleHomeButton("Low")}
                onClick={() => setitem("Low")}
              >
                Cost:Low To High
              </a>
            </button>
            <button className="btn ">
              <a
                className={`activeHomeBtn1 ${
                  buttonClick === 4 ? "activeHomeBtn" : ""
                }`}
                onClick={() => setitem("High")}
              >
                Cost:High To Low
              </a>
            </button>
            {/* <button className="btn "><a className={`activeHomeBtn1 ${buttonClick === 5 ? "activeHomeBtn" : ""}`}>Filters</a></button> */}
          </div>
        </div>
      </div>
      <div className="HeaderRowBorder"></div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {buttonClick <= 2 &&
            itemList[0] &&
            itemList.map((item) => {
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
      <div className="container">
        <div className="row">
          {buttonClick > 2 &&
            filteritemList.map((data) => {
              return (
                <DishCard
                  dishName={data.dish_name}
                  resName={data.res_name}
                  category={data.category}
                  image={data.dish_image_url}
                  price={data.price}
                  rating={data.ratting}
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
