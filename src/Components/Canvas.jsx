
import React from 'react';
import Arena from './Arena';
import Circle from './Circle';
import PropTypes from 'prop-types';

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, window.innerHeight / -2, window.innerWidth, window.innerHeight];
      // circles is the array of circle objects
    const { circles } = this.props.ememies;
  return (
    {circles.map((circle) => {
            return <Circle circle={circle} />;
        })}
    <svg
      id="RockPaperScramble"
      // preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <Arena rotation={props.angle}/>
     <Circle position={{x: props.x, y: props.y}} radius={{r: props.r}}/>

    </svg>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
};

export default Canvas;

