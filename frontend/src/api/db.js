import axios from "axios";

export const api = axios.create({
    baseURL: "http://seu_ip_:3600"
});
