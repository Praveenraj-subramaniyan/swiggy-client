import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
const cookieValue = Cookies.get("Swiggy_client");
const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;

let responseData;
let responseData1;
export const RestaurantCard = async () => {
 // const navigate =useNavigate();

  const url = "https://swiggy-server-6c69.onrender.com/home";
  try {
    const response = await axios.post(url, loginDataFromCookie);
     responseData = response.data.sort((a, b) => {
      if (a.res_name < b.res_name) {
        return -1;
      }
      if (a.res_name > b.res_name) {
        return 1;
      }
      return 0;
    });
    return responseData;
  } catch (error) {
    console.error(error);
    //navigate("/");
  }
};

export const FoodDetailsCard = async (id) => {
  // const navigate =useNavigate();
  console.log(id);
   const url = `https://swiggy-server-6c69.onrender.com/home/${id}`;
   try {
     const response = await axios.post(url, loginDataFromCookie);
      responseData1 = response.data
     console.log(responseData1);
     return responseData1;
   } catch (error) {
     console.error(error);
     //navigate("/");
   }
 };