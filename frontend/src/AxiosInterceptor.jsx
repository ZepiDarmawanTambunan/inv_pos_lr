import axios from "axios";
import GlobalFunction from "./GlobalFunction";

const setupAxiosInterceptors = () => {
    axios.interceptors.request.use(
      function (config) {
        console.log(localStorage.token);
        if (localStorage.token !== undefined) {
          config.headers['Authorization'] = `Bearer ${localStorage.token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error);
        if (error.response.status === 401) {
          GlobalFunction.logOut();
        } else if (error.response.status === 500) {
          window.location.href = window.location.origin + '/error-500';
        }
        return Promise.reject(error);
      }
    );
  };
  
  export default setupAxiosInterceptors;