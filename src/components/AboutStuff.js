import React, { useEffect, useRef, useState } from "react";
import "../styles/AboutStuff.scss";

// Spotify track data
const spotifyTracks = [
  { id: "5cxOC94379M1lUOww9SNLX", title: "Mood Ring", row: "top" },
  { id: "0jC4hSRcgcIN8qcfSN7Wkf", title: "2 Much Pride", row: "top" },
  { id: "4AvachE4yZUjWBBub9t8aT", title: "Wild And Alone", row: "top" },
  { id: "0uiHiwJzQvWLTETzEZRxFG", title: "Co-Star", row: "bottom" },
  { id: "1fZztBfI3x4UtWwWXXZk89", title: "WAITIN", row: "bottom" }
];

// Individual Spotify embed component with lazy loading
const SpotifyEmbed = ({ trackId, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const embedRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        rootMargin: '100px', // Start loading 100px before visible
        threshold: 0.01 
      }
    );

    if (embedRef.current) {
      observer.observe(embedRef.current);
    }

    return () => {
      if (embedRef.current) {
        observer.unobserve(embedRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible]);

  // Set timeout for loading
  useEffect(() => {
    if (isVisible && !isLoaded && !hasError) {
      timeoutRef.current = setTimeout(() => {
        if (!isLoaded) {
          setHasError(true);
        }
      }, 10000); // 10 second timeout
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, isLoaded, hasError]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const handleRetry = () => {
    setHasError(false);
    setIsLoaded(false);
    setIsVisible(true);
  };

  return (
    <div ref={embedRef} className="spotify-embed-wrapper">
      {/* Loading skeleton with subtle Spotify colors */}
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

      {/* Error state */}
      {hasError && (
        <div className="spotify-error">
          <p>Failed to load track</p>
          <button onClick={handleRetry} className="retry-button">
            Retry
          </button>
        </div>
      )}

      {/* Actual iframe - only render when visible */}
      {isVisible && !hasError && (
        <iframe
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
          width="100%"
          height="84"
          title={title}
          style={{ 
            borderRadius: "12px",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s ease"
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

const AboutStuff = () => {
  const floatingCardsRef = useRef(null);
  const spotifyRef = useRef(null);

  // Preconnect to Spotify domains for faster loading
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://open.spotify.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'dns-prefetch';
    link2.href = 'https://open.spotify.com';
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

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

  const topRowTracks = spotifyTracks.filter(track => track.row === "top");
  const bottomRowTracks = spotifyTracks.filter(track => track.row === "bottom");

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
            <p className="floating-caption">i'm also a stationery junkie <span className="cooper-symbols">✏︎</span></p>
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
            {topRowTracks.map((track) => (
              <SpotifyEmbed 
                key={track.id} 
                trackId={track.id} 
                title={track.title}
              />
            ))}
          </div>
          <div className="spotify-row bottom-row">
            {bottomRowTracks.map((track) => (
              <SpotifyEmbed 
                key={track.id} 
                trackId={track.id} 
                title={track.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStuff;