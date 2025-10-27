// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SubmitReview } from "./pages/SubmitReview";
import { ViewReviews } from "./pages/ViewReviews";

export const App: React.FC = () => (
  <Router>
    <Navbar />
    <main style={{ padding: "20px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-review" element={<SubmitReview />} />
        <Route path="/view-reviews" element={<ViewReviews />} />
      </Routes>
    </main>
  </Router>
);
