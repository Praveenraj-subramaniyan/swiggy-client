import "./Search.css";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import DishCard from "./DishCard";


function Search() {
  const [itemList, setItemList] = useState([]);
  const [filteritemList, setfilteritemList] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
          const dishes = res.data.flatMap((data) =>
            data.dishes.map((dish) => ({ ...dish, res_name: data.res_name }))
          );
          setItemList(dishes);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    SendResponse();
  }, []);
  function HandleData(event) {
    const target = event.target;
    const value = target.value;
    setinputValue(value);
    Search(value);
  }
  function Search(valueInput) {
    const value = valueInput;
    const filteredData = itemList.filter(
      (data) =>
        data.res_name.toLowerCase().includes(value.toLowerCase()) ||
        data.dish_name.toLowerCase().includes(value.toLowerCase())
    );
    setfilteritemList(filteredData);
  }
  if (isLoading) {
    return <div class="spinner-border isLoading"></div>;
  }
  return (
    <div>
      <HomeHeader highlight="search" />
      <div className="SearchInputBoxDivUp p-3"></div>
      <div className=" SearchInputBoxDiv  ">
        <input
          type="text"
          className="SearchInputBox mt-4 mb-5  px-4"
          placeholder="Search for restaurants and food"
          maxlength="20"
          value={inputValue}
          onChange={HandleData}
        />
        <i class="fa fa-search search-icon" aria-hidden="true"></i>
        <div className="container">
          <div className="row">
            {filteritemList[0] &&
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
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Search;
