import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const Arena = (props) => {
  const arenaStyle = {
    fill: '#e1bee7',
  };
  const arenaWidth = 4000;
  const gameHeight = 1200;
  // const transform = `rotate(${props.rotation}, 0, 0)`;
  const transform2 = `position(${props.position}, 0, 0)`
  return (
    // <g transform={transform}>
    <rect
      style={arenaStyle}
      x={arenaWidth / -2}
      y={gameHeight / -2}
      width={arenaWidth}
      height={gameHeight}
    />
    // </g>
  );
};

Arena.propTypes = {
  // rotation: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
};

export default Arena;