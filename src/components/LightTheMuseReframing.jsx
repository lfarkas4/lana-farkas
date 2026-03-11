// src/components/LightTheMuseReframing.jsx
import React from "react";
import useReveal from "../utils/useReveal";

const principleCards = [
  {
    title: "Lower the Barrier",
    icon: "/assets/pencilbulb.png",
    description: (
      <>
        Make starting as <strong>easy as possible</strong> so creators can
        focus on making, not deciding.
      </>
    ),
  },
  {
    title: "Preserve Freedom",
    icon: "/assets/dancey.png",
    description: (
      <>
        Don&apos;t impose the how or what. Let creators{" "}
        <strong>maintain full control</strong> over their expression.
      </>
    ),
  },
  {
    title: "Build Consistency",
    icon: "/assets/calendar.png",
    description: (
      <>
        Create structure that encourages regular practice without{" "}
        <strong>feeling like obligation</strong>.
      </>
    ),
  },
];

export default function LightTheMuseReframing() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="light-reframing is-light"
      aria-label="Light the Muse Reframing the Problem"
    >
      <div className="light-reframing-inner reveal reveal--up" style={{ "--reveal-delay": "0ms" }}>

        {/* Header */}
        <header className="light-reframing-header">
          <p className="light-reframing-eyebrow">Reframing the Problem</p>

          <h2 className="light-reframing-title">
            What if technology gave just enough <em>inspiration</em> to start
            creating, without <em>dictating the outcome</em>?
          </h2>
        </header>

        {/* Body */}
        <div className="light-reframing-body">
          <p>
            We realized the solution wasn&apos;t to automate creativity or
            provide instructions. It was to{" "}
            <span className="hi">remove the friction</span> of starting while{" "}
            <span className="hi">preserving the freedom</span> of making.
          </p>

          <p>
            By offering loose inspiration, we could
            help people engage with their creativity{" "}
            <span className="hi">on their own terms</span> and actually follow
            through.
          </p>
        </div>

        {/* Principle Cards — 3-col grid */}
        <div className="light-reframing-cards">
          {principleCards.map((card, index) => (
            <div key={index} className="light-principle-card">
              <div className="light-principle-card-header">
                <h3 className="light-principle-card-title">{card.title}</h3>
                <img
                  src={card.icon}
                  alt=""
                  className="light-principle-card-icon"
                />
              </div>
              <p className="light-principle-card-description">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}