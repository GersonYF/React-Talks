import React from 'react';

const ScreenResolution = () => {
  const resolution = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    <div>
      {resolution.width} x {resolution.height}
    </div>
  );
};

export default ScreenResolution;
