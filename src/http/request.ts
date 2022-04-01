import axios from "axios";

let baseURL: string = "/";
if (import.meta.env.DEV) {
  baseURL = "http://localhost:3002";
} else if (import.meta.env.PROD) {
  baseURL = "https://glob:3002";
}

const service = axios.create({
  baseURL: baseURL,
  timeout: 30000,
});

export { service as axios };
