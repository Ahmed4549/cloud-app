import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import CompleteChecklist from "../pages/completeChecklist";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/complete-checklist" element={<CompleteChecklist />} />
    </Routes>
  );
};

export default CustomRoutes;
