import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "./components/ui/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ToastProvider />
    <App />
  </BrowserRouter>
);
