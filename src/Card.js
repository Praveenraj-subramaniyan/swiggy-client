import "./Card.css";
import { Link } from "react-router-dom";

function Card(data) {
  return (
    <div className="col-lg-3 col-md-6 carddiv">
      <Link to={`/details/${data.id}`}>
        <div className="card mt-4 cardcard">
          <img className="Avatar" src={data.image} alt="Avatar" />
          <div className="RestaurantName mt-3 mb-2">
            <h4>
              <b>{data.resName}</b>
            </h4>
          </div>
          <div className="borerDiv"></div>
          <div className="mt-3 offerDetails">
            <p className="mx-3">
              <span id="rating" className="mx-1">
                <i class="fa-solid fa-star me-1 "></i>
                {data.rating}
              </span>{" "}
              <span className="mx-1">{data.offer}% off </span>|{" "}
              <span className="mx-1">{data.coupon.toUpperCase()}</span>
            </p>
          </div>
          <div>
            <button className="btn btn-outline-light text-primary Quickview mb-2">
              Quick view
            </button>
          </div>
        </div>
        </Link>
    </div>
  );
}

export default Card;
