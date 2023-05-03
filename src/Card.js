import "./Card.css";

function Card(data) {
  return (
    <div className="col-3">
      <div className="card mt-4">
        <img src={data.image} alt="Avatar"  />
        <div className="RestaurantName mt-3 mb-2">
          <h4>
            <b>{data.resName}</b>
          </h4>
          
        </div>
      </div>
    </div>
  );
}

export default Card;
