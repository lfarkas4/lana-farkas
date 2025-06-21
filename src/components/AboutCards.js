import React from "react";
import "../styles/AboutCards.scss";

const AboutCards = () => {
  return (
    <section className="about-cards">
      <div className="cards-grid">
        {/* Personal Stats Card */}
        <div className="info-card">
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

        {/* Design Principles Card */}
        <div className="info-card">
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

        {/* Fun Facts Card */}
        <div className="info-card">
          <div className="card-top-row">
            <h3 className="card-heading">more fun facts</h3>
            <img src="/assets/topline1.svg" alt="" className="card-top-svg" />
          </div>
          <div className="card-main-content">
            <div className="card-content2">
              <div className="card-group">
                <span className="card-label">fun fact #1</span>
                <span className="card-value">I have a twin brother.</span>
              </div>
              <div className="card-group">
                <span className="card-label">fun fact #2</span>
                <span className="card-value">I'm allergic to walnuts.</span>
              </div>
              <div className="card-group">
                <span className="card-label">fun fact #3</span>
                <span className="card-value">I’m a parallel parking god.</span>
              </div>
              <div className="card-group">
                <span className="card-label">fun fact #4</span>
                <span className="card-value">I’m a london fog loyalist.</span>
              </div>
            </div>
          </div>
          <img src="/assets/bottomline.svg" alt="" className="card-bottom-svg" />
        </div>
      </div>

      {/* Spotify Section */}
      <div className="spotify-block">
      <h3 className="extras-intro">
      ...and here’s a few stellar tracks <span className="cooper-spotify-heading">just for you</span> ⊹
      </h3>
        <div className="spotify-trapezoid">
          <div className="spotify-row top-row">
            <iframe
              src="https://open.spotify.com/embed/track/1otG6j1WHNvl9WgXLWkHTo?utm_source=generator&theme=0"
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
              src="https://open.spotify.com/embed/track/2E7a96qey4AzSOdK6H21vS?utm_source=generator&theme=0"
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
              src="https://open.spotify.com/embed/track/4eVUPMhqGFcmxo6cjv9KqA?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Time Moves Slow"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/71WVaCgIEVbfTgL0iJt8c3?utm_source=generator&theme=0"
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

export default AboutCards;
