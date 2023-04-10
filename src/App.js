import logo from "./images/swiggy.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-sm-7 firstrow">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <img className="logo" src={logo} />
                  <span>swiggy</span>
                </div>
                <div className="col-sm-6">.col-sm-3</div>
                <div className="col-sm-6">.col-sm-3</div>
                <div className="col-sm-6">.col-sm-3</div>
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
