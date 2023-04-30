import React, {
  useState,
  useEffect,
  useImperativeHandle,
  useCallback,
} from "react";
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
import { AuthContext } from "./shared/Context/authContext";

function App() {
  const [isLoggedIn, setIsLoginMode] = useState(false);

  const login = useCallback(() => {
    setIsLoginMode(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoginMode(false);
  }, []);

  return (
    <AuthContext.Provider value={{isLoggedIn : isLoggedIn,login : login , logout:logout }}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UploadImg />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
