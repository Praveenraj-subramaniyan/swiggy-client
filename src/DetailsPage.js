import DishCard from "./DishCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Cookies from "js-cookie";

function DetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [detailList, setdetailList] = useState([]);
  const [resList, setresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function FetchDetailsData() {
      try {
        const cookieValue = Cookies.get("Swiggy_client");
        const loginDataFromCookie = cookieValue
          ? JSON.parse(cookieValue)
          : null;
        //const url = `http://localhost:3000/home/${params.id}`;
        const url = `https://swiggy-server-6c69.onrender.com/home/${params.id}`;
        let listData = await axios
          .post(url, loginDataFromCookie)
          .then((res) => {
            if (res.data === "") {
              navigate("/swiggy-client");
            }
            setdetailList(res.data.dishes);
            setresList(res.data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
      }
    }
    FetchDetailsData();
  }, []);
  if (isLoading) {
    return <div class="spinner-border  isLoading"></div>;
  }
  return (
    <div>
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
          {/* <button className="btn btn-outline-danger"><i className="fa fa-comments"></i> Add Review</button>
                <button className="btn btn-outline-danger"><i className="fa fa-map-marker"></i> Direction</button>
                <button className="btn btn-outline-danger"><i className="fa fa-bookmark"></i> Add Bookmark</button>
                <button className="btn btn-outline-danger"><i className="fa fa-share"></i> share</button> */}
        </div>
        <div className="contentcase">
          {detailList.map((data) => {
            return (
              <DishCard
                dishName={data.dish_name}
                resName={resList.res_name}
                category={data.category}
                image={data.dish_image_url}
                price={data.price}
                rating={data.ratting}
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
