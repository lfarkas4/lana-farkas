import React from "react";
import "../styles/AboutStuff.css";

const AboutStuff = () => {
  return (
    <section className="about-cards">
      {/* Photocards Section */}
      <section className="floating-card-section">
        <div className="floating-card rotate-plant offset-left">
          <div className="clip-wrapper">
            <img src="/assets/clip.svg" alt="clip" className="clip-img" />
          </div>
          <div className="frame hover-label" data-label="propogation nation ⚘">
            <img src="/assets/pilea.svg" alt="Card 1" className="floating-img" />
          </div>
          <p className="floating-caption">i’m also a proud plant mom…</p>
        </div>

        <div className="floating-card rotate-toast offset-mid">
          <div className="clip-wrapper2">
            <img src="/assets/clip.svg" alt="clip" className="clip-img" />
          </div>
          <div className="frame hover-label" data-label="the best toast eva ＊">
            <img src="/assets/toast.svg" alt="Card 2" className="floating-img" />
          </div>
          <p className="floating-caption">…a lover of sweet treats…</p>
        </div>

        <div className="floating-card rotate-craft offset-right">
          <div className="clip-wrapper3">
            <img src="/assets/clip.svg" alt="clip" className="clip-img" />
          </div>
          <div className="frame hover-label" data-label="my kind of therapy ✂">
            <img src="/assets/craft.svg" alt="Card 3" className="floating-img" />
          </div>
          <p className="floating-caption">…and a maker of tiny messes.</p>
        </div>
      </section>

      {/* Spotify Section */}
      <div className="spotify-block">
        <h3 className="extras-intro">
          ...now here's a few tunes to <span className="cooper-spotify-heading">remember me by</span> ⊹
        </h3>
        <div className="spotify-trapezoid">
          <div className="spotify-row top-row">
            <iframe
              src="https://open.spotify.com/embed/track/5n1WeUNWJIjs9ueYD4v0Pt?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="After the Storm"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/5tqZJUHEuqdN12RZVq2l9p?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Hold On"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/2TzPpF0yA5g8kzE0F59iX2?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Scorsese Baby Daddy"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <div className="spotify-row bottom-row">
            <iframe
              src="https://open.spotify.com/embed/track/3E0ulIRg5neojZkEgVM2B7?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Time Moves Slow"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/5cxOC94379M1lUOww9SNLX?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="There She Goes"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStuff;
