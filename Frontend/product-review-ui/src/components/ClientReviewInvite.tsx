import React from "react";
import { useNavigate } from "react-router-dom";
import logo1 from "../assets/slide1.png";
import logo2 from "../assets/slide2.png";
import logo3 from "../assets/slide3.png";
import logo4 from "../assets/slide4.png";
import "../App.css";

export const ClientReviewInvite: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="review-invite-section">
      <h2 className="review-invite-heading">
        We’d Love Your Feedback!
      </h2>
      <p className="review-invite-text">
        Thank you for being part of our product community.<br />
        Your opinion helps us improve and continue delivering exceptional products.<br />
        Please take a moment to share your experience — your feedback truly matters!
      </p>

      <div className="review-invite-images">
        <img src={logo4} alt="Product 1" className="review-image" />
        <img src={logo2} alt="Product 2" className="review-image" />
        <img src={logo3} alt="Product 3" className="review-image" />
        <img src={logo1} alt="Product 4" className="review-image" />
      </div>

      <button
        className="review-invite-button"
        onClick={() => navigate("/add-review")}
      >
        Give a Review
      </button>
    </section>
  );
};