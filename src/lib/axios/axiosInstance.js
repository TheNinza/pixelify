import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PIXELIFY_API,
  timeout: 0, //default 0, no timeout
});
