import "./Card.css";

function Card(data) {
  return (
    <div className="col-3">
      <div className="card mt-4 cardcard">
        <img className="Avatar" src={data.image} alt="Avatar" />
        <div className="RestaurantName mt-3 mb-2">
          <h4>
            <b>{data.resName}</b>
          </h4>
        </div>
        <div className="borerDiv"></div>
        <div className="mt-3 offerDetails">
          <p className="mx-4">
            <span id="rating" className="mx-1">
              {data.rating}
            </span>{" "}
            <span className="mx-1">{data.offer}% off </span>|{" "}
            <span className="mx-1">{data.coupon.toUpperCase()}</span>
          </p>
        </div>
        <div>
          <button className="btn btn-outline-light text-primary Quickview">
            Quick view
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
