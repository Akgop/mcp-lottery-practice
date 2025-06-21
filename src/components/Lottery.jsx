import React, { useState, useEffect } from 'react';
import Ball from './Ball';

const LottoBallsSVG = () => (
  <div className="lotto-balls-hero">
    <svg width="160" height="70" viewBox="0 0 160 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="35" cy="35" r="30" fill="#FFD600" stroke="#E6C200" strokeWidth="4" />
        <text x="35" y="44" textAnchor="middle" fontSize="2rem" fontWeight="bold" fill="#333">1</text>
      </g>
      <g>
        <circle cx="80" cy="30" r="25" fill="#1976D2" stroke="#1251A2" strokeWidth="4" />
        <text x="80" y="39" textAnchor="middle" fontSize="1.7rem" fontWeight="bold" fill="#fff">2</text>
      </g>
      <g>
        <circle cx="120" cy="40" r="20" fill="#D32F2F" stroke="#A51B1B" strokeWidth="4" />
        <text x="120" y="47" textAnchor="middle" fontSize="1.3rem" fontWeight="bold" fill="#fff">3</text>
      </g>
      <g>
        <circle cx="60" cy="60" r="13" fill="#388E3C" stroke="#236622" strokeWidth="3" />
        <text x="60" y="66" textAnchor="middle" fontSize="1rem" fontWeight="bold" fill="#fff">4</text>
      </g>
      <g>
        <circle cx="100" cy="15" r="10" fill="#616161" stroke="#333" strokeWidth="2" />
        <text x="100" y="20" textAnchor="middle" fontSize="0.8rem" fontWeight="bold" fill="#fff">5</text>
      </g>
    </svg>
  </div>
);

const Lottery = () => {
  const title = "로또 번호 생성기";
  const [numbers, setNumbers] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

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
      setCopySuccess('');
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

  const handleCopy = () => {
    if (numbers.length === 0) return;
    const numbersString = numbers.join(', ');
    navigator.clipboard.writeText(numbersString).then(() => {
      setCopySuccess('복사 완료!');
      setTimeout(() => setCopySuccess(''), 2000);
    }, () => {
      setCopySuccess('복사 실패');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <div className="lottery-container">
      <LottoBallsSVG />
      <h1 className="lottery-title">{title}</h1>
      <div className="balls-container">
        {displayed.length > 0 ? (
          displayed.map((num, index) => <Ball key={index} number={num} animate />)
        ) : (
          <div className="placeholder-text">버튼을 눌러 번호를 생성하세요.</div>
        )}
      </div>
      <div className="buttons-container">
        <button onClick={handleGenerate} className="generate-button" disabled={isAnimating}>
          <span role="img" aria-label="dice">🎲</span> {numbers.length > 0 && !isAnimating ? '초기화' : '번호 생성'}
        </button>
        {numbers.length > 0 && !isAnimating && (
          <button onClick={handleCopy} className="share-button">
            <span role="img" aria-label="share">🔗</span> 공유
          </button>
        )}
      </div>
      {copySuccess && <div className="copy-feedback">{copySuccess}</div>}
    </div>
  );
};

export default Lottery; 