import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1. External Library CSS (Swiper)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 2. Local Project CSS (Ensure these files exist in src/assets/css/)
//import "./assets/css/bootstrap.min.css";
//import "./assets/css/app.css";
import "./assets/css/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
