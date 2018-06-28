import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FlyingObjectBase from './FlyingObjectBase.jsx';
import { gameHeight } from '../utils/constants';
import { gameWidth } from '../utils/constants';

const moveVertically = keyframes`
  0% {
    transform: translateY(0);
  }
  50%{
    transform: translate(${gameHeight}px,${gameWidth}px);
  }
  100% {
    transform: translateY(${gameHeight}px);
  }
`;

const Move = styled.g`
  animation: ${moveVertically} 4s linear;
`;

const FlyingObject = props => (
  <Move>
    <FlyingObjectBase position={props.position} />
  </Move>
);

FlyingObject.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject;