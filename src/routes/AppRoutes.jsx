import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MapPage from "../pages/MapPage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
