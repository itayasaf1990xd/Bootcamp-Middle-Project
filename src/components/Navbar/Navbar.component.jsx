import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.style.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const setActive = (e) => {
    const items = Array.from(e.target.parentElement.children);
    items.map((item) => {
      return item.classList.remove("active");
    });
    e.target.classList.add("active");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img className="navbar-logo" src={logo} alt="logo" />
        <div className="navbar-title"> Gamely </div>
      </div>
      <Link
        className="home active navbar-item"
        to="/"
        onClick={(e) => setActive(e)}
      >
        Home
      </Link>
      <Link
        className="memory-cards navbar-item"
        to="/memorycard"
        onClick={(e) => setActive(e)}
      >
        Memory Cards
      </Link>
      <Link
        className="tic-tac-toe navbar-item"
        to="/tictactoe"
        onClick={(e) => setActive(e)}
      >
        Tic Tac Toe
      </Link>
    </nav>
  );
};

export default Navbar;
