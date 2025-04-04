import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-top" id="about">
      <div className="about-wrapper">
        <div className="about-photo-wrapper">
          <img src="/assets/lana-about.svg" alt="Lana" className="about-photo" />
        </div>

        <div className="about-intro">
          <h2 className="about-heading">
            i’m a{" "}
            <span className="sliding-roles">
            <div className="roles-wrapper">
              <span>user researcher ➹</span>
              <span>product designer ✸</span>
              <span>front-end developer ❒</span>
              <span>visual designer ☻</span>
            {/* Duplicate for infinite scrolling illusion */}
              <span>user researcher ➹</span>
            </div>
            </span>
            <br />
            <span className="italic">adding a lil’ magic to everyday tech.</span>
          </h2>

          <p className="about-bio">
            For me, design is about more than just functionality—it's about
            creating unforgettable experiences that shape how people engage with
            technology. This passion has led me to work across industries like
            tech, robotics, healthcare, and education, where I focus on forming
            interfaces and designing interactions for emerging technologies.
          </p>

          <p className="about-bio">
            I’m currently pursuing a{" "}
            <span className="light-bold">Master’s in Human-Computer Interaction</span> at{" "}
            <span className="light-bold">Carnegie Mellon University</span>. Before that, I graduated with distinction
            from the <span className="light-bold">University of Virginia</span> with a{" "}
            <span className="light-bold">B.A. in Cognitive Science</span>.
          </p>

          <div className="footer-left" style={{ marginTop: "18px" }}>
            <a
              href="https://www.linkedin.com/in/lana-farkas-66bb0a246"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
            >
              <img src="/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="mailto:lfarkas@andrew.cmu.edu" className="footer-icon2">
              <img src="/assets/email.svg" alt="Email" />
            </a>
            <span className="footer-message">happy to chat anytime ⟢</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
