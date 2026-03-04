import React from "react";
import { useRouter } from "next/router";
import { FiArrowUpRight } from "react-icons/fi";

const fallbackHref = "/";

export default function BackButton() {
  const router = useRouter();

  const goBack = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push(fallbackHref);
    }
  };

  return (
    <div className="back-button-wrapper visible">
      <a className="back-bubble" href={fallbackHref} onClick={goBack}>
        <FiArrowUpRight className="back-arrow" aria-hidden="true" />
        <span className="back-label">back</span>
      </a>
    </div>
  );
}