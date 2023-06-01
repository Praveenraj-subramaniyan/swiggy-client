import React, { useEffect, useState } from "react";
import "./Css/Cart.css";
import HomeHeader from "../Components/HomeHeader";
import { ViewCard } from "../Api/api";
import { useNavigate } from "react-router-dom";
import DishCard from "../Components/DishCard";
import Footer from "../Components/Footer";
import { CheckoutCart } from "../Api/api";

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
        console.log(items);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  async function Checkout() {
    await CheckoutCart();
    alert("Order Placed succesfully");
    navigate("/home");
  }
  if (isLoading) {
    return <div className="spinner-border  isLoading"></div>;
  }
  return (
    <div>
      <HomeHeader highlight="cart" />
      <div className="container">
        <div>
          {itemList[0] && (
            <button
              className="btn btn-outline-danger Checkoutbutton"
              onClick={() => Checkout()}
            >
              Checkout
            </button>
          )}
        </div>
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
          {!itemList[0] && (
            <div>
              No items in cart
              <br /> <br /> <br /> <br />
              <br />
              <br />
            </div>
          )}
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Cart;
