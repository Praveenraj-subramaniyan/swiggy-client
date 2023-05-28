import logo from "./images/swiggy.svg";
import "./HomeHeader.css";
import { Link } from "react-router-dom";

function HomeHeader(data) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row HeaderRow ">
          <div className="col-1 logo1div">
            <img alt="Logo" className="logo1  mt-2" src={logo} />
          </div>
          <div className="col-3 Poogavanapuramdiv">
            <span className="Poogavanapuram">
              <b>Poogavanapuram</b>
            </span>
            <span className="text-secondary "> chinnaiyan Colony,<span className="text-secondary chinnaiyan"> Poon...</span></span>
            <i className="fa dropdownIcon">&#xf107;</i>
          </div>
          <div
            className={`offset-2 col Searchdiv ${
              data.highlight === "home" ? "highlight" : ""
            } `}
          >
            <Link to={`/home`}>
              <i className="fa fa-home  px-2 " aria-hidden="true"></i>
              <span className="">Home</span>
            </Link>
          </div>
          <div
            className={`col Searchdiv ${
              data.highlight === "search" ? "highlight" : ""
            } `}
          >
            <Link to={`/Search`}>
              <i className="fa px-2">&#xf002;</i>
              <span className="">search</span>
            </Link>
          </div>
          <div
            className={`col Searchdiv ${
              data.highlight === "cart" ? "highlight" : ""
            } `}
          >
            <Link to={`/cart`}>
              <i className="fa fa-shopping-cart  px-2" aria-hidden="true"></i>
              <span className="">
                Cart
                {/* <sup className="New"> 2</sup> */}
              </span>
            </Link>
          </div>
          <div
            className="col Searchdiv overflow-hidden dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            <i className="fa fa-user  px-2" aria-hidden="true"></i>
            <span className="">Praveen</span>
          </div>
          <div className="dropdown-menu">
          <a className="dropdown-item" href="">
            Profile
          </a>
          <a className="dropdown-item" href="">
            Logout
          </a>
        </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
