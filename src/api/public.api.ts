import { CreateInstance } from "api/axios.setup";
import { AxiosRequestConfig } from "axios";

const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_AUTH_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};

export default CreateInstance(axiosRequestConfiguration);
