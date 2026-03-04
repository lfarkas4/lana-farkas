import React, { useEffect, useRef, useState } from "react";
import useScrollAnimation from "../utils/useScrollAnimation";

// Spotify track data
const spotifyTracks = [
  { id: "6y0Etr2KJr0sdcEp7ajoUK", title: "Cosmic Girl", row: "top" },
  { id: "2mlCfcprMj3aOUX2uYuQEE", title: "Wallflower", row: "top" },
  { id: "6GVrDwaAuGOida6c7eYjLl", title: "Don't Forget It", row: "top" },
  { id: "7fax7NlxOq2X9kMZw8QLE2", title: "Tailwhip", row: "bottom" },
  { id: "7reX35Qt5uap48Bx0pLWn3", title: "You're My", row: "bottom" },
];

// Individual Spotify embed
const SpotifyEmbed = ({ trackId, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      if (!isLoaded) setHasError(true);
    }, 10000);
    return () => clearTimeout(timeoutRef.current);
  }, [isLoaded]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    clearTimeout(timeoutRef.current);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
  };

  return (
    <div className="spotify-embed-wrapper">
      {!isLoaded && !hasError && (
        <div className="spotify-skeleton">
          <div className="skeleton-content">
            <div className="skeleton-image"></div>
            <div className="skeleton-text">
              <div className="skeleton-title"></div>
              <div className="skeleton-artist"></div>
            </div>
          </div>
        </div>
      )}

      {hasError && (
        <div className="spotify-error">
          <p>Failed to load track</p>
          <button onClick={handleRetry} className="retry-button">
            Retry
          </button>
        </div>
      )}

      {!hasError && (
        <iframe
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
          width="100%"
          height="84"
          title={title}
          style={{
            borderRadius: "12px",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
          frameBorder="0"
          onLoad={handleLoad}
          onError={handleError}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      )}
    </div>
  );
};

// Reusable skeleton so we're not repeating inline JSX
const SpotifySkeleton = ({ trackId }) => (
  <div key={trackId} className="spotify-embed-wrapper">
    <div className="spotify-skeleton">
      <div className="skeleton-content">
        <div className="skeleton-image"></div>
        <div className="skeleton-text">
          <div className="skeleton-title"></div>
          <div className="skeleton-artist"></div>
        </div>
      </div>
    </div>
  </div>
);

const AboutStuff = () => {
  const [floatingCardsRef, floatingCardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [spotifyRef, spotifyVisible] = useScrollAnimation({ threshold: 0.05 });

  // Tracks whether iframes should be injected into the DOM yet
  const [shouldLoadSpotify, setShouldLoadSpotify] = useState(false);
  const preloadRef = useRef(null);

  // Start loading iframes 800px before the section enters the viewport
  // so they have time to initialize before the user actually sees them
  useEffect(() => {
    const el = preloadRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadSpotify(true);
          observer.disconnect();
        }
      },
      { rootMargin: "1600px 0px", threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const topRowTracks = spotifyTracks.filter((t) => t.row === "top");
  const bottomRowTracks = spotifyTracks.filter((t) => t.row === "bottom");

  return (
    <section className="about-cards">
      {/* Photocards Section */}
      <section
        ref={floatingCardsRef}
        className={`floating-card-section animate-section ${floatingCardsVisible ? "is-visible" : ""}`}
      >
        <div className="floating-card-grid">
          <div className="floating-card rotate-plant offset-left">
            <div className="clip-wrapper">
              <img src="/assets/clip.png" alt="clip" className="clip-img" />
            </div>
            <div className="frame hover-label" data-label="stationary">
              <img src="/assets/stationary.webp" alt="Card 1" className="floating-img" />
            </div>
            <p className="floating-caption">
              i'm also a stationery junkie <span className="cooper-symbols">✏︎</span>
            </p>
          </div>

          <div className="floating-card rotate-toast offset-mid">
            <div className="clip-wrapper2">
              <img src="/assets/clip.png" alt="clip" className="clip-img" />
            </div>
            <div className="frame hover-label" data-label="cafe">
              <img src="/assets/cafe.webp" alt="Card 2" className="floating-img" />
            </div>
            <p className="floating-caption">
              a hardcore cafe hopper <span className="cooper-symbols">☕︎</span>
            </p>
          </div>

          <div className="floating-card rotate-craft offset-right">
            <div className="clip-wrapper3">
              <img src="/assets/clip.png" alt="clip" className="clip-img" />
            </div>
            <div className="frame hover-label" data-label="ghost doggie">
              <img src="/assets/ghost.webp" alt="Card 3" className="floating-img" />
            </div>
            <p className="floating-caption">
              and a proud dog mom <span className="cooper-symbols">·ᴥ·</span>
            </p>
          </div>
        </div>
      </section>

      {/* preloadRef sits at the top of the spotify section so the 800px
          rootMargin fires while the user is still on the photocards above */}
      <div ref={preloadRef}>
        <div
          ref={spotifyRef}
          className={`spotify-block animate-section ${spotifyVisible ? "is-visible" : ""}`}
        >
          <h3 className="extras-intro">
            <span className="xs-hide">... and here's a few tunes to </span>
            <span className="xs-only">... a few tunes to </span>
            <span className="cooper-spotify-heading">remember me by!</span>
          </h3>

          <div className="spotify-trapezoid">
            <div className="spotify-row top-row">
              {topRowTracks.map((track) =>
                shouldLoadSpotify
                  ? <SpotifyEmbed key={track.id} trackId={track.id} title={track.title} />
                  : <SpotifySkeleton key={track.id} trackId={track.id} />
              )}
            </div>

            <div className="spotify-row bottom-row">
              {bottomRowTracks.map((track) =>
                shouldLoadSpotify
                  ? <SpotifyEmbed key={track.id} trackId={track.id} title={track.title} />
                  : <SpotifySkeleton key={track.id} trackId={track.id} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStuff;