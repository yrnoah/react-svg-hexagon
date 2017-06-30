import React from 'react';

const image = require("../images/avatar.png");

export default class Result extends React.PureComponent {
  render() {
    const id = 1;
    return (
      <Hexagon image={image} width={72} height={85} path={pathPoints} id={id}/>
    );
  }
 }

const getPoint = (width, height) => {
  const hexRatio = 0.868217054;
  const cy = width / 2;
  const cx = (height * hexRatio) / 2;
  const startAng = Math.PI * 90 / 180;
  const centerAng = 2 * Math.PI / 6;
  const strokeWidth = 2;
  const radius = cy;
  const vertex = [];
  for (let i = 0; i < 6; i++) {
    const ang = startAng + (i * centerAng);
    vertex.push([
      (strokeWidth / 2) + cx + radius * Math.cos(ang), // X
      (strokeWidth / 1.5) + cy - radius * Math.sin(ang)  // Y
    ])
  }
  return vertex.map(point => point.map((num) => Number(num.toFixed(3))));
};

const Hexagon = ({image, width, height, id}) => {
  const imageSize = Math.max(width, height);
  const path = getPoint(width, height).map(point => point.join(',')).join(' ');
  return(
    <svg width={width} height={height}>
      <defs>
        <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.2"/>
          <feOffset dx="1" dy="2" result="offsetblur"/>
          <feFlood floodColor="rgba(0,0,0,0.3)"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <pattern id={`image-bg${id}`} x="0" y="0" width={imageSize} height={imageSize} patternUnits="userSpaceOnUse">
          <image width={imageSize} height={imageSize} xlinkHref={image}/>
        </pattern>
      </defs>
      <polygon style={{stroke: '#FFF', strokeWidth: 2}} points={path} fill={`url('#image-bg${id}')`} className="hexagon-box"/>
    </svg>
  );
};

