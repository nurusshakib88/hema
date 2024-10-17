import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error.jsx";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar className="xl:px-32 md:px-8 px-4" />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer className="xl:px-32 md:px-8 px-4" />
    </BrowserRouter>
  </StrictMode>
);
