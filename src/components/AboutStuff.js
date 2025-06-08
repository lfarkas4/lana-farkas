import React from "react";
import "../styles/AboutStuff.css";

const AboutStuff = () => {
    return (
      <section className="about-cards">
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
  
  export default AboutStuff;
  