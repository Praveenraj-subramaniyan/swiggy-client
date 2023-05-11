import logo from "./images/swiggy.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { Route, Routes, useNavigate, BrowserRouter } from "react-router-dom";
import Start from "./Start";
import Home from "./Home";
import DetailPage from "./DetailsPage";
import Search from "./Search";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/swiggy-client" />} />
          <Route path="/swiggy-client" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
