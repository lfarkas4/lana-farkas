import React from "react";
import "../styles/ProjectDetail.scss";

export default function ComingSoonBanner({
  iconSrc = "/assets/starbag.svg",
  titleEyebrow = "Coming Soon!", 
  title = "This project is still being charted — stay tuned for the upcoming launch ✦₊˚⊹",
  iconAlt = "Coming soon",
}) {
  return (
    <section className="cs-section" aria-label="Project status">
      <div className="cs-inner">
        <div className="cs-badge">
          <img className="cs-icon" src={iconSrc} alt={iconAlt} />
        </div>

        <div className="cs-copy">
          <div className="cs-eyebrow">{titleEyebrow}</div>
          <h3 className="cs-title">{title}</h3>
        </div>
      </div>
    </section>
  );
}

