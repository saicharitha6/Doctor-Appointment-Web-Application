import React, { useState } from 'react';

const StarRating = ({ totalStars, onChange }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (star) => {
    setRating(star);
    if (onChange) {
      onChange(star);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span
          key={i}
          style={{
            cursor: 'pointer',
            fontSize: '30px',
            color: i <= rating ? '#ffcc00' : '#ddd',
          }}
          onClick={() => handleStarClick(i)}
        >
          &#9733; {/* Unicode character for a filled star */}
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
