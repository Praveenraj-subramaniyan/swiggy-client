import React from "react";
import "./Css/AddressCard.css";
import { useNavigate } from "react-router-dom";
import { DeleteAdressAPI, SetPrimaryAdressAPI } from "../Api/api";

function AddressCard(data) {
  const navigate = useNavigate();
  async function DeleteAdress(id) {
    try {
      const reponse = await DeleteAdressAPI(id);
      console.log(reponse);
      if (reponse === "login") {
        alert("Session Expired");
        navigate("/");
      } else if (reponse === false) {
        alert("Unable to delete address, Please try again");
      } else if (reponse === true) {
        alert("Deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      alert("Session Expired");
      navigate("/");
    }
  }

  async function SetPrimaryAdress(id) {
    try {
      const reponse = await SetPrimaryAdressAPI(id);
      if (reponse === "login") {
        alert("Session Expired");
        navigate("/");
      } else if (reponse === false) {
        alert("Unable to set primary address, Please try again");
      } else if (reponse === true) {
        alert("Primary address changed successfully");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      alert("Session Expired");
      navigate("/");
    }
  }

  return (
    <div className="col-sm-5 col-12 AddressBox mb-3 ms-2">
      <div className="row pt-2 pb-3">
        <h4 className="col-4 col-sm-2 text-secondary">Address</h4>
        {data.isPrimary === true ? (
          <button
            className="col-sm-3 col-4 col-lg-4 btn btn-danger ms-5 AddressBoxbtn"
            disabled={data.isPrimary}
          >
            Primary
          </button>
        ) : (
          <button
            className="col-5 col-sm-6 col-lg-4 btn btn-danger ms-5 AddressBoxbtn"
            onClick={() => SetPrimaryAdress(data.id)}
          >
            Set as primary
          </button>
        )}
      </div>
      <p className="text-secondary">
        {data.flatno},{data.street},{data.area},{data.city},{data.state},
        {data.pincode},{data.country}
      </p>
      <button
        className="py-2 px-2 btn btn-link text-decoration-none"
        data-bs-toggle="offcanvas"
        data-bs-target="#EditAddresscanvas"
        onClick={() => data.setEditAddressData(data)}
      >
        Edit
      </button>
      <button
        className="py-2 px-2 btn btn-link text-decoration-none"
        onClick={() => DeleteAdress(data.id)}
        disabled={data.isPrimary}
      >
        Delete
      </button>
    </div>
  );
}

export default AddressCard;
