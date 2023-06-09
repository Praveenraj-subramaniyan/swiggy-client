import React, { useEffect, useState } from "react";
import "./Css/Cart.css";
import HomeHeader from "../Components/HomeHeader";
import { ViewCard } from "../Api/api";
import { useNavigate } from "react-router-dom";
import DishCard from "../Components/DishCard";
import Footer from "../Components/Footer";
import { CheckoutCart } from "../Api/api";
import { Link } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const [itemList, setItemList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await ViewCard();
        if (items === "login") {
          alert("Session Expired");
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
  async function Checkout() {
    setButtonDisabled(true);
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
      <br/>
      <div className="container">
        <div>
          {itemList[0] && (
            <button
              className="btn btn-outline-danger Checkoutbutton"
              onClick={() => Checkout()}
              disabled={buttonDisabled}
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
                  key={data.dish_id}
                  quantity={data.quantity}
                />
              );
            })}
          {!itemList[0] && (
            <div className="cartzero">
              <img className="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Cart Image"/>
              <h4 className="text-secondary"> Your cart is empty</h4>
              <p className="text-secondary">You can go to home page to view more restaurants</p>
              <Link to={`/home`}>
              <button className="btn SEERESTAURANTS " type="button">
              SEE RESTAURANTS NEAR YOU
              </button>
              </Link>
              <br /> <br /> <br />
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
