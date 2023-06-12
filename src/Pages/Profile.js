import React, { useEffect, useState } from "react";
import HomeHeader from "../Components/HomeHeader";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import "./Css/Profile.css";
import { ViewOrders, ViewProfile, EditProfile, SaveAddress } from "../Api/api";
import AddressCard from "../Components/AddressCard";
import OrderCard from "../Components/OrderCard";

function Profile() {
  const [buttonClick, setbuttonClick] = useState(1);
  const [itemListProfile, setItemListProfile] = useState([]);
  const [editProfile, SetEditProfile] = useState([]);
  const [itemListOrders, setItemListOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);
  const [addAddress, SetaddAddress] = useState({
    flatno: "",
    street: "",
    area: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function Profile() {
      try {
        const items = await ViewProfile();
        if (items === "login") {
          alert("Session Expired");
          navigate("/");
        }
        setItemListProfile(items.data);
        SetEditProfile({
          name: items.data.name,
          phone: items.data.phone,
        });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    Profile();
  }, []);

  async function Orders() {
    setbuttonClick(2);
    try {
      setIsLoadingOrders(true);
      const item = await ViewOrders();
      if (item === "login") {
        alert("Session Expired");
        navigate("/");
      }
      setItemListOrders(item.data);
      setIsLoadingOrders(false);
    } catch (error) {
      console.error(error);
    }
  }

  function Logout() {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      navigate("/");
    }
  }
  function HandleEdit(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    SetEditProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  async function SaveEdit() {
    try {
      setItemListProfile((prevState) => ({
        ...prevState,
        name: editProfile.name,
        phone: editProfile.phone,
      }));
      const items = await EditProfile(editProfile);
      if (items === "login") {
        alert("Session Expired");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  }
  function HandleAddAdress(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    SetaddAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  async function AddAddress() {
    try {
      setButtonDisabled(true);
      const items = await SaveAddress(addAddress);
      if (items === "login") {
        alert("Session Expired");
        navigate("/");
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return <div className="spinner-border  isLoading"></div>;
  }
  return (
    <div>
      <HomeHeader highlight="profile" />
      <div className="ProfileDiv">
        <div className="containerprofilediv px-3">
          <div className="row ps-5">
            <div className=" pt-5 profiledetailsdiv col-lg-8 col-sm-12 ">
              <h3 className="pt-5 ">{itemListProfile.name}</h3>
              <span className="me-3">{itemListProfile.phone}</span>
              <span className="me-3">.</span>{" "}
              <span>{itemListProfile.email}</span>
            </div>
            <div className="profiledetailbutton pt-5 px-0 col-5 col-sm-2  mt-5 ">
              <button
                className="EditProfile py-2 px-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#EditProfilecanvas"
              >
                <b>Edit Profile</b>
              </button>
            </div>
            <div className="offcanvas offcanvas-end" id="EditProfilecanvas">
              <div className="offcanvas-header">
                <h4 className="offcanvas-title EditProfileHeading">
                  Edit Profile
                </h4>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                <input
                  name="name"
                  className="EditProfileinputbox mb-3 ps-2 mt-5"
                  onChange={HandleEdit}
                  value={editProfile.name}
                  placeholder="Name"
                />
                <input
                  name="phone"
                  className="EditProfileinputbox mb-3 ps-2"
                  onChange={HandleEdit}
                  value={editProfile.phone}
                  placeholder="Phone"
                />
                <br />
                <button
                  className="btn EditProfilecanvasclosebtn"
                  type="button"
                  onClick={() => SaveEdit()}
                >
                  Save
                </button>
              </div>
            </div>
            <div className="profiledetailbutton pt-5 px-0 col-6 col-sm-2  mt-5 pb-5">
              <button
                className="EditProfile   py-2 px-2"
                data-bs-toggle="offcanvas"
                data-bs-target="#Addresscanvas"
                disabled={buttonDisabled}
              >
                <b>Add Address</b>
              </button>
            </div>
            <div className="offcanvas offcanvas-end" id="Addresscanvas">
              <div className="offcanvas-header">
                <h4 className="offcanvas-title EditProfileHeading">
                  Add Address
                </h4>
                <button
                  type="button"
                  className="btn-close "
                  data-bs-dismiss="offcanvas"
                ></button>
              </div>
              <div className="offcanvas-body">
                <input
                  name="flatno"
                  className="EditProfileinputbox mb-3 ps-2 mt-2"
                  onChange={HandleAddAdress}
                  value={addAddress.flatno}
                  placeholder="Flat No"
                />
                <input
                  name="street"
                  className="EditProfileinputbox mb-3 ps-2"
                  onChange={HandleAddAdress}
                  value={addAddress.street}
                  placeholder="Street"
                />
                <input
                  name="area"
                  className="EditProfileinputbox mb-3 ps-2"
                  onChange={HandleAddAdress}
                  value={addAddress.area}
                  placeholder="Area"
                />
                <input
                  name="city"
                  className="EditProfileinputbox mb-3 ps-2"
                  onChange={HandleAddAdress}
                  value={addAddress.city}
                  placeholder="City"
                />
                <input
                  name="state"
                  className="EditProfileinputbox mb-3 ps-2"
                  onChange={HandleAddAdress}
                  value={addAddress.state}
                  placeholder="State"
                />
                <input
                  name="country"
                  className="EditProfileinputbox mb-3 ps-2"
                  onChange={HandleAddAdress}
                  value={addAddress.country}
                  placeholder="Country"
                />
                <input
                  name="pincode"
                  className="EditProfileinputbox mb-3 ps-2"
                  onChange={HandleAddAdress}
                  value={addAddress.pincode}
                  placeholder="Pincode"
                />
                <br />
                <button
                  className="btn EditProfilecanvasclosebtn"
                  type="button"
                  onClick={() => AddAddress()}
                >
                  Add Adress
                </button>
              </div>
            </div>
          </div>
          <div className="Profilebuttondiv ps-5">
              <button
                className={` ${
                  buttonClick === 1
                    ? "bg-light Profilebuttonclicked"
                    : "Profilebutton"
                }`}
                onClick={() => {
                  setbuttonClick(1);
                }}
              >
                Address
              </button>
            <button
              className={` ${
                buttonClick === 2
                  ? "bg-light Profilebuttonclicked"
                  : "Profilebutton"
              }`}
              onClick={() => {
                Orders();
              }}
            >
              Orders
            </button>
            <button
              className={` ${
                buttonClick === 3
                  ? "bg-light Profilebuttonclicked"
                  : "Profilebutton"
              }`}
              onClick={() => Logout()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <div className=" ProfilesecondDiv px-5">
        { buttonClick === 1 && ( itemListProfile.address[0] ?(
          <div className="row pt-3">
            {itemListProfile.address.map((data) => {
              return (
                <AddressCard
                  flatno={data.flatno}
                  street={data.street}
                  area={data.area}
                  city={data.city}
                  state={data.state}
                  country={data.country}
                  pincode={data.pincode}
                  isPrimary={data.isPrimary}
                  id={data.id}
                  key={data.id}
                />
              );
            })}
          </div>
        ) : ( <div className="NoaddressDiv py-3">
          <img className="" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_252/NoSavedAddress_ttsdqs"/>
          <h4 className="py-2 text-secondary">Can't find a door to knock</h4>
          <p className="text-secondary">You don't have an address to deliver.</p>
        </div>))}
        {buttonClick === 2 && (
          <div className="row">
            {isLoadingOrders ? (
              <div className="isLoadingOrdes">
              <div className="spinner-border"></div>
              </div>
            ) : itemListOrders[0] ? (
              itemListOrders.map((data) => {
                return (
                  <OrderCard
                    orderDate={data.orderDate}
                    key={data.id}
                    OrderDetails={data.OrderDetails}
                  />
                );
              })
            ) : (
              <div className="orderEmpty">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_262/empty-orders-image_acrbbw" />
                <h6 className="text-secondary">No orders</h6>
                <p className="text-secondary">
                  You haven't placed any order yet.
                </p>
              </div>
            )}
          </div>
        )}
        {buttonClick === 3 && <div></div>}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
