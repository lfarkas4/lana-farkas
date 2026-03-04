import React from "react";
import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="back-button-wrapper visible">
      <a className="back-bubble" href="/" onClick={(e) => { e.preventDefault(); router.push("/"); }}>
        <FiArrowUpRight className="back-arrow" aria-hidden="true" />
        <span className="back-label">back</span>
      </a>
    </div>
  );
}
