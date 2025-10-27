import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const linkStyle = (path: string): React.CSSProperties => ({
    marginRight: 20,
    textDecoration: "none",
    fontWeight: pathname === path ? "bold" : "normal",
    color: "#ffffff",
    borderBottom: pathname === path ? "2px solid #00aced" : "2px solid transparent",
    paddingBottom: 4,
    transition: "border-bottom 0.2s ease",
  });

  return (
    <nav
      style={{
        backgroundColor: "#001f3f", // navy
        color: "white",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Left side: logo + brand name */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          style={{ width: 70, height: 40, borderRadius: "50%", objectFit: "cover" }}
        />
        {/* Brand Name */}
        <h1 style={{ margin: 0, fontSize: 20, color: "#ffffff" }}>
          OFFER-ZEN Review Analysis
        </h1>
      </div>

      {/* Right side: navigation links */}
      <div>
        <Link to="/" style={linkStyle("/")}>
          Home
        </Link>
        <Link to="/add-review" style={linkStyle("/add-review")}>
          Add Review
        </Link>
        <Link to="/view-reviews" style={linkStyle("/view-reviews")}>
          View All Reviews
        </Link>
      </div>
    </nav>
  );
};
