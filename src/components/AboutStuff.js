import React, { useEffect, useRef } from "react";
import "../styles/AboutStuff.scss";

const AboutStuff = () => {
  const floatingCardsRef = useRef(null);
  const spotifyRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (floatingCardsRef.current) {
      observer.observe(floatingCardsRef.current);
    }
    if (spotifyRef.current) {
      observer.observe(spotifyRef.current);
    }

    return () => {
      if (floatingCardsRef.current) {
        observer.unobserve(floatingCardsRef.current);
      }
      if (spotifyRef.current) {
        observer.unobserve(spotifyRef.current);
      }
    };
  }, []);

  return (
    <section className="about-cards">
      {/* Photocards Section */}
      <section ref={floatingCardsRef} className="floating-card-section animate-section">
        <div className="floating-card-grid">
          <div className="floating-card rotate-plant offset-left">
            <div className="clip-wrapper">
              <img src="/assets/clip.png" alt="clip" className="clip-img" />
            </div>
            <div className="frame hover-label" data-label="propogation nation ☘">
              <img src="/assets/stationary.png" alt="Card 1" className="floating-img" />
            </div>
            <p className="floating-caption">i'm also a stationery junkie <span className="cooper-symbols">✍︎</span></p>
          </div>

          <div className="floating-card rotate-toast offset-mid">
            <div className="clip-wrapper2">
              <img src="/assets/clip.png" alt="clip" className="clip-img" />
            </div>
            <div className="frame hover-label" data-label="the best toast eva ＊">
              <img src="/assets/cafe.png" alt="Card 2" className="floating-img" />
            </div>
            <p className="floating-caption">a hardcore cafe hopper <span className="cooper-symbols">☕︎</span></p>
          </div>

          <div className="floating-card rotate-craft offset-right">
            <div className="clip-wrapper3">
              <img src="/assets/clip.png" alt="clip" className="clip-img" />
            </div>
            <div className="frame hover-label" data-label="my kind of therapy ✂">
              <img src="/assets/ghost.png" alt="Card 3" className="floating-img" />
            </div>
            <p className="floating-caption">and a proud dog mom <span className="cooper-symbols">·ᴥ·</span></p>
          </div>
        </div>
      </section>

      {/* Spotify Section */}
      <div ref={spotifyRef} className="spotify-block animate-section">
        <h3 className="extras-intro">
          <span className="xs-hide">... and here's a few tunes to </span>
          <span className="xs-only">... a few tunes to </span>
          <span className="cooper-spotify-heading">remember me by!</span>
        </h3>
        <div className="spotify-trapezoid">
          <div className="spotify-row top-row">
            <iframe
              src="https://open.spotify.com/embed/track/5cxOC94379M1lUOww9SNLX?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Killer"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/0jC4hSRcgcIN8qcfSN7Wkf?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Hold On"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/4AvachE4yZUjWBBub9t8aT?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Into Sands"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <div className="spotify-row bottom-row">
            <iframe
              src="https://open.spotify.com/embed/track/0uiHiwJzQvWLTETzEZRxFG?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Pluto"
              loading="lazy"
              style={{ borderRadius: "12px" }}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
            <iframe
              src="https://open.spotify.com/embed/track/2TzPpF0yA5g8kzE0F59iX2?utm_source=generator&theme=0"
              width="100%"
              height="84"
              title="Mood Ring"
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