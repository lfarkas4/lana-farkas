import React, { useRef } from "react";
import "../styles/AboutCards.css";

const AboutCards = () => {
  const tiltRefs = {
    stats: useRef(null),
    principles: useRef(null),
    vibes: useRef(null),
  };

  const handleMouseMove = (ref) => (e) => {
    const card = ref.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y / height) - 0.5) * 20;
    const rotateY = ((x / width) - 0.5) * -20;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (ref) => () => {
    const card = ref.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <section className="about-cards">
      <div className="cards-grid">
        {/* Personal Stats Card */}
        <div
          className="tilt-card"
          onMouseMove={handleMouseMove(tiltRefs.stats)}
          onMouseLeave={handleMouseLeave(tiltRefs.stats)}
        >
          <div className="tilt-inner info-card" ref={tiltRefs.stats}>
            <div className="card-top-row">
              <h3 className="card-heading">personal stats</h3>
              <img src="/assets/topline1.svg" alt="" className="card-top-svg" />
            </div>
            <div className="card-main-content">
              <div className="card-content">
                <div className="personal-stat-group">
                  <div className="stat-icon2">⊹</div>
                  <div className="stat-text">
                    <span className="card-label">MBTI TYPE</span>
                    <span className="card-value">INTP</span>
                  </div>
                </div>
                <div className="personal-stat-group">
                  <div className="stat-icon">✧</div>
                  <div className="stat-text">
                    <span className="card-label">ZODIAC SIGN</span>
                    <span className="card-value">Aries</span>
                  </div>
                </div>
                <div className="personal-stat-group">
                  <div className="stat-icon3">☆</div>
                  <div className="stat-text">
                    <span className="card-label">HOGWARTS HOUSE</span>
                    <span className="card-value">Ravenclaw</span>
                  </div>
                </div>
                <div className="personal-stat-group">
                  <div className="stat-icon4">✶</div>
                  <div className="stat-text">
                    <span className="card-label">ENNEAGRAM</span>
                    <span className="card-value">Type 4</span>
                  </div>
                </div>
              </div>
            </div>
            <img src="/assets/bottomline.svg" alt="" className="card-bottom-svg" />
          </div>
        </div>

        {/* Design Principles Card */}
        <div
          className="tilt-card"
          onMouseMove={handleMouseMove(tiltRefs.principles)}
          onMouseLeave={handleMouseLeave(tiltRefs.principles)}
        >
          <div className="tilt-inner info-card" ref={tiltRefs.principles}>
            <div className="card-top-row">
              <h3 className="card-heading">design principles</h3>
              <img src="/assets/topline2.svg" alt="" className="card-top-svg" />
            </div>
            <div className="card-main-content">
              <div className="card-content2">
                <div className="card-group">
                  <span className="card-label">Listen between the lines...</span>
                  <span className="card-value">Design with empathy</span>
                </div>
                <div className="card-group">
                  <span className="card-label">SEE BEYOND THE INTERACTION...</span>
                  <span className="card-value">Respect the context</span>
                </div>
                <div className="card-group">
                  <span className="card-label">BUILD FOR WHAT’S NEXT...</span>
                  <span className="card-value">Anticipate evolution</span>
                </div>
                <div className="card-group">
                  <span className="card-label">THE DETAILS ARE THE MAGIC...</span>
                  <span className="card-value">Delight through craft</span>
                </div>
              </div>
            </div>
            <img src="/assets/bottomline.svg" alt="" className="card-bottom-svg" />
          </div>
        </div>

        {/* Spotify Card */}
        <div
          className="tilt-card"
          onMouseMove={handleMouseMove(tiltRefs.vibes)}
          onMouseLeave={handleMouseLeave(tiltRefs.vibes)}
        >
          <div className="tilt-inner info-card1" ref={tiltRefs.vibes}>
            <div className="card-top-row">
              <h3 className="card-heading">current vibes</h3>
              <img src="/assets/topline1.svg" alt="" className="card-top-svg" />
            </div>
            <div className="card-main-content spotify-container">
              <iframe
                src="https://open.spotify.com/embed/track/1otG6j1WHNvl9WgXLWkHTo?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="After the Storm"
              ></iframe>
              <iframe
                src="https://open.spotify.com/embed/track/2E7a96qey4AzSOdK6H21vS?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Untitled Track 2"
              ></iframe>
              <iframe
                src="https://open.spotify.com/embed/track/2VjXGuPVVxyhMgER3Uz2Fe?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Ex-Factor"
              ></iframe>
              <iframe
                src="https://open.spotify.com/embed/track/1wgqttlPacpvmX5DKVboOa?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Paper Planes"
              ></iframe>
            </div>
            <img src="/assets/bottomline.svg" alt="" className="card-bottom-svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
