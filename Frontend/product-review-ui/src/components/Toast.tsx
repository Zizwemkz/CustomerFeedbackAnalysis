import React from "react";

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
      style={{
        position: "fixed",
        right: 20,
        top: 20,
        padding: "12px 16px",
        borderRadius: 6,
        background: type === "success" ? "#DFF2E1" : type === "error" ? "#FFE2E2" : "#EDF2FF",
        color: "#111",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        zIndex: 2000,
      }}
    >
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ fontWeight: 600 }}>{type === "success" ? "Success" : type === "error" ? "Error" : "Info"}</div>
        <div style={{ opacity: 0.9 }}>{message}</div>
        <button aria-label="close toast" onClick={onClose} style={{ marginLeft: 8 }}>
          ✕
        </button>
      </div>
    </div>
  );
};
