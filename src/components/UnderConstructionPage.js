// src/components/UnderConstructionPage.js
import React, { useState, useCallback } from "react";
import BackButton from "./BackButton";
import "../styles/UnderConstructionPage.scss";

/**
 * "Spot the Star" - A simple shell game
 * 3 cosmic orbs shuffle, one hides a star. Pick the right one!
 */
export default function UnderConstructionPage({ projectName = "This project" }) {
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'showing' | 'shuffling' | 'picking' | 'reveal'
  const [starPosition, setStarPosition] = useState(1); // 0, 1, or 2
  const [selectedOrb, setSelectedOrb] = useState(null);
  const [orbPositions, setOrbPositions] = useState([0, 1, 2]); // Track visual positions
  const [streak, setStreak] = useState(0);
  const [lastResult, setLastResult] = useState(null); // 'correct' | 'wrong' | null

  // Perform shuffle animation
  const performShuffles = useCallback((actualStarPos, currentStreak) => {
    const numShuffles = 3 + Math.min(currentStreak, 4); // More shuffles as streak grows
    let currentPositions = [0, 1, 2];
    let shuffleIndex = 0;
    
    const doShuffle = () => {
      if (shuffleIndex >= numShuffles) {
        setGameState('picking');
        return;
      }
      
      // Pick two random orbs to swap
      const i = Math.floor(Math.random() * 3);
      let j = Math.floor(Math.random() * 3);
      while (j === i) j = Math.floor(Math.random() * 3);
      
      // Swap positions
      const newPositions = [...currentPositions];
      const temp = newPositions[i];
      newPositions[i] = newPositions[j];
      newPositions[j] = temp;
      currentPositions = newPositions;
      
      setOrbPositions([...newPositions]);
      shuffleIndex++;
      
      setTimeout(doShuffle, 350);
    };
    
    setTimeout(doShuffle, 200);
  }, []);

  // Start a new round
  const startGame = useCallback(() => {
    const newStarPos = Math.floor(Math.random() * 3);
    setStarPosition(newStarPos);
    setSelectedOrb(null);
    setOrbPositions([0, 1, 2]);
    setGameState('showing');
    setLastResult(null);
    
    // If starting fresh after a loss, reset streak
    // (streak persists between wins, resets on loss)
    
    // Show star briefly, then shuffle
    setTimeout(() => {
      setGameState('shuffling');
      performShuffles(newStarPos, streak);
    }, 1000);
  }, [performShuffles, streak]);

  // Handle orb selection
  const selectOrb = useCallback((orbIndex) => {
    if (gameState !== 'picking') return;
    
    setSelectedOrb(orbIndex);
    setGameState('reveal');
    
    // Check if correct
    const isCorrect = orbIndex === starPosition;
    if (isCorrect) {
      setStreak(prev => prev + 1);
      setLastResult('correct');
    } else {
      setStreak(0);
      setLastResult('wrong');
    }
  }, [gameState, starPosition]);

  // Get visual position for an orb
  const getOrbStyle = (orbIndex) => {
    const visualPos = orbPositions[orbIndex];
    const xOffset = (visualPos - 1) * 80; // -80px, 0, +80px
    return {
      transform: `translateX(${xOffset}px)`,
    };
  };

  // Check if this orb has the star
  const hasStar = (orbIndex) => orbIndex === starPosition;

  // Whether to show the star
  const showStar = (orbIndex) => {
    if (gameState === 'showing') return hasStar(orbIndex);
    if (gameState === 'reveal') return hasStar(orbIndex);
    return false;
  };

  return (
    <div className="uc-page">
      <BackButton />

      <div className="uc-content">
        <div className="uc-badge">
          <span className="uc-badge__icon">☁</span>
        </div>

        <h1 className="uc-title">Almost ready for launch...</h1>

        <p className="uc-subtitle">
          This project is in progress, but you can play while you wait!
        </p>

        {/* Spot the Star Game */}
        <div className="uc-game">
          <div className="uc-game__area">
            {gameState === 'idle' ? (
              <button className="uc-game__start" onClick={startGame}>
                <span className="uc-game__start-icon">✦</span>
                <span className="uc-game__start-text">start mini game</span>
              </button>
            ) : (
              <div className="uc-orbs">
                {[0, 1, 2].map((orbIndex) => (
                  <button
                    key={orbIndex}
                    className={`uc-orb ${
                      gameState === 'picking' ? 'uc-orb--clickable' : ''
                    } ${
                      gameState === 'reveal' && selectedOrb === orbIndex
                        ? hasStar(orbIndex)
                          ? 'uc-orb--correct'
                          : 'uc-orb--wrong'
                        : ''
                    } ${
                      gameState === 'shuffling' ? 'uc-orb--shuffling' : ''
                    }`}
                    style={getOrbStyle(orbIndex)}
                    onClick={() => selectOrb(orbIndex)}
                    disabled={gameState !== 'picking'}
                  >
                    <span className={`uc-orb__star ${showStar(orbIndex) ? 'uc-orb__star--visible' : ''}`}>
                      ✦
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Game status */}
          {gameState !== 'idle' && (
            <div className="uc-game__status">
              {gameState === 'showing' && (
                <span className="uc-game__hint">remember this...</span>
              )}
              {gameState === 'shuffling' && (
                <span className="uc-game__hint">shuffling...</span>
              )}
              {gameState === 'picking' && (
                <span className="uc-game__hint">where's the star?</span>
              )}
              {gameState === 'reveal' && (
                <span className={`uc-game__result ${lastResult === 'correct' ? 'uc-game__result--correct' : 'uc-game__result--wrong'}`}>
                  {lastResult === 'correct' ? 'nice!' : 'not quite'}
                </span>
              )}
            </div>
          )}

          {/* Streak display - only shows when you have a streak going */}
          {streak > 0 && gameState === 'reveal' && lastResult === 'correct' && (
            <div className="uc-game__score">
              <span className="uc-game__score-value">
                {streak} {streak === 1 ? 'star' : 'stars'} found
              </span>
            </div>
          )}

          {/* Play again */}
          {gameState === 'reveal' && (
            <button className="uc-game__again" onClick={startGame}>
              play again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}