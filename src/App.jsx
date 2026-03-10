import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MenuShowcase from "./pages/MenuShowcase";
// redeploy fix

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menushowcase" element={<MenuShowcase />} />
    </Routes>
  );
}

export default App;
