import React, { useEffect, useState } from "react";
import "./Cart.css";
import HomeHeader from "./HomeHeader";
import { ViewCard } from "./ApiFiles/api";
import { useNavigate } from "react-router-dom";
import DishCard from "./DishCard";

function Cart() {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await ViewCard();
        if (items === "login") {
          navigate("/");
        }
        setItemList(items);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div className="spinner-border  isLoading"></div>;
  }
  return (
    <div>
      <HomeHeader highlight="cart" />
      <div className="container">
        <div className="row">
          {itemList[0] &&
            itemList.map((data) => {
              return (
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
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
