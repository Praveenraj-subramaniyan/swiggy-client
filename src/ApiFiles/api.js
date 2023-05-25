import axios from "axios";
import Cookies from "js-cookie";
const cookieValue = Cookies.get("Swiggy_client");
const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
const url = "https://swiggy-server-6c69.onrender.com/home/";

let responseData;
let responseData1;
export const RestaurantCard = async () => {
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
    return "login"
  
  }
};

export const FoodDetailsCard = async (id) => {
  console.log(id);
  try {
    const response = await axios.post(url + id, loginDataFromCookie);
    responseData1 = response.data;
    console.log(responseData1);
    return responseData1;
  } catch (error) {
    console.error(error);
    return "login"
  }
};
