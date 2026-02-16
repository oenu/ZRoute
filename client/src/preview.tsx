import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import { DefaultApi } from "./generated/apis/DefaultApi";

const api = new DefaultApi();

const App: React.FC = () => {
  const [status, setStatus] = useState<
    "error" | "idle" | "loading" | "success"
  >("idle");
  const [message, setMessage] = useState<string>("");

  const checkHealth = async (): Promise<void> => {
    setStatus("loading");
    setMessage("");

    try {
      await api.getHealth();
      setStatus("success");
      setMessage("✓ Health check successful! API is healthy.");
    } catch (error) {
      setStatus("error");
      setMessage(
        `✗ Health check failed: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  };

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        margin: "50px auto",
        maxWidth: "600px",
        padding: "20px",
      }}
    >
      <h1>ZRoute API Preview</h1>
      <p>Test the backend health endpoint</p>

      <button
        disabled={status === "loading"}
        style={{
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          color: "white",
          cursor: status === "loading" ? "wait" : "pointer",
          fontSize: "16px",
          marginTop: "20px",
          padding: "10px 20px",
        }}
        onClick={() => {
          void checkHealth();
        }}
      >
        {status === "loading" ? "Checking..." : "Check Health"}
      </button>

      {message && (
        <div
          style={{
            backgroundColor: status === "success" ? "#d4edda" : "#f8d7da",
            border: `1px solid ${status === "success" ? "#c3e6cb" : "#f5c6cb"}`,
            borderRadius: "4px",
            color: status === "success" ? "#155724" : "#721c24",
            marginTop: "20px",
            padding: "15px",
          }}
        >
          {message}
        </div>
      )}

      <div style={{ color: "#666", fontSize: "14px", marginTop: "30px" }}>
        <p>
          <strong>API Base URL:</strong> http://localhost:8080
        </p>
        <p>
          <strong>Endpoint:</strong> GET /health
        </p>
      </div>
    </div>
  );
};

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
