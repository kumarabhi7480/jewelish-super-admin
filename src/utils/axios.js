import axios from "axios";
import { API_URL } from "../config/config";

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers:{
        "Content-Type": "application/json",
        // Authorization: `Bearer ${authoken}`,
    }
});

export default axiosInstance;