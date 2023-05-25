import React, { useState } from "react";
import "./DishCard.css";
function DishCard(data) {
  const [cartData, setCartData]=useState(data)
  return (
    <div>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between">
          <div>
            <div className="row ">
              <div className="col-3">
                <img
                  src={data.image}
                  className="list-image rounded float-left"
                  alt="list"
                />
              </div>
              <div className="col mt-5 resname">
                <h5 className="">{data.resName}</h5>
              </div>
              <div className="col-12">
                <div className="row mt-2 mb-0 mx-1">
                  <div className="col-3 px-0 goldStarDiv">
                    <p>
                      <i
                        className={`fa fa-star ${
                          data.rating >= 1 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          data.rating >= 2 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          data.rating >= 3 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          data.rating >= 4 ? "goldStar" : " "
                        }`}
                      ></i>
                      <i
                        className={`fa fa-star ${
                          data.rating >= 5 ? "goldStar" : " "
                        }`}
                      ></i>
                    </p>
                  </div>
                  <div className="col-3 foodname pe-5 me-2 ps-0">
                    <p>
                      <b>{data.dishName}</b>
                    </p>
                  </div>
                  <div className="col-3 pricename">
                    <p>₹ {data.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-outline-danger">
              <span className="Addrow">Add</span> <i className="fa fa-plus"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DishCard;
