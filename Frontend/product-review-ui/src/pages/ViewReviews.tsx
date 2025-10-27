import React, { useState } from "react";
import { FeedbackTable } from "../components/FeedbackTable";

export const ViewReviews: React.FC = () => {
  const [searchEmail, setSearchEmail] = useState("");

  return (
    <div style={{ padding: 24 }}>
      <h2>View All Reviews</h2>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="emailSearch">Search by Email:</label>
        <input
          id="emailSearch"
          type="email"
          placeholder="Enter email to filter"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          style={{ marginLeft: 8, padding: 6, borderRadius: 4 }}
        />
      </div>

      <FeedbackTable emailFilter={searchEmail} />
    </div>
  );
};
