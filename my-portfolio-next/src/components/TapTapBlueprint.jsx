// src/components/TapTapBlueprint.jsx
import React from "react";
import useReveal from "../utils/useReveal";

const gameplaySteps = [
  {
    title: "1. Press Start",
    description:
      "Hit the black start button to begin. The OLED display shows a countdown.",
    icon: "/assets/player.png",
  },
  {
    title: "2. Music Begins",
    description:
      "The piezo buzzer plays a song while LEDs light up in sync with each note.",
    icon: "/assets/music.png",
  },
  {
    title: "3. Match Rhythm",
    description:
      "Press the corresponding button while its LED is lit and track your score in real time.",
    icon: "/assets/rhythm.png",
  },
  {
    title: "4. Game Over",
    description:
      "When the song ends, your final score appears on the display and then the game resets.",
    icon: "/assets/gameover.png",
  },
];

export default function TapTapBlueprint() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="taptap-blueprint is-light"
      aria-label="TapTap The Blueprint"
    >
      <div className="taptap-blueprint-inner reveal reveal--up">
        {/* Header */}
        <header className="taptap-blueprint-header">
          <p className="taptap-blueprint-eyebrow">The Blueprint</p>
          <h2 className="taptap-blueprint-title">
            With our direction set, we <em>mapped out</em> exactly how the
            hardware would <em>come together</em>.
          </h2>
        </header>

        {/* Media — full container width, no caption (directions pattern, media-first) */}
        <div className="taptap-blueprint-media">
          <img
            src="/assets/blueprint.webp"
            alt="Wiring diagram showing Arduino Uno connected to breadboard, LEDs, buttons, OLED display, and piezo buzzer"
            className="taptap-blueprint-image"
          />
        </div>

        {/* Body */}
        <div className="taptap-blueprint-body">
          <p>
            The first step was {" "}
            <span className="hi">sketching a wiring diagram</span> to break down how all the components would interact.
          </p>
          <p>
            We planned for the Arduino Uno to be
            connected to a breadboard, with four
            colored buttons (each paired with an LED), an OLED display, a piezo
            buzzer, and a start button all wired into the board.{" "}
            <span className="hi">Understanding this system</span> helped{" "}
            <span className="hi">inform the design decisions</span> that
            followed.
          </p>
        </div>

        {/* Gameplay loop cards */}
        <div className="taptap-blueprint-steps">
          {/* Label — constraint-card-label shape, colour shifted off blue */}
          <p className="taptap-blueprint-steps-label">GAMEPLAY LOOP</p>

          {/* Single-column stack of horizontal cards */}
          <div className="taptap-blueprint-steps-list">
            {gameplaySteps.map((step, index) => (
              <div
                key={index}
                className="taptap-blueprint-step-card"
              >
                {/* Icon — left side, concept-card-icon sizing */}
                <img
                  src={step.icon}
                  alt=""
                  className="taptap-blueprint-step-icon"
                />
                {/* Content column */}
                <div className="taptap-blueprint-step-content">
                  <h3 className="taptap-blueprint-step-title">{step.title}</h3>
                  <p className="taptap-blueprint-step-description">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}