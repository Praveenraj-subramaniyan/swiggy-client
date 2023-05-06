import DishCard from './DishCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"
import "./DetailsPage.css";
import { Link } from "react-router-dom";

function DetailPage() {
     const history= useParams();
    const [detailList, setdetailList] = useState([])
    const [resList, setresList] = useState([])
    useEffect (() => {
        async function FetchDetailsData(){
          try {
            
            let listData = await axios.get(`http://localhost:3000/home/${history.id}`)
            setdetailList(listData.data.dishes)
            setresList(listData.data)
          }
          catch (error) {
            console.log(error)
          }
        }
        FetchDetailsData()
      },[])
    return (
     
      
        <div className="container">
            <div className="showcase mb-2">
                <img src={resList.image_url} className="hero-image img-fluid mt-3" alt="Responsive" />
            </div>
            <div className="titlecase  mb-3">
            <Link to={`/home`}>
            <a href="" className="btn btn-danger mt-2 detailsHome"><i className="fa fa-home"></i> Home</a>
            </Link>
                <span className="resDetails"><b>{resList.res_name}</b></span>
                <span className="locDetails"><b>{resList.location}</b></span>
                <span className="RatingDetails" id='rating1'><i className="fa-solid fa-star me-1 "></i>{resList.ratting}</span>
                
                {/* <button className="btn btn-outline-danger"><i className="fa fa-comments"></i> Add Review</button>
                <button className="btn btn-outline-danger"><i className="fa fa-map-marker"></i> Direction</button>
                <button className="btn btn-outline-danger"><i className="fa fa-bookmark"></i> Add Bookmark</button>
                <button className="btn btn-outline-danger"><i className="fa fa-share"></i> share</button> */}
            </div>
            <div className="contentcase">
            {
              detailList.map((data) => {
                return <DishCard dishName={data.dish_name} resName={resList.res_name} category={data.category} image={data.dish_image_url} price={data.price} ratting={data.ratting}/>
               })
            }
            </div>
        </div>
    );
}

export default DetailPage;
