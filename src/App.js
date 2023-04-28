import logo from "./images/swiggy.svg";
import location from "./images/location.svg";
import "./App.css";

function App() {
  let currentIndex = 0;
  setInterval(() => {
    let titles = [
      "Hungry?",
      "Late night at office?",
      "Movie marathon?",
      "Game night?",
      "Cooking gone wrong?",
    ];
    var element = document.getElementById("ChangingElement");
    element.innerHTML = titles[currentIndex];
    currentIndex++;
    if (currentIndex === 5) {
      currentIndex = 0;
    }
  }, 4000);
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
                <div className="col-6 mt-2 " id="loginsign">
                  <button type="button" className="btn mx-2 loginButton">
                    <b>Login</b>
                  </button>
                  <button type="button" className="btn btn-dark">
                    Sign Up
                  </button>
                </div>
                <div className="col-sm-12 mt-5">
                  <h1 id="ChangingElement"></h1>
                  <h4 className="greyColour">
                    Order food from favourite restaurants near you.
                  </h4>
                </div>
                <div className="row">
                  <div className="col-sm-10 mt-5 ">
                    <div className="search-bar">
                      <input
                        type="text"
                        placeholder="Enter delivery location"
                      ></input>
                      <button type="submit">Find Food</button>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-secondary">POPULAR CITIES IN INDIA</p>
                <p className="mt-3 cities">
                  Ahmedabad <span className="text-secondary">Bangalore</span>{" "}
                  Chennai <span className="text-secondary">Delhi</span> Gurgaon
                  <span className="text-secondary"> Hyderabad </span>
                  Kolkata
                  <span className="text-secondary"> Mumbai </span> Pune & more.
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
            <img
              className=""
              width="104"
              height="199"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
            />
            <h6 className="mt-3">No Minimum Order</h6>
            <p>
              Order in for yourself or for the group,
              <br /> with no restrictions on order value
            </p>
          </div>
          <div className="col-sm-4">
            <img
              className=""
              width="112"
              height="206"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
            />
            <h6 className="mt-3">Live Order Tracking</h6>
            <p>
              Know where your order is at all times,
              <br /> from the restaurant to your doorstep
            </p>
          </div>
          <div className="col-sm-4">
            <img
              className=""
              width="124"
              height="188"
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
            />
            <h6 className="mt-3">Lightning-Fast Delivery</h6>
            <p>
              Experience Swiggy's superfast delivery,
              <br /> for food delivered fresh & on time
            </p>
          </div>
        </div>
      </div>
      <div className="row lastdiv mr-0">
        <div className="col-sm-3">
          <h6>COMPANY</h6>
          <p>About us</p>
          <p>Team</p>
          <p>Careers</p>
          <p>Swiggy Blog</p>
          <p>Bug Bounty</p>
          <p>Swiggy One</p>
          <p>Swiggy Corporate</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Genie</p>
        </div>
        <div className="col-sm-3">
          <h6>CONTACT</h6>
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>
        <div className="col-sm-3">
          <h6>LEGAL</h6>
          <p>Terms & Conditions</p>
          <p>Refund & Cancellation</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Offer Terms</p>
          <p>Phishing & Fraud</p>
          <p>Corporate – Swiggy Money Codes Terms and Conditions</p>
          <p>Corporate - Swiggy Discount Voucher Terms and Conditions</p>
        </div>
        <div className="col-sm-3 playstore">
          <br />
          <br />
          <a
            className="m-5"
            href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
          >
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" />
          </a>
          <br />
          <br />
          <a
            className="m-5"
            href="https://play.google.com/store/apps/details?id=in.swiggy.android&amp;referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
          >
            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" />
          </a>
        </div>
      </div>
      <div className="container-fluid loginDiv">
        <div className="row">
          <div className="col-8 loginleftDiv"></div>
          <div className="col-4 loginrighttDiv">
            <button className="btn ">
              <i className="fas fa-times"></i>
            </button>
            <div className="row createAcc">
              <div className="col-5  mt-4  ms-3">
                <h4 className="Login">Login</h4>
                <p>
                  or <span className="orangeColour"> Create an account</span>
                </p>
              </div>
              <div className="col-5 ms-3">
                <img
                  width="100"
                  height="105"
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                />
              </div>
            </div>
            <div className="row inputBoxDiv">
              <div className="col-12  mt-4  ms-3">
                <input placeholder="Email"  className="pt-3 ps-2 pb-3 inputLogin"/>
                <input placeholder="Password"  className="mt-3 pt-3 ps-2 pb-3 inputLogin"/>
              </div>
              <div>
              <button className="btn LoginButton mt-4 ms-3 pt-1 pb-2">Login</button>
              <p className=" ms-3 mt-1"><span className="text-secondary">By clicking on Login, I accept the </span>Terms & Conditions & Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
