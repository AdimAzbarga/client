import React, { useState, useEffect, useImperativeHandle } from "react";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer/Footer";
import UploadImg from "./components/FormElements/UploadImage";
import Auth from "./user/pages/auth";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UploadImg />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
