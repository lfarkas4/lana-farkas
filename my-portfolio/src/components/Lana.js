import React from "react";
import "../styles/Lana.css";

const Lana = () => {
  return (
    <div className="lana-container">

      {/* === Responsive floating animated version === */}
      {/* <img src="/assets/L.svg" alt="L" className="lana-piece l-piece" /> */}
      {/* <img src="/assets/A1.svg" alt="A1" className="lana-piece a1-piece" /> */}
      {/* <img src="/assets/N.svg" alt="N" className="lana-piece n-piece" />
      <img src="/assets/A2.svg" alt="A2" className="lana-piece a2-piece" /> */}
      {/* <img src="/assets/halo.svg" alt="Halo" className="lana-piece halo-piece" /> */}


      {/* <img src="/assets/orstar1.svg" alt="Orange Star 1" className="lana-piece orstar1-piece" />
      <img src="/assets/redstar1.svg" alt="Red Star 1" className="lana-piece redstar1-piece" />
      <img src="/assets/blustar3.svg" alt="Blue Star 3" className="lana-piece blustar3-piece" />
      <img src="/assets/blustar2.svg" alt="Blue Star 2" className="lana-piece blustar2-piece" />
      <img src="/assets/blustar1.svg" alt="Blue Star 1" className="lana-piece blustar1-piece" />
      <img src="/assets/redstar2.svg" alt="Red Star 2" className="lana-piece redstar2-piece" />
      <img src="/assets/crown.svg" alt="Crown" className="lana-piece crown-piece" /> */}

      
      <img
        src="/assets/L@1x.png"
        srcSet="/assets/L@1x.png 1x, /assets/L@2x.png 2x, /assets/L@3x.png 3x"
        alt="L"
        className="lana-piece l-piece"
      />
      <img
        src="/assets/A1@1x.png"
        srcSet="/assets/A1@1x.png 1x, /assets/A1@2x.png 2x, /assets/A1@3x.png 3x"
        alt="A1"
        className="lana-piece a1-piece"
      />
      <img
        src="/assets/N@1x.png"
        srcSet="/assets/N@1x.png 1x, /assets/N@2x.png 2x, /assets/N@3x.png 3x"
        alt="N"
        className="lana-piece n-piece"
      />
      <img
        src="/assets/A2@1x.png"
        srcSet="/assets/A2@1x.png 1x, /assets/A2@2x.png 2x, /assets/A2@3x.png 3x"
        alt="A2"
        className="lana-piece a2-piece"
      />
      <img
        src="/assets/halo@1x.png"
        srcSet="/assets/halo@1x.png 1x, /assets/halo@2x.png 2x, /assets/halo@3x.png 3x"
        alt="halo"
        className="lana-piece halo-piece"
      />



      <img
        src="/assets/orstar1@1x.png"
        srcSet="/assets/orstar1@1x.png 1x, /assets/orstar1@2x.png 2x, /assets/orstar1@3x.png 3x"
        alt="orstar1"
        className="lana-piece orstar1-piece"
      />
      <img
        src="/assets/redstar1@1x.png"
        srcSet="/assets/redstar1@1x.png 1x, /assets/redstar1@2x.png 2x, /assets/redstar1@3x.png 3x"
        alt="redstar1"
        className="lana-piece redstar1-piece"
      />
      <img
        src="/assets/blustar3@1x.png"
        srcSet="/assets/blustar3@1x.png 1x, /assets/blustar3@2x.png 2x, /assets/blustar3@3x.png 3x"
        alt="blustar3"
        className="lana-piece blustar3-piece"
      />
      <img
        src="/assets/blustar2@1x.png"
        srcSet="/assets/blustar2@1x.png 1x, /assets/blustar2@2x.png 2x, /assets/blustar2@3x.png 3x"
        alt="blustar2"
        className="lana-piece blustar2-piece"
      />
      <img
        src="/assets/blustar1@1x.png"
        srcSet="/assets/blustar1@1x.png 1x, /assets/blustar1@2x.png 2x, /assets/blustar1@3x.png 3x"
        alt="blustar1"
        className="lana-piece blustar1-piece"
      />
      <img
        src="/assets/redstar2@1x.png"
        srcSet="/assets/redstar2@1x.png 1x, /assets/redstar2@2x.png 2x, /assets/redstar2@3x.png 3x"
        alt="redstar2"
        className="lana-piece redstar2-piece"
      />
      <img
        src="/assets/crown@1x.png"
        srcSet="/assets/crown@1x.png 1x, /assets/crown@2x.png 2x, /assets/crown@3x.png 3x"
        alt="crown"
        className="lana-piece crown-piece"
      />

    </div>
  );
};

export default Lana;
