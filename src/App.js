import logo from "./images/swiggy.svg";
import location from "./images/location.svg";
import "./App.css";

function App() {
  // setTimeout(function() {
  //   var texts = ["Text 2", "Text 3", "Text 4"];
  //   var textElements = document.querySelectorAll("#my-text");
  //   for (var i = 0; i < textElements.length; i++) {
  //     textElements[i].innerHTML = texts[i];
  //   }
  // }, 5000)
  return (
    <div>
      <div className="container-fluid firstrow">
        <div className="row firstrow row1 ml-5">
          <div className="container col-sm-7 ml-5">
            <div className="container firstrow mt-5 mx-5">
              <div className="row col-12 firstrow  ">
                <div className="col-6">
                  <img className="logo" src={logo} />
                  <span className="Swiggycolour">swiggy</span>
                </div>
                <div className="col-6 mt-3">
                  <button type="button" class="btn text-dark mx-2">
                    <b>Login</b>
                  </button>
                  <button type="button" class="btn btn-dark">
                    Sign Up
                  </button>
                </div>
                <div className="col-sm-12 mt-5">
                  <h1>Hungry!!!</h1>
                  <h4 className="greyColour">
                    Order food from favourite restaurants near you.
                  </h4>
                </div>
                <div className="row">
                  <div className="col-sm-10 mt-5 ">
                    <div class="search-bar">
                      <input
                        type="text"
                        placeholder="Enter delivery location"
                      ></input>
                      <button type="submit">Find Food</button>
                    </div>
                  </div>
                </div>
                <p className="mt-4 greyColour">POPULAR CITIES IN INDIA</p>
                <p className="mt-3 cities">
                  Ahmedabad <span className="greyColour">Bangalore</span>{" "}
                  Chennai <span className="greyColour">Delhi</span> Gurgaon
                  <span className="greyColour"> Hyderabad </span>
                  Kolkata
                  <span className="greyColour"> Mumbai </span> Pune & more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-5 imagefirstDiv firstrow">
            <img
              className="firstImage"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
            />
          </div>
        </div>
      </div>
      <div className="container-fluid brownColour">
        <div className="row">
          <div className="col-sm-4">
          <img className="" width="104" height="199" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"/>
          <h6 className="mt-3">No Minimum Order</h6>
          <p>Order in for yourself or for the group,<br/> with no restrictions on order value</p>
          </div>
          <div className="col-sm-4">
          <img className="" width="112" height="206" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"/>
          <h6 className="mt-3">Live Order Tracking</h6>
          <p>Know where your order is at all times,<br/> from the restaurant to your doorstep</p>
          </div>
          <div className="col-sm-4">
          <img className="" width="124" height="188" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"/>
          <h6 className="mt-3">Lightning-Fast Delivery</h6>
          <p>Experience Swiggy's superfast delivery,<br/> for food delivered fresh & on time</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
