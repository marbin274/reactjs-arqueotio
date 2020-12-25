import { CreateInstance } from "api/axios.setup";
import { AxiosRequestConfig } from "axios";

const token: string | null = localStorage.getItem("token");

const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    auth: token ? token : "",
  },
};

export default CreateInstance(axiosRequestConfiguration);
