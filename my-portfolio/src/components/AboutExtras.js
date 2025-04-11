import React, { useState } from "react";
import "../styles/AboutExtras.css";

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
    "/assets/toolkit/indesign.png",
    "/assets/toolkit/illustrator.png",
    "/assets/toolkit/photoshop.png",
    "/assets/toolkit/xd.png",
    "/assets/toolkit/procreate.png",
];

  return (
    <section className="about-extras">
      <h3 className="extras-intro">
        ...and here’s the rest of <em>my universe</em> ✦
      </h3>

      <div className="extras-grid">
        {/* LEFT COLUMN */}
        <div className="extras-column full-height-col">
          {/* Personal Stats */}
          <div className="extras-card">
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
              <em>personal stats </em> ☟
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

          {/* Pinterest Widget */}
          <div className="extras-card pinterest-mockup stretch-bottom">
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

            <div className="pinterest-scroll-area">
              <div className="pinterest-mock-grid">
                <img src="/assets/pinphotos/pin7.jpg" alt="pin7" />
                <img src="/assets/pinphotos/pin8.jpg" alt="pin8" />
                <img src="/assets/pinphotos/pin9.jpg" alt="pin9" />
                <img src="/assets/pinphotos/pin10.jpg" alt="pin10" />
                <img src="/assets/pinphotos/pin11.jpg" alt="pin11" />
                <img src="/assets/pinphotos/pin12.jpg" alt="pin12" />
                <img src="/assets/pinphotos/pin13.jpg" alt="pin13" />
                <img src="/assets/pinphotos/pin14.jpg" alt="pin14" />
                <img src="/assets/pinphotos/pin15.jpg" alt="pin15" />
                <img src="/assets/pinphotos/pin16.jpg" alt="pin16" />
                <img src="/assets/pinphotos/pin17.jpg" alt="pin17" />
                <img src="/assets/pinphotos/pin18.jpg" alt="pin18" />
                <img src="/assets/pinphotos/pin19.jpg" alt="pin19" />
                <img src="/assets/pinphotos/pin20.jpg" alt="pin20" />
                <img src="/assets/pinphotos/pin21.jpg" alt="pin21" />
                <img src="/assets/pinphotos/pin22.jpg" alt="pin22" />
                <img src="/assets/pinphotos/pin23.jpg" alt="pin23" />
                <img src="/assets/pinphotos/pin24.jpg" alt="pin24" />
                <img src="/assets/pinphotos/pin25.jpg" alt="pin25" />
                <img src="/assets/pinphotos/pin26.jpg" alt="pin26" />
                <img src="/assets/pinphotos/pin27.jpg" alt="pin27" />
                <img src="/assets/pinphotos/pin28.jpg" alt="pin28" />
                <img src="/assets/pinphotos/pin29.jpg" alt="pin29" />
                <img src="/assets/pinphotos/pin30.jpg" alt="pin30" />
                <img src="/assets/pinphotos/pin31.jpg" alt="pin31" />
                <img src="/assets/pinphotos/pin32.jpg" alt="pin32" />
                <img src="/assets/pinphotos/pin33.jpg" alt="pin33" />
                <img src="/assets/pinphotos/pin34.jpg" alt="pin34" />
                <img src="/assets/pinphotos/pin35.jpg" alt="pin35" />
                <img src="/assets/pinphotos/pin36.jpg" alt="pin36" />
                <img src="/assets/pinphotos/pin37.jpg" alt="pin37" />
                <img src="/assets/pinphotos/pin38.jpg" alt="pin38" />
                <img src="/assets/pinphotos/pin39.jpg" alt="pin39" />
                <img src="/assets/pinphotos/pin40.jpg" alt="pin40" />
                <img src="/assets/pinphotos/pin41.jpg" alt="pin41" />
                <img src="/assets/pinphotos/pin42.jpg" alt="pin42" />
                <img src="/assets/pinphotos/pin43.jpg" alt="pin43" />
                <img src="/assets/pinphotos/pin44.jpg" alt="pin44" />
                <img src="/assets/pinphotos/pin45.jpg" alt="pin45" />
                <img src="/assets/pinphotos/pin46.jpg" alt="pin46" />
                <img src="/assets/pinphotos/pin47.jpg" alt="pin47" />
                <img src="/assets/pinphotos/pin48.jpg" alt="pin48" />
                <img src="/assets/pinphotos/pin1.jpg" alt="pin1" />
                <img src="/assets/pinphotos/pin2.jpg" alt="pin2" />
                <img src="/assets/pinphotos/pin3.jpg" alt="pin3" />
                <img src="/assets/pinphotos/pin4.jpg" alt="pin4" />
                <img src="/assets/pinphotos/pin5.jpg" alt="pin5" />
                <img src="/assets/pinphotos/pin6.jpg" alt="pin6" />
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

        {/* RIGHT COLUMN */}
        <div className="extras-column full-height-col">
          {/* Spotify Playlist Embed */}
          <div className="spotify-card-wrapper">
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

          {/* What Brings Me Joy */}
          <div className="extras-card">
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
          <div className="extras-card">
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
              <div className="stat-row">“I have a twin brother.”</div>
              <div className="stat-row">“I’ve pierced 7 of my friends’ ears.”</div>
              <div className="stat-row">“I’m very allergic to cats.”</div>
              <div className="stat-row">
                “I speak just enough Russian to confuse strangers and make my
                mom proud.”
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* My Design Toolkit - Static Full-Width Card */}
{/* My Design Toolkit - Scrolling Carousel inside Card */}

{/* My Design Toolkit - Scrolling Carousel inside Card */}
<div className="toolkit-card extras-card">
  <h4 className="extras-title"><em>my design toolkit</em> ☟</h4>

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

