import axios from "axios";
import Cookies from "js-cookie";
//const url = "http://localhost:3000/";
const url = "https://swiggy-server-6c69.onrender.com/";
let responseData;
let responseData1;
let responseLoginData;

export const RestaurantCard = async () => {
  const cookieValue = Cookies.get("auth_token");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.get(url + "home", {
      headers: {
        Authorization: `Bearer ${loginDataFromCookie}`,
      },
    });
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
  const cookieValue = Cookies.get("auth_token");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.get(url + "details/" + id, {
      headers: {
        Authorization: `Bearer ${loginDataFromCookie}`,
      },
    });
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
    return "Server Busy";
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
    const response = await axios.post(url + "signup/verify", loginData);
    responseLoginData = response.data;
    console.log(response.data);
    return responseLoginData;
  } catch (error) {
    console.error(error);
    return responseLoginData;
  }
};

export const CartAPI = async (updatedCartData) => {
  const cookieValue = Cookies.get("auth_token");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    await axios.post(
      url + "cart",
      { updatedCartData },
      {
        headers: {
          Authorization: `Bearer ${loginDataFromCookie}`,
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const ViewCard = async () => {
  const cookieValue = Cookies.get("auth_token");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.get(url + "cart/view ", {
      headers: {
        Authorization: `Bearer ${loginDataFromCookie}`,
      },
    });
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
  const cookieValue = Cookies.get("auth_token");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    await axios.get(url + "orders/checkout", {
      headers: {
        Authorization: `Bearer ${loginDataFromCookie}`,
      },
    });
    return true;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const ViewOrders = async () => {
  const cookieValue = Cookies.get("auth_token");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.get(url + "orders/view", {
      headers: {
        Authorization: `Bearer ${loginDataFromCookie}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return "login";
  }
};
export const ViewProfile = async () => {
  const cookieValue = Cookies.get("auth_token");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.get(url + "profile", {
      headers: {
        Authorization: `Bearer ${loginDataFromCookie}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const EditProfile = async (profile) => {
  try {
    const response = await axios.post(
      url + "profile/edit",
      { profile },
      {
        headers: {
          Authorization: `Bearer ${loginDataFromCookie}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const SaveAddress = async (address) => {
  try {
    const response = await axios.post(
      url + "profile/address/save",
      { address },
      {
        headers: {
          Authorization: `Bearer ${loginDataFromCookie}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const EditAddressAPI = async (address) => {
  try {
    const response = await axios.post(
      url + "profile/address/edit",
      { address },
      {
        headers: {
          Authorization: `Bearer ${loginDataFromCookie}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const DeleteAdressAPI = async (id) => {
  try {
    const response = await axios.post(
      url + "profile/address/delete",
      { id },
      {
        headers: {
          Authorization: `Bearer ${loginDataFromCookie}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const SetPrimaryAdressAPI = async (id) => {
  try {
    const response = await axios.post(
      url + "profile/address/set/primary",
      { id },
      {
        headers: {
          Authorization: `Bearer ${loginDataFromCookie}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};
