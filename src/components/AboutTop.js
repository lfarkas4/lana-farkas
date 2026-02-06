// src/components/AboutTop.js
import React, { useEffect, useState } from "react";
import "../styles/AboutTop.scss";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mq.matches) {
        setShouldAnimate(false);
        return;
      }
    }

    // Let the browser paint once, then mark section as loaded
    const id = window.requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  const rootClasses = [
    "about-top",
    isLoaded && shouldAnimate && "about-top-loaded",
    !shouldAnimate && "no-animation",
  ]
    .filter(Boolean)
    .join(" ");

  const withAnim = (baseClass, delaySeconds) => ({
    className: [baseClass, shouldAnimate && "animate-fade-in"]
      .filter(Boolean)
      .join(" "),
    style: shouldAnimate ? { animationDelay: `${delaySeconds}s` } : undefined,
  });

  return (
    <section className={rootClasses} id="about">
      {/* Wrap the main content in a shifted container */}
      <div className="about-wrapper">
        <div {...withAnim("about-photo-wrapper", 0.1)}>
          <img
            src="/assets/lana-about1.png"
            alt="Lana"
            className="about-photo"
            loading="lazy"
          />
          <img
            className="curved-text-svg"
            src="/assets/heeeey.png"
            alt="Curved text"
            loading="lazy"
          />
        </div>

        <div className="about-intro">
          <h2 {...withAnim("about-heading", 0.18)}>
            I&apos;m a{" "}
            <span className="sliding-roles">
              <div className="roles-wrapper">
                <span>product designer ✸</span>
                <span>front-end developer ⚡︎</span>
                <span>visual designer ☻</span>
                <span>user researcher ➹</span>
                <span>product designer ✸</span>
              </div>
            </span>
            <br />
            <span className="cooper-tagline">
            asking 'what if' and crafting the answer.
            </span>
          </h2>

          <p {...withAnim("about-bio", 0.26)}>
            For me, design isn't just about solving problems — it&apos;s
            about experimenting with possibilities that change how people interact with technology.
            This approach has taken me across tech, robotics, healthcare, and education, where 
            I prototype and test experiences for emerging technologies that haven't been built before.
          </p>

          <p {...withAnim("about-bio", 0.34)}>
            I recently earned a{" "}
            <span className="light-bold">
              Master’s in Human-Computer Interaction
            </span>{" "}
            at{" "}
            <span className="light-bold">Carnegie Mellon University</span>.{" "}
            Before that, I graduated with distinction from the{" "}
            <span className="light-bold">University of Virginia</span> with a{" "}
            <span className="light-bold">B.A. in Cognitive Science</span>.
          </p>

          <div {...withAnim("about-contact-block", 0.42)}>
            <div className="about-icons">
              <a
                className="about-icons-links"
                href="https://www.linkedin.com/in/lana-farkas-66bb0a246"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/linkedin.svg" alt="LinkedIn" loading="lazy" />
              </a>
              <a
                className="about-icons-links"
                href="mailto:lanarobfark@gmail.com"
              >
                <img src="/assets/email.svg" alt="Email" loading="lazy" />
              </a>
              <a
                className="about-icons-links"
                href="https://github.com/lfarkas4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/git.svg" alt="GitHub" loading="lazy" />
              </a>
            </div>
            <div className="about-chat-message">
              happy to chat anytime <span className="cooper-symbols">⟢</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue outside the shifted content */}
      <div className="scroll-cue-spacer" />
      <div {...withAnim("scroll-cue", 0.5)}>
        <div className="scroll-cue">
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
