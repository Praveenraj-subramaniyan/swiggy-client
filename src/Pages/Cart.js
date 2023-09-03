import React, { useEffect, useState } from "react";
import "./Css/Cart.css";
import HomeHeader from "../Components/HomeHeader";
import { ViewCard } from "../Api/api";
import { useNavigate } from "react-router-dom";
import DishCard from "../Components/DishCard";
import Footer from "../Components/Footer";
import { CheckoutCart } from "../Api/api";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import Cookies from "js-cookie";

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

  const handleFilteritemListChange = (newFilteritemList) => {
    setItemList((prevFilteritemList) =>
      prevFilteritemList.map((data) => {
        if (
          newFilteritemList.res_id === data.res_id &&
          newFilteritemList.dish_id === data.dish_id
        ) {
          return {
            ...data,
            quantity: newFilteritemList.quantity,
          };
        } else {
          return data;
        }
      })
    );
  };

  const Checkout = async (token) => {
    setButtonDisabled(true);
    const reponse = await CheckoutCart(token);
    if(reponse){
      alert("Order Placed succesfully");
      navigate("/home");
    }
    else if(!reponse){
      alert("Please try again after few minutes");
    }
    else{
      alert("Please login again to continue..");
      navigate("/");
    }
    
  }
  if (isLoading) {
    return <div className="spinner-border  isLoading"></div>;
  }
  function calculateTotalPrice() {
    let totalPrice = 0;
    itemList.forEach((data) => {
      totalPrice += data.price * data.quantity;
    });
    return totalPrice;
  }
  return (
    <div>
      <HomeHeader highlight="cart" />
      <br />
      <div className="container">
        <div>
          {itemList[0] && (
            <StripeCheckout
              stripeKey="pk_test_51Nm7cxSA4uQl4hvYvX4OqdGC27mvgMEDSQ2bhrNr3rPeGpmrpu0uI6yT1okfwqClsGd7gM4hA57YSr025O2ClJWY00VcjW8Lyd"
              token={Checkout}
              name="Swiggy Clone Checkout"
              amount={calculateTotalPrice() * 100}
              currency="INR"
              email={  Cookies.get("email") }
            >
              <button
                className="btn btn-outline-danger Checkoutbutton"
                //onClick={() => Checkout()}
                disabled={buttonDisabled}
              >
                Checkout
              </button>
            </StripeCheckout>
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
                  onFilteritemListChange={handleFilteritemListChange}
                />
              );
            })}
          {!itemList[0] && (
            <div className="cartzero">
              <img
                className=""
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
                alt="Cart Image"
              />
              <h4 className="text-secondary"> Your cart is empty</h4>
              <p className="text-secondary">
                You can go to home page to view more restaurants
              </p>
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
