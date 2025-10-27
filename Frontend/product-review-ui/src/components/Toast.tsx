import React from "react";
import "../App.css";

interface ToastProps {
  message?: string | null;
  type?: "success" | "error" | "info";
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = "info", onClose }) => {
  if (!message) return null;
  return (
    <div
      role="status"
      aria-live="polite"
      className={`toast toast-${type}`}
    >
      <div className="toast-content">
        <div className="toast-title">{type === "success" ? "Success" : type === "error" ? "Error" : "Info"}</div>
        <div className="toast-message">{message}</div>
        <button aria-label="close toast" onClick={onClose} className="toast-close">
          ✕
        </button>
      </div>
    </div>
  );
};