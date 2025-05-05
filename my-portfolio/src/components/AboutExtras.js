import React, { useState } from "react";
import "../styles/AboutExtras.css";
import "../styles/ExtrasCards.css";

const AboutExtras = () => {
  const [likedStats, setLikedStats] = useState(false);
  const [likedJoy, setLikedJoy] = useState(false);
  const [likedDates, setLikedDates] = useState(false);

  const icons = [
    "/assets/toolkit/figma.png",
    "/assets/toolkit/vscode.png",
    "/assets/toolkit/javascript.png",
    "/assets/toolkit/react.png",
    "/assets/toolkit/framer.png",
    "/assets/toolkit/sketch.png",
    "/assets/toolkit/cloud.png",
    "/assets/toolkit/indesign.png",
    "/assets/toolkit/illustrator.png",
    "/assets/toolkit/photoshop.png",
    "/assets/toolkit/xd.png",
    "/assets/toolkit/procreate.png",
  ];

  return (
    <section className="about-extras">
      <h3 className="extras-intro">
        ...and here’s the rest of <em>my universeeeee</em> ✦
      </h3>

      <div className="extras-grid">
        {/* LEFT COLUMN */}
        <div className="extras-column full-height-col">
          {/* Personal Stats */}
          <div className="extras-card personal-card">
            <button
              className="svg-heart-btn"
              onClick={() => setLikedStats(!likedStats)}
            >
              <img
                src={
                  likedStats
                    ? "/assets/heartfull.svg"
                    : "/assets/heartempty.svg"
                }
                alt="Like"
                className="heart-icon"
              />
            </button>
            <h4 className="extras-title">
              <em>personal stats</em> ☟
            </h4>
            <div className="stats-container">
              <div className="stat-row">
                <span className="stat-label">MBTI Type ⇢</span>
                <span className="stat-value">INTP</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Zodiac Sign ✦</span>
                <span className="stat-value">Aries</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Hogwarts House ⤷</span>
                <span className="stat-value">Ravenclaw</span>
              </div>
              <div className="stat-row">
                <span className="stat-label">Enneagram →</span>
                <span className="stat-value">Type 4</span>
              </div>
            </div>
          </div>

          {/* Pinterest */}
          <div className="extras-card pinterest-mockup stretch-bottom pinterest-card">
            <div className="pinterest-header">
              <img
                src="/assets/pinprofile.jpg"
                alt="Pinterest profile"
                className="pinterest-avatar"
              />
              <div className="pinterest-info">
                <div className="pinterest-username">lalalanaa &lt;3</div>
                <div className="pinterest-board-title">
                  recent pins on my fav app hehe
                </div>
              </div>
            </div>

            <div className="pinterest-content-wrapper">
              <div className="pinterest-scroll-area">
                <div className="pinterest-mock-grid">
                  {[...Array(48)].map((_, i) => (
                    <img
                      key={i}
                      src={`/assets/pinphotos/pin${i + 1}.JPG`}
                      alt={`pin${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <a
                className="pinterest-follow"
                href="https://www.pinterest.com/someonerandom4361/coot/"
                target="_blank"
                rel="noopener noreferrer"
              >
                follow me on <span className="pinterest-logo">pinterest ↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="extras-column full-height-col">
          {/* Spotify Embed */}
          <div className="spotify-card-wrapper spotify-card">
            <iframe
              className="spotify-embed"
              src="https://open.spotify.com/embed/playlist/651wmczKP0kaMm6v8uiINZ?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Saturn Playlist by lana.fark"
            />
          </div>

          {/* Joy */}
          <div className="extras-card joy-card">
            <button
              className="svg-heart-btn"
              onClick={() => setLikedJoy(!likedJoy)}
            >
              <img
                src={
                  likedJoy
                    ? "/assets/heartfull.svg"
                    : "/assets/heartempty.svg"
                }
                alt="Like"
                className="heart-icon"
              />
            </button>
            <h4 className="extras-title">
              <em>what brings me joy</em> ☟
            </h4>
            <div className="stats-container">
              <div className="stat-row">🖌️ Doodling & Animating</div>
              <div className="stat-row">🌱 Plant Parenting</div>
              <div className="stat-row">💃 Dancing</div>
              <div className="stat-row">📖 Junk Journaling</div>
            </div>
          </div>

          {/* First Date Things */}
          <div className="extras-card stretch-bottom dates-card">
            <button
              className="svg-heart-btn"
              onClick={() => setLikedDates(!likedDates)}
            >
              <img
                src={
                  likedDates
                    ? "/assets/heartfull.svg"
                    : "/assets/heartempty.svg"
                }
                alt="Like"
                className="heart-icon"
              />
            </button>
            <h4 className="extras-title">
              <em>stuff i say on first dates</em> ☟
            </h4>
            <div className="stats-container">
              <div className="stat-row">"I have a twin brother."</div>
              <div className="stat-row">"I’ve pierced 7 of my friends’ ears."</div>
              <div className="stat-row">"I’m very allergic to walnuts."</div>
              <div className="stat-row">"I'm still on Team Jacob. Don't ask." </div>
              <div className="stat-row">
              "I speak just enough Russian to confuse strangers and make my
                mom proud."
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toolkit Carousel */}
      <div className="toolkit-card extras-card">
        <h4 className="extras-title">
          <em>my design toolkit</em> ☟
        </h4>
        <div className="toolkit-scroll-wrapper">
          <div className="toolkit-scroll-track">
            <div className="toolkit-scroll-sequence">
              {icons.map((src, i) => (
                <img key={`a-${i}`} src={src} alt={`toolkit-icon-${i}`} />
              ))}
            </div>
            <div className="toolkit-scroll-sequence">
              {icons.map((src, i) => (
                <img key={`b-${i}`} src={src} alt={`toolkit-icon-${i}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExtras;
