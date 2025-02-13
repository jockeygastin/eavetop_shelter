import axios from "axios";
import { apiBaseUrl } from "../constants";


const httpClient = axios.create({
    baseURL: apiBaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export default httpClient;