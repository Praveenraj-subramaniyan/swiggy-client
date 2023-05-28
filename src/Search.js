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
  const [filteritemList, setFilterItemList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await RestaurantCard();
        if (items === "login") {
          navigate("/");
        }
        const dishes = items.flatMap((data) => data.dishes);
        setItemList(dishes);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function HandleData(event) {
    const value = event.target.value;
    setInputValue(value);
    Search(value);
  }

  function Search(valueInput) {
    const value = valueInput;
    const filteredData = itemList.filter(
      (data) =>
        data.res_name.toLowerCase().includes(value.toLowerCase()) ||
        data.dish_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterItemList(filteredData);
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
          maxLength={15}
          value={inputValue}
          onChange={HandleData}
        />
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
        <div className="container">
          <div className="row">
            {filteritemList.map((data) => (
              <DishCard
                dishName={data.dish_name}
                res_name={data.res_name}
                category={data.category}
                image={data.dish_image_url}
                price={data.price}
                rating={data.ratting}
                res_id={data.res_id}
                dish_id={data.dish_id}
                quantity={data.quantity}
              />
            ))}
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