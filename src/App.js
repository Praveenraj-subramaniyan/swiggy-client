import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Start from "./Start";
import Home from "./Home";
import DetailPage from "./DetailsPage";
import Search from "./Search";
import Cart from "./Cart";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
