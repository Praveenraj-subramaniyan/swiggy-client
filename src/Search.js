import "./Search.css";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import { useNavigate } from "react-router-dom";
import { RestaurantCard } from "./ApiFiles/api";

function Search() {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);
  const [filteritemList, setfilteritemList] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await RestaurantCard();
        setItemList(items);
        if (items === "login") {
          navigate("/");
        }
        const dishes = items.flatMap((data) =>
        data.dishes.map((dish) => ({ ...dish, res_name: data.res_name }))
      );
      setItemList(dishes);
      setIsLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
 ;
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
    return <div className="spinner-border isLoading"></div>;
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
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
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
