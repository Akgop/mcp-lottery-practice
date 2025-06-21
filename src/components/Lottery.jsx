import React, { useState, useEffect } from 'react';
import Ball from './Ball';

const Lottery = () => {
  const title = "로또 번호 생성기";
  const [numbers, setNumbers] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (numbers.length === 0) {
      return;
    }

    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (prev.length === numbers.length) {
          clearInterval(interval);
          setIsAnimating(false);
          return prev;
        }
        return [...prev, numbers[prev.length]];
      });
    }, 300);

    return () => clearInterval(interval);
  }, [numbers]);

  const handleGenerate = () => {
    if (isAnimating) return;
    if (numbers.length > 0) {
      setNumbers([]);
      setDisplayed([]);
      return;
    }

    setIsAnimating(true);
    const newNumbers = new Set();
    while (newNumbers.size < 6) {
      const randomNum = Math.floor(Math.random() * 49) + 1;
      newNumbers.add(randomNum);
    }
    const sorted = Array.from(newNumbers).sort((a, b) => a - b);
    setNumbers(sorted);
  };

  return (
    <div className="lottery-container">
      <h1 className="lottery-title">{title}</h1>
      <div className="balls-container">
        {displayed.length > 0 ? (
          displayed.map((num, index) => <Ball key={index} number={num} />)
        ) : (
          <div className="placeholder-text">버튼을 눌러 번호를 생성하세요.</div>
        )}
      </div>
      <button onClick={handleGenerate} className="generate-button" disabled={isAnimating}>
        {numbers.length > 0 && !isAnimating ? '초기화' : '번호 생성'}
      </button>
    </div>
  );
};

export default Lottery; 