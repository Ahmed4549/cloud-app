import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home";
import CompleteChecklist from "../pages/completeChecklist";

function useAuth() {
  let checkList = window.localStorage.getItem("cloudSecurityChecklist");
  if (checkList) {
    return true;
  }
}
function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/home" />;
}

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/complete-checklist" element={<CompleteChecklist />} /> */}
      <Route
        path="/complete-checklist"
        element={
          <PrivateRoute>
            <CompleteChecklist />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default CustomRoutes;
