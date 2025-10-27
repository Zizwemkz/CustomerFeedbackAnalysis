import React, { useState } from "react";
import { createFeedback } from "../services/feedbackService";
import { FeedbackRequestDto } from "../types";

export const FeedbackForm: React.FC = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setText("");
    setEmail("");
  };

  const validate = (): string | null => {
    if (!text.trim()) return "Please enter a feedback message.";
    if (email && !/^.+@.+\..+$/.test(email)) return "Please enter a valid email address.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setSubmitting(true);
    try {
      const dto: FeedbackRequestDto = { text: text.trim(), email: email?.trim() || undefined };
      await createFeedback(dto);
      setMessage("Review successfully submitted.");
      reset();
      setTimeout(() => setMessage(null), 5000);
    } catch (err: any) {
      setError(err?.message || "Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section aria-labelledby="submit-review-heading" style={{ maxWidth: 700, margin: "0 auto" }}>
      <h2 id="submit-review-heading">Submit a Experiance Review</h2>

      {message && <div role="status" style={{ marginBottom: 12, color: "green" }}>{message}</div>}
      {error && <div role="alert" style={{ marginBottom: 12, color: "crimson" }}>{error}</div>}

      <form onSubmit={onSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="text">Your review (required)</label>
          <textarea
            id="text"
            name="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={5}
            placeholder="Share your experience in short…"
            style={{ width: "100%", padding: 8, borderRadius: 6 }}
            aria-required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email">Email (optional)</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: 8, borderRadius: 6 }}
          />
        </div>

        <div>
          <button type="submit" disabled={submitting} style={{ 
          padding: "10px 16px",
          borderRadius: 6 , 
          backgroundColor: "#00aced",
          color: "white",
          border: "none",
          cursor: "pointer",}}>
            {submitting ? "Submitting…" : "Submit Review"}
          </button>
        </div>
      </form>
    </section>
  );
};
