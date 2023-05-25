import axios from "axios";
import Cookies from "js-cookie";
const cookieValue = Cookies.get("Swiggy_client");
const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
const url = "https://swiggy-server-6c69.onrender.com/";

let responseData;
export const Cartapi  = async () => {
  try {
    const response = await axios.post(url+"cart", loginDataFromCookie);
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

