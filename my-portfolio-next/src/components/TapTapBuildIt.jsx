// src/components/TapTapBuildIt.jsx
import React from "react";
import useReveal from "../utils/useReveal";

const buildSteps = [
  {
    id: "wiring",
    heading: "Wiring the Breadboard",
    description:
      "We started by connecting all components to the breadboard to establish the basic circuit.",
    callout: "/assets/tapcallout1.png",
    calloutAlt:
      "Finding: Testing each connection individually confirmed that all supplies functioned properly.",
    image: "/assets/tappic1.webp",
    imageAlt: "Hand wiring components onto a breadboard with colored buttons",
    caption: "Laying out the initial circuit with all components.",
    reverse: false, // image left, content right
  },
  {
    id: "coding",
    heading: "Coding the Game Loop",
    description:
      "The Arduino needed to coordinate music playback, LED timing, button inputs, and score tracking all at once.",
    callout: "/assets/tapcallout2.png",
    calloutAlt:
      "Finding: Modular code structure made debugging and testing individual features faster.",
    image: "/assets/tappic2.webp",
    imageAlt: "Arduino board with wires connected on a desk",
    caption: "Testing the code to confirm it's functional.",
    reverse: true, // content left, image right
  },
  {
    id: "laser",
    heading: "Laser-Cutting the Frame",
    description:
      "We designed and laser-cut an acrylic enclosure to house the electronics while keeping key components accessible.",
    callout: "/assets/tapcallout3.png",
    calloutAlt:
      "Finding: Digital precision ensures pieces fit together properly without gaps or adjustments.",
    image: "/assets/tappic3.webp",
    imageAlt: "Person monitoring acrylic sheet inside a FusionPro laser cutter",
    caption: "Monitoring  our acrylic in the laser cutter.",
    reverse: false,
  },
  {
    id: "assembly",
    heading: "Final Assembly of Materials",
    description:
      "We 3D-printed finger shoes for gameplay, then integrated all components into the case and tested the full system.",
    callout: "/assets/tapcallout4.png",
    calloutAlt:
      "Finding: Assembly involved fine-tuning wire length and alignment of components.",
    image: "/assets/tappic4.webp",
    imageAlt: "Completed TapTap game prototype on a table with coloured buttons lit",
    caption: "Finally putting everything together!",
    reverse: true,
  },
];

export default function TapTapBuildIt() {
  const sectionRef = useReveal();

  return (
    <section
      ref={sectionRef}
      className="taptap-build is-dark"
      aria-label="TapTap Bringing It to Life"
    >
      {/* Header */}
      <div className="taptap-build-header reveal-block">
        <div className="taptap-build-eyebrow">Bringing It to Life</div>
        <p className="taptap-build-intro">
          From <em>breadboard</em> to <em>laser cutter</em> to <em>3D printer</em>, here&apos;s
          how we turned our idea into a working game.
        </p>
      </div>

      {/* Build steps — alternating layout via .reverse */}
      {buildSteps.map((step) => (
        <div
          key={step.id}
          className={`taptap-build-subsection reveal-block${
            step.reverse ? " reverse" : ""
          }`}
        >
          {/* Media column */}
          <div className="taptap-build-media reveal-block">
            <img
              src={step.image}
              alt={step.imageAlt}
              className="taptap-build-image"
            />
            <p className="taptap-build-caption">{step.caption}</p>
          </div>

          {/* Content column */}
          <div className="taptap-build-content reveal-block">
            <h3 className="taptap-build-subtitle">{step.heading}</h3>
            <p className="taptap-build-text">{step.description}</p>

            {/* Callout notecard — PNG, same pattern as research-callout-img */}
            <img
              src={step.callout}
              alt={step.calloutAlt}
              className="taptap-build-callout-img"
            />
          </div>
        </div>
      ))}
    </section>
  );
}