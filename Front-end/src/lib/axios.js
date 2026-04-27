import axios from "axios";
import toast from "react-hot-toast";

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

let isRedirecting = false;

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
    const status = error.response?.status;
    const errMessage =
      error.response?.data?.err || error.response?.data?.message;

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

    const isAuthError =
      errMessage === "jwt expired" ||
      errMessage === "Unauthorized" ||
      status === 401 ||
      status === 403;

    if (window.location.pathname === "/auth/login") {
      return Promise.reject(error);
    }

    if (isAuthError) {
      if (isRedirecting) {
        return Promise.reject(error);
      }

      isRedirecting = true;

      toast.error("Sesi anda telah berakhir. Silahkan login kembali.");

      setTimeout(() => {
        localStorage.clear();

        window.location.href = "/auth/login";
      }, 1500);
    }

    return Promise.reject(error);
  },
);

export default api;
