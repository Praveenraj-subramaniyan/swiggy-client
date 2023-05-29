import DishCard from "../Components/DishCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Css/DetailsPage.css";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { FoodDetailsCard } from "../Api/api";
import HomeHeader from "../Components/HomeHeader";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [detailList, setdetailList] = useState([]);
  const [resList, setresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await FoodDetailsCard(params.id);
        if (items === "login") {
          navigate("/");
        }
        setdetailList(items.dishes);
        setresList(items);
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
      <HomeHeader highlight="" />
      <div className="container">
        <div className="showcase mb-2">
          <img
            src={resList.image_url}
            className="hero-image img-fluid mt-3"
            alt="Responsive"
          />
        </div>
        <div className="titlecase  mb-3">
          <span className="RatingDetails btn-danger" id="rating1">
            <i className="fa-solid fa-star  pt-1 "></i>
            {resList.ratting}
          </span>
          <span className="resDetails">
            <b>
              {resList.res_name},{resList.location}
            </b>
          </span>
        </div>
        <div className="contentcase">
          {detailList.map((data) => {
            return (
              <DishCard
                dishName={data.dish_name}
                res_name={data.res_name}
                res_id={data.res_id} 
                dish_id={data.dish_id} 
                key={data.dish_id} 
                category={data.category}
                image={data.dish_image_url}
                price={data.price}
                rating={data.ratting}
                quantity={data.quantity}
              />
            );
          })}
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default DetailPage;
