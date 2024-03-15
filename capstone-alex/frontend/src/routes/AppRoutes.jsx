import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PlantDetailPage from "../pages/PlantDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/plant/:id" element={<PlantDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
