import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const {loggedInUser} = useContext(UserContext);
  console.log("data from context", loggedInUser);
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;