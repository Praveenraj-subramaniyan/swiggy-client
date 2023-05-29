import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Start from "./Pages/Start";
import Home from "./Pages/Home";
import DetailPage from "./Pages/DetailsPage";
import Search from "./Pages/Search";
import Cart from "./Pages/Cart";
import Profile from "./Pages/Profile"

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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
