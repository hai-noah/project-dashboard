import axios from "axios";
import Cookies from "js-cookie";

// let headers = {};
// if (typeof window !== "undefined") {
//   headers = {
//     Authorization: "bearer " + window.localStorage.getItem("accessToken"),
//   };
// }else{
//   headers = {
//     Authorization: "bearer " +  Cookies.get("accessToken"),
//   };

// }

export const axiosClient = axios.create(
  {
    baseURL: 'http://localhost:5000/api/dashboard/',
    // headers
  }
)
axiosClient.interceptors.request.use(
  (config) => {
    let token;

    if (typeof window !== 'undefined') {
      token = window.localStorage.getItem('accessToken');
    }

    if (!token) {
      token = Cookies.get('accessToken');
    }
    
    if (token) {
      config.headers['Authorization'] = `bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);