import React from "react";
import "../styles/AboutTop.scss";

const About = () => {
  return (
    <section className="about-top" id="about">
      {/* Wrap the main content in a shifted container */}
        <div className="about-wrapper">
          <div className="about-photo-wrapper">
            <img
              src="/assets/lana-about.svg"
              alt="Lana"
              className="about-photo"
            />
            <img
              className="curved-text-svg"
              src="/assets/text.svg"
              alt="Curved text"
            />
          </div>

          <div className="about-intro">
            <h2 className="about-heading">
              I'm a{" "}
              <span className="sliding-roles">
                <div className="roles-wrapper">
                  <span>user researcher ➹</span>
                  <span>product designer ✸</span>
                  <span>front-end developer ❒</span>
                  <span>visual designer ☻</span>
                  <span>user researcher ➹</span>
                </div>
              </span>
              <br />
              <span className="cooper-tagline">
                adding a lil’ magic to everyday tech.
              </span>
            </h2>

            <p className="about-bio">
              For me, design is about more than just functionality—it's about
              creating unforgettable experiences that shape how people engage
              with technology. This passion has led me to work across industries
              like tech, robotics, healthcare, and education, where I focus on
              forming interfaces and designing interactions for emerging
              technologies.
            </p>

            <p className="about-bio">
              I’m currently pursuing a{" "}
              <span className="light-bold">
                Master’s in Human-Computer Interaction
              </span>{" "}
              at{" "}
              <span className="light-bold">
                Carnegie Mellon University
              </span>
              . Before that, I graduated with distinction from the{" "}
              <span className="light-bold">University of Virginia</span> with a{" "}
              <span className="light-bold">B.A. in Cognitive Science</span>.
            </p>

            <div className="about-contact-block">
              <div className="about-icons">
                <a
                  className="about-icons-links"
                  href="https://www.linkedin.com/in/lana-farkas-66bb0a246"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/linkedin.svg" alt="LinkedIn" />
                </a>
                <a
                  className="about-icons-links"
                  href="mailto:lfarkas@andrew.cmu.edu"
                >
                  <img src="/assets/email.svg" alt="Email" />
                </a>
                <a
                  className="about-icons-links"
                  href="https://github.com/lfarkas4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/git.svg" alt="GitHub" />
                </a>
              </div>
              <div className="about-chat-message">happy to chat anytime <span className="cooper-symbols">⟢</span></div>

            </div>
          </div>
      </div>
      {/* Scroll cue outside the shifted content */}
      <div className="scroll-cue-spacer" />
<div className="scroll-cue">
  <div className="scroll-mouse">
    <div className="scroll-dot" />
  </div>
</div>
    </section>
  );
};

export default About;
