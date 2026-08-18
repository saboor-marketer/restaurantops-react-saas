import React from 'react';

const Avatar = ({ src, alt, size = 44, className = '' }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Check if it's an SVG file
  const isSvg = src.endsWith('.svg');

  if (isSvg) {
    return (
      <img
        src={src}
        alt={alt}
        style={style}
        className={`rounded-circle ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={`rounded-circle object-fit-cover ${className}`}
    />
  );
};

export default Avatar;
