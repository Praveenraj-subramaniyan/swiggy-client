import DishCard from "./DishCard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FoodDetailsCard } from "./ApiFiles/api";
import HomeHeader from "./HomeHeader";

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
        console.log(items._id)
        console.log(items)
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
      <HomeHeader highlight="home" />
      <div className="container">
        <div className="showcase mb-2">
          <img
            src={resList.image_url}
            className="hero-image img-fluid mt-3"
            alt="Responsive"
          />
        </div>
        <div className="titlecase  mb-3">
          <Link to={`/home`}>
            <a href="" className="btn btn-danger detailsHome">
              <i className="fa fa-home"></i> Home
            </a>
          </Link>
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
                res_name={resList.res_name}
                res_id={resList._id} 
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
