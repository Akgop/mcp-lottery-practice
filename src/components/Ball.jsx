import React from 'react';

const getBallColor = (number) => {
  if (number <= 10) return '#FFD600'; // Yellow
  if (number <= 20) return '#1976D2'; // Blue
  if (number <= 30) return '#D32F2F'; // Red
  if (number <= 40) return '#616161'; // Gray
  return '#388E3C'; // Green
};

const Ball = ({ number }) => {
  return (
    <div
      className="ball"
      style={{ backgroundColor: getBallColor(number) }}
    >
      {number}
    </div>
  );
};

export default Ball; 