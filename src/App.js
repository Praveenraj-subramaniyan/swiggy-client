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
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-7 firstrow">
            <div className="container mx-5 my-5">
              <div className="row">
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
                  <h4 className="greyColour">Order food from favourite restaurants near you.</h4>
                </div>
                <div className="row">
                  <div className="col-sm-10 mt-5 ">
                    <div class="search-bar">
                      <input
                        type="text"
                        placeholder="Enter your delivery location"
                      ></input>
                      <button type="submit">
                        Find Food
                      </button>
                    </div>
                  </div>
                </div>
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
    </div>
  );
}

export default App;
