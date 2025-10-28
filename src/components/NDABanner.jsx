import React from "react";

export default function NDABanner({ 
  text = "Select work is NDA protected. Contact for details." 
}) {
  return (
    <div className="nda-banner">
      <img 
        src="/assets/nda.svg" 
        alt="" 
        className="nda-icon"
        aria-hidden="true"
      />
      <span className="nda-text">{text}</span>
    </div>
  );
}