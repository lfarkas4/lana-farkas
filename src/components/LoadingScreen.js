import React, { useState, useEffect, useRef } from "react";
import "../styles/LoadingScreen.scss";

// Randomized loading phrases
const LOADING_PHRASES = [
  { text: 'listening to the', emphasis: 'universe' },
  { text: 'tuning into the', emphasis: 'cosmos' },
  { text: 'the stars are', emphasis: 'aligning' },
  { text: "mapping the", emphasis: 'constellations' },
];

const LoadingScreen = ({ onLoadComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const hasCompletedRef = useRef(false);
  
  // Pick random phrase on mount
  const [phrase] = useState(() => 
    LOADING_PHRASES[Math.floor(Math.random() * LOADING_PHRASES.length)]
  );

  useEffect(() => {
    // Prevent double-completion in StrictMode
    if (hasCompletedRef.current) return;

    let isMounted = true;

    // All critical assets that MUST load before showing hero
    const criticalAssets = [
      // LANA logo images (all resolutions)
      '/assets/L@1x.png',
      '/assets/L@2x.png',
      '/assets/A1@1x.png',
      '/assets/A1@2x.png',
      '/assets/N@1x.png',
      '/assets/N@2x.png',
      '/assets/A2@1x.png',
      '/assets/A2@2x.png',
      '/assets/halo@1x.png',
      '/assets/halo@2x.png',
      // Logo
      '/starlogolight.svg',
      // Any other critical hero assets
      '/assets/spark.svg',
    ];

    let loadedCount = 0;
    let assetsReady = false;
    let minTimeReached = false;
    const totalAssets = criticalAssets.length;

    const checkComplete = () => {
      if (!isMounted) return;
      
      if (assetsReady && minTimeReached) {
        // Everything ready - start exit
        setIsResting(false);
        setIsExiting(true);
        hasCompletedRef.current = true;

        // Small delay then notify parent
        setTimeout(() => {
          if (isMounted) {
            onLoadComplete?.();
          }
        }, 50);
      } else if (minTimeReached && !assetsReady) {
        // Min time passed but still loading - show resting state
        setIsResting(true);
      }
    };

    const onAssetLoad = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / totalAssets) * 100);
      if (isMounted) {
        setLoadProgress(progress);
      }

      if (loadedCount >= totalAssets) {
        assetsReady = true;
        checkComplete();
      }
    };

    // Preload all images
    const preloadPromises = criticalAssets.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          onAssetLoad();
          resolve({ src, status: 'loaded' });
        };
        
        img.onerror = () => {
          // Still count as "loaded" to not block forever
          console.warn(`Failed to preload: ${src}`);
          onAssetLoad();
          resolve({ src, status: 'error' });
        };

        img.src = src;
      });
    });

    // Minimum display time (let animation play)
    const minDisplayTime = 2000;
    const minTimer = setTimeout(() => {
      minTimeReached = true;
      checkComplete();
    }, minDisplayTime);

    // Fallback timeout - don't wait forever
    const maxWaitTime = 8000;
    const maxTimer = setTimeout(() => {
      if (!hasCompletedRef.current && isMounted) {
        console.warn('Loading timeout reached, proceeding anyway');
        assetsReady = true;
        minTimeReached = true;
        checkComplete();
      }
    }, maxWaitTime);

    // Also wait for document fonts to be ready
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        // Fonts loaded - this helps with FOUT
      });
    }

    return () => {
      isMounted = false;
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, [onLoadComplete]);

  return (
    <div className={`loading-screen ${isExiting ? 'is-exiting' : ''}`}>
      <div className={`line-wrapper ${isResting ? 'is-resting' : ''}`}>
        <div className="line-progress" />
      </div>
      <div className="loading-text">
        <p className="loading-tagline">
          {phrase.text} <em>{phrase.emphasis}</em>...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;




// import React, { useState, useEffect } from "react";
// import "../styles/LoadingScreen.scss";

// // Well-known constellations (4-7 stars, organic/crooked positioning)
// const CONSTELLATIONS = [
//   {
//     name: 'Cassiopeia',
//     stars: [
//       { x: 18, y: 78, r: 3.5 },
//       { x: 42, y: 32, r: 4 },
//       { x: 72, y: 72, r: 3.5 },
//       { x: 112, y: 28, r: 3.5 },
//       { x: 138, y: 62, r: 3.5 },
//     ],
//     lines: [[0, 1], [1, 2], [2, 3], [3, 4]]
//   },
//   {
//     name: 'Orion',
//     stars: [
//       { x: 52, y: 22, r: 4 },
//       { x: 112, y: 28, r: 3.5 },
//       { x: 42, y: 62, r: 3.5 },
//       { x: 88, y: 68, r: 3 },
//       { x: 118, y: 58, r: 3 },
//       { x: 48, y: 118, r: 3.5 },
//       { x: 108, y: 125, r: 4 },
//     ],
//     lines: [[0, 2], [1, 4], [2, 3], [3, 4], [2, 5], [4, 6]]
//   },
//   {
//     name: 'Ursa Major',
//     stars: [
//       { x: 18, y: 62, r: 3.5 },
//       { x: 42, y: 35, r: 3.5 },
//       { x: 82, y: 38, r: 4 },
//       { x: 112, y: 55, r: 3.5 },
//       { x: 95, y: 88, r: 3.5 },
//       { x: 128, y: 102, r: 3.5 },
//       { x: 138, y: 58, r: 3 },
//     ],
//     lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [3, 6]]
//   },
//   {
//     name: 'Cygnus',
//     stars: [
//       { x: 85, y: 18, r: 4 },
//       { x: 72, y: 55, r: 3.5 },
//       { x: 32, y: 85, r: 3.5 },
//       { x: 122, y: 68, r: 3.5 },
//       { x: 75, y: 102, r: 3 },
//       { x: 92, y: 138, r: 3.5 },
//     ],
//     lines: [[0, 1], [1, 2], [1, 3], [1, 4], [4, 5]]
//   },
//   {
//     name: 'Lyra',
//     stars: [
//       { x: 68, y: 25, r: 4.5 },
//       { x: 42, y: 72, r: 3 },
//       { x: 108, y: 55, r: 3 },
//       { x: 35, y: 115, r: 3.5 },
//       { x: 115, y: 105, r: 3.5 },
//     ],
//     lines: [[0, 1], [0, 2], [1, 3], [2, 4], [1, 2], [3, 4]]
//   },
//   {
//     name: 'Corvus',
//     stars: [
//       { x: 38, y: 32, r: 3.5 },
//       { x: 118, y: 38, r: 3.5 },
//       { x: 25, y: 95, r: 4 },
//       { x: 112, y: 102, r: 3.5 },
//     ],
//     lines: [[0, 1], [0, 2], [1, 3], [2, 3]]
//   },
//   {
//     name: 'Draco',
//     stars: [
//       { x: 22, y: 38, r: 3.5 },
//       { x: 58, y: 62, r: 3.5 },
//       { x: 98, y: 42, r: 4 },
//       { x: 122, y: 78, r: 3.5 },
//       { x: 82, y: 112, r: 3.5 },
//     ],
//     lines: [[0, 1], [1, 2], [2, 3], [3, 4]]
//   },
//   {
//     name: 'Aquila',
//     stars: [
//       { x: 72, y: 22, r: 4.5 },
//       { x: 35, y: 65, r: 3 },
//       { x: 118, y: 45, r: 3 },
//       { x: 22, y: 105, r: 3.5 },
//       { x: 135, y: 92, r: 3.5 },
//     ],
//     lines: [[0, 1], [0, 2], [1, 3], [2, 4]]
//   },
// ];

// const VERBS = ['charting', 'aligning', 'tracing', 'mapping', 'finding'];

// const LoadingScreen = ({ onLoadComplete }) => {
//   const [isExiting, setIsExiting] = useState(false);
//   const [isResting, setIsResting] = useState(false);
//   const [constellation] = useState(() => 
//     CONSTELLATIONS[Math.floor(Math.random() * CONSTELLATIONS.length)]
//   );
//   const [verb] = useState(() => 
//     VERBS[Math.floor(Math.random() * VERBS.length)]
//   );

//   // Calculate animation delays for stars based on their connecting lines
//   const getStarDelays = () => {
//     const lineStagger = 0.3; // slower stagger
//     const starAppearTimes = {};

//     constellation.lines.forEach(([from, to], i) => {
//       const lineStartTime = 0.1 + i * lineStagger;
//       const starTime = lineStartTime + 0.2;

//       if (starAppearTimes[from] === undefined || starTime < starAppearTimes[from]) {
//         starAppearTimes[from] = starTime;
//       }
//       if (starAppearTimes[to] === undefined || starTime < starAppearTimes[to]) {
//         starAppearTimes[to] = starTime;
//       }
//     });

//     return starAppearTimes;
//   };

//   // Calculate total constellation animation duration
//   const getConstellationDuration = () => {
//     const lineStagger = 0.3;
//     const lastLineStart = 0.1 + (constellation.lines.length - 1) * lineStagger;
//     const lastStarAppear = lastLineStart + 0.5 + 0.4;
//     return (lastStarAppear + 0.3) * 1000;
//   };

//   // Preload critical hero assets
//   const preloadAssets = () => {
//     return new Promise((resolve) => {
//       const criticalImages = [
//         '/assets/L@1x.png',
//         '/assets/A1@1x.png',
//         '/assets/N@1x.png',
//         '/assets/A2@1x.png',
//         '/assets/halo@1x.png',
//         '/starlogolight.svg',
//       ];

//       let loaded = 0;
//       const total = criticalImages.length;

//       const checkDone = () => {
//         loaded++;
//         if (loaded >= total) resolve();
//       };

//       criticalImages.forEach(src => {
//         const img = new Image();
//         img.onload = checkDone;
//         img.onerror = checkDone;
//         img.src = src;
//       });

//       // Fallback timeout
//       setTimeout(resolve, 5000);
//     });
//   };

//   // Main loading logic
//   useEffect(() => {
//     let constellationDone = false;
//     let assetsLoaded = false;
//     let minTimePassed = false;

//     const tryTransition = () => {
//       if (constellationDone && assetsLoaded && minTimePassed) {
//         setIsResting(false);
//         setIsExiting(true);

//         // Tell parent we're done - parent keeps us mounted during fade
//         setTimeout(() => {
//           onLoadComplete?.();
//         }, 50);
//       } else if (constellationDone && (!assetsLoaded || !minTimePassed)) {
//         setIsResting(true);
//       }
//     };

//     // Minimum display time
//     const minTimer = setTimeout(() => {
//       minTimePassed = true;
//       tryTransition();
//     }, 2200);

//     // Wait for constellation animation
//     const duration = getConstellationDuration();
//     const constellationTimer = setTimeout(() => {
//       constellationDone = true;
//       tryTransition();
//     }, duration);

//     // Preload assets
//     preloadAssets().then(() => {
//       assetsLoaded = true;
//       tryTransition();
//     });

//     return () => {
//       clearTimeout(minTimer);
//       clearTimeout(constellationTimer);
//     };
//   }, [onLoadComplete]);

//   const starDelays = getStarDelays();

//   return (
//     <div className={`loading-screen ${isExiting ? 'is-exiting' : ''}`}>
//       <div className={`constellation-wrapper ${isResting ? 'is-resting' : ''}`}>
//         <svg className="constellation-svg" viewBox="0 0 160 160">
//           {/* Lines */}
//           {constellation.lines.map(([from, to], i) => {
//             const s1 = constellation.stars[from];
//             const s2 = constellation.stars[to];
//             return (
//               <line
//                 key={`line-${i}`}
//                 className="constellation-line"
//                 x1={s1.x}
//                 y1={s1.y}
//                 x2={s2.x}
//                 y2={s2.y}
//                 style={{ animationDelay: `${0.1 + i * 0.3}s` }}
//               />
//             );
//           })}

//           {/* Stars */}
//           {constellation.stars.map((star, i) => (
//             <circle
//               key={`star-${i}`}
//               className="constellation-star"
//               cx={star.x}
//               cy={star.y}
//               r={star.r}
//               style={{ animationDelay: `${starDelays[i] || 0.2}s` }}
//             />
//           ))}
//         </svg>
//       </div>

//       <div className="loading-text">
//         <p className="loading-tagline">
//           {verb} <em>{constellation.name}</em>...
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoadingScreen;