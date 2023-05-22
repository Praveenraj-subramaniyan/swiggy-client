import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Start from "./Start";
import Home from "./Home";
import DetailPage from "./DetailsPage";
import Search from "./Search";
function App() {
  return (
    <>
      <BrowserRouter basename="/swiggy-client">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
