import React from "react";
import "./SkipLink.css";

export default function SkipLink({ targetId = "main-content" }) {
  return (
    <a href={`#${targetId}`} className="skip-link">
      Skip to main content
    </a>
  );
}
