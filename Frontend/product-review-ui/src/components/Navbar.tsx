import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../App.css";

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">
          OFFER-ZEN Review Analysis
        </h1>
      </div>
      <div className="navbar-links">
        <Link to="/" className={`navbar-link${pathname === "/" ? " active" : ""}`}>
          Home
        </Link>
        <Link to="/add-review" className={`navbar-link${pathname === "/add-review" ? " active" : ""}`}>
          Add Review
        </Link>
        <Link to="/view-reviews" className={`navbar-link${pathname === "/view-reviews" ? " active" : ""}`}>
          View All Reviews
        </Link>
      </div>
    </nav>
  );
};