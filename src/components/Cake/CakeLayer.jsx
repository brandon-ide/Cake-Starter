import React from 'react';
import './styles/CakeLayer.css';

const CakeLayer = ({ layer }) => {
  const { color, width, height } = layer;
  return (
    <div
      className="cake-layer"
      style={{
        backgroundColor: color,
        width: `${width * 40}px`,
        height: `${height * 20}px`,

      }}
      
    >
      <div className="top"
      style={{
        backgroundColor: color,
        width: `${width * 39.5}px`,
        height: `${height * 3}px`,

      }}></div>
    </div>
  );
};

export default CakeLayer;
