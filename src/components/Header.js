import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src= {LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><a href="/about">About Us</a></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" 
          onClick ={() => {
            btnNameReact === 'Login' ? setbtnNameReact('Logout') : setbtnNameReact('Login');
          } }>{btnNameReact}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;