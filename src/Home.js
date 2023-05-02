
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Footer from "./Footer";
import { Navigate } from 'react-router-dom';
import { Route,Routes, useNavigate,BrowserRouter } from "react-router-dom";
import HomeHeader from "./HomeHeader";


function Home() {
  return (
    <div>
        <HomeHeader/>
        <br/>  <br/>  <br/>
      <Footer/>
    </div>
  );
}

export default Home;