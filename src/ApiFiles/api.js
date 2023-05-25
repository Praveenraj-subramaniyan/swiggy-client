import axios from "axios";
import Cookies from "js-cookie";
const cookieValue = Cookies.get("Swiggy_client");
const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
//const url = "http://localhost:3000/";
const url = "https://swiggy-server-6c69.onrender.com/";

let responseData;
let responseData1;
let responseLoginData;
export const RestaurantCard = async () => {
  try {
    const response = await axios.post(url + "home", loginDataFromCookie);
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
    return "login";
  }
};

export const FoodDetailsCard = async (id) => {
  try {
    const response = await axios.post(url + "home/" + id, loginDataFromCookie);
    responseData1 = response.data;
    return responseData1;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const LoginAPI = async (loginData) => {
  try {
    const response = await axios.post(url + "login", loginData);
    console.log(url + "login");
    console.log(response);
    responseLoginData = response.data;
    return responseLoginData;
  } catch (error) {
    console.error(error);
    return responseLoginData;
  }
};

export const SignUPAPI = async (loginData) => {
  try {
    const response = await axios.post(url + "signup", loginData);
    console.log(url + "login");
    console.log(response);
    responseLoginData = response.data;
    return responseLoginData;
  } catch (error) {
    console.error(error);
    return responseLoginData;
  }
};