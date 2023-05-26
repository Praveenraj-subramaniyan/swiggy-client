import React, { useState } from "react";
import "./DishCard.css";
import { CartAPI } from "./ApiFiles/api";
function DishCard(data) {
  const [cartData, setCartData] = useState(data);
  function AddCart() {
    setCartData((prevCartData) => ({
      ...prevCartData,
      quantity: +prevCartData.quantity + 1
    }));
    console.log(cartData)
    CartAPI(cartData);
  }
  function MinusCart(){
    setCartData((prevCartData) => ({
      ...prevCartData,
      quantity: +prevCartData.quantity - 1
    }));
    CartAPI(cartData);
  }
  return (
    <div>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between">
          <div>
            <div className="row ">
              <div className="col-3">
                <img
                  src={cartData.image}
                  className="list-image rounded float-left"
                  alt="list"
                />
              </div>
              <div className="col mt-5 resname">
                <h5 className="">{cartData.resName}</h5>
              </div>
              <div className="col-12">
                <div className="row mt-2 mb-0 mx-1">
                  <div className="col-3 px-0 goldStarDiv">
                    <p>
                      <i
                        className={`fa fa-star ${
                          cartData.rating >= 1 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          cartData.rating >= 2 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          cartData.rating >= 3 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          cartData.rating >= 4 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          cartData.rating >= 5 ? "goldStar" : " "
                        }`}
                      ></i>
                    </p>
                  </div>
                  <div className="col-3 foodname pe-5 me-2 ps-0">
                    <p>
                      <b>{cartData.dishName}</b>
                    </p>
                  </div>
                  <div className="col-3 pricename">
                    <p>₹ {cartData.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {cartData.quantity > 0 ? (
              <div>
                <button className="btn btn-outline-danger" onClick={MinusCart}>
                  <i className="fa fa-minus"></i>
                </button>
                <span className="quantity mx-1">{cartData.quantity}</span>
                <button className="btn btn-outline-danger" onClick={() =>(AddCart(cartData.resId,cartData.dishId))}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            ) : (
              <button className="btn btn-outline-danger" onClick={AddCart}>
                <span className="Addrow">Add</span>
                <i className="fa fa-plus"></i>{" "}
              </button>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DishCard;
