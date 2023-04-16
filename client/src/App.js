import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LogIn";
import Home from "./components/Home/HomeMain";
import AddRecipe from "./components/AddRecipe/AddRec";
import Bookmarks from './components/Bookmarks/CookBook';
// import Contact from "./components/Contact/contact";
import BuyButtonComponent from "./components/BuyButtonComponent";
import "./App.css";
//<Login/>
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storeUserLoggeInInfo = localStorage.getItem("isLoggedIn");
    if (storeUserLoggeInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <h1>Eatary</h1>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login onLogin={loginHandler} />
              ) : (
                isLoggedIn && <Home onLogout={logoutHandler} />
              )
            }
          />
           
          <Route path="/addRecipe" element={<AddRecipe />} />
        
          <Route path="/Bookmarks" element={<Bookmarks />} />
        </Routes>
        <BuyButtonComponent/>
       
      </div>
      
    </Router>
   
  );
}

export default App;
