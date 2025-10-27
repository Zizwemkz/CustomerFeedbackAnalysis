import React from "react";
// import "./ClientReviewInvite.css"; // optional external styling
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/slide1.png";
import logo2 from "../assets/slide2.png";
import logo3 from "../assets/slide3.png";
import logo4 from "../assets/slide4.png";

export const ClientReviewInvite: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-review");
  };

  return (
    <section
      style={{
        textAlign: "center",
        maxWidth: 900,
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#c1e9eeff",
        borderRadius: 10,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontSize: "1.8rem", color: "#001f3f", marginBottom: 10 }}>
        We’d Love Your Feedback!
      </h2>
      <p style={{ color: "#333", fontSize: "1rem", marginBottom: 30 }}>
        Thank you for being part of our product community.  
        Your opinion helps us improve and continue delivering exceptional products.  
        Please take a moment to share your experience — your feedback truly matters!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 15,
          marginBottom: 30,
        }}
      >
        <img
          src={logo4}
          alt="Product 1"
          style={{ width: 180, height: 120, borderRadius: 8, objectFit: "cover" }}
        />
        <img
          src={logo2}
          alt="Product 2"
          style={{ width: 180, height: 120, borderRadius: 8, objectFit: "cover" }}
        />
        <img
          src={logo3}
          alt="Product 3"
          style={{ width: 180, height: 120, borderRadius: 8, objectFit: "cover" }}
        />
        <img
          src={logo1}
          alt="Product 4"
          style={{ width: 180, height: 120, borderRadius: 8, objectFit: "cover" }}
        />
      </div>

      <button
        onClick={handleClick}
        style={{
          backgroundColor: "#00aced",
          color: "white",
          border: "none",
          borderRadius: 6,
          padding: "12px 24px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.2s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#008bb9")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#00aced")}
      >
        Give a Review
      </button>
    </section>
  );
};
