import axios from "axios";

import config from "./config";

const { apiKey, baseUrl } = config;

const instance = axios.create({
    baseURL: baseUrl,
    params: {
        key: apiKey,
        format: "json"
    }
});

export default instance;