

// components/BlurBlob.jsx
import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size, color = "blue" }) => {
  // Destructure position and size
  const { top, left } = position;
  const { width, height } = size;

  // Modern light-theme gradients
  const gradientStyles = {
    blue: "bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-cyan-400/20",
    purple: "bg-gradient-to-r from-purple-300/20 via-fuchsia-300/20 to-pink-300/20",
  };

  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        top: top,
        left: left,
        width: width,
        height: height,
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
      }}
    >
      <div
        className={`w-full h-full rounded-full blur-[80px] sm:blur-[120px] animate-pulse transition-all duration-1000 ${gradientStyles[color] || gradientStyles.blue}`}
        style={{
          animationDuration: '8s',
        }}
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  color: PropTypes.string,
};

export default BlurBlob;