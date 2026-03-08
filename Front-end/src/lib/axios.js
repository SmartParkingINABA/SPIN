import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

if (!baseURL) {
  throw new Error("BaseURL is not defined");
}

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    console.log(
      `[API REQUEST] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
      config.data || "",
    );
    return config;
  },
  (error) => {
    console.error("[REQUEST ERROR]", error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    console.log(
      `[API RESPONSE] ${response.status} ${response.config.url}`,
      response.data,
    );
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("[API ERROR RESPONSE]", {
        url: error.config?.url,
        status: error.response.status,
        data: error.response.data,
      });
    } else if (error.request) {
      console.error("[API NO RESPONSE]", error.request);
    } else {
      console.error("[API UNKNOWN ERROR]", error.message);
    }

    return Promise.reject(error);
  },
);

export default api;
