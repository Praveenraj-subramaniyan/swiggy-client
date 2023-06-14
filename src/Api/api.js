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
    const response = await axios.post(
      url + "details/" + id,
      loginDataFromCookie
    );
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
    responseLoginData = response.data;
    return responseLoginData;
  } catch (error) {
    console.error(error);
    return responseLoginData;
  }
};

export const ForgetPasswordApi = async (email) => {
  try {
    const response = await axios.post(url + "forgetpassword", { email });
    responseLoginData = response.data;
    if (response.data === true) {
      const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
      Cookies.set("forget_password", JSON.stringify(email), {
        expires: expiryDate,
      });
    }
    return responseLoginData;
  } catch (error) {
    console.error(error);
    return responseLoginData;
  }
};

export const NewPasswordApi = async (otp, newPassword, confirmPassword) => {
  try {
    const cookieValue = Cookies.get("forget_password");
    const email = cookieValue ? JSON.parse(cookieValue) : null;
    if (email === null) {
      return "login";
    } else {
      const PayLoad = {
        email,
        otp,
        newPassword,
        confirmPassword,
      };
      const response = await axios.post(url + "forgetpassword/new", PayLoad);
      responseLoginData = response.data;
      return responseLoginData;
    }
  } catch (error) {
    console.error(error);
    return responseLoginData;
  }
};

export const SignUPAPI = async (loginData) => {
  try {
    const response = await axios.post(url + "signup", loginData);
    responseLoginData = response.data;
    console.log(response.data);
    return responseLoginData;
  } catch (error) {
    console.error(error);
    return responseLoginData;
  }
};

export const CartAPI = async (updatedCartData) => {
  try {
    const PayLoad = {
      loginDataFromCookie,
      updatedCartData,
    };
    await axios.post(url + "cart", PayLoad);
  } catch (error) {
    console.error(error);
  }
};

export const ViewCard = async () => {
  try {
    const response = await axios.post(url + "cart/view ", loginDataFromCookie);
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

export const CheckoutCart = async () => {
  try {
    await axios.post(url + "orders/checkout", loginDataFromCookie);
    return true;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const ViewOrders = async () => {
  try {
    const response = await axios.post(url + "orders/view", loginDataFromCookie);
    return response;
  } catch (error) {
    console.error(error);
    return "login";
  }
};
export const ViewProfile = async () => {
  try {
    const response = await axios.post(url + "profile", loginDataFromCookie);
    return response;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const EditProfile = async (profile) => {
  try {
    const PayLoad = {
      loginDataFromCookie,
      profile,
    };
    const response = await axios.post(url + "profile/edit", PayLoad);
    return response;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const SaveAddress = async (address) => {
  try {
    const PayLoad = {
      loginDataFromCookie,
      address,
    };
    const response = await axios.post(url + "profile/address/save", PayLoad);
    return response;
  } catch (error) {
    console.error(error);
    return "login";
  }
};
