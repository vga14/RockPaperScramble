import {calculateAngle} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
// import { easeElastic } from "d3-ease";
import { PropTypes } from 'react'
import checkCollisions from './checkCollisions';
import checkBadCollisions from './checkCollisions';
import initialGameState from './index.js'

function moveObjects(state, action) {
  // if (!action.mousePosition) return state;
  const {x,y} = action.mousePosition || {
    x: 0,
    y: 0,
  };
  let newState = createFlyingObjects(state);
  const now = (new Date()).getTime();
  let flyingObjects = newState.gameState.flyingObjects.filter(object => (
    (now - object.createdAt) < 8000
  ));

  const objectsDestroyed = checkCollisions(state, flyingObjects);
  // console.log(objectsDestroyed.length);
  const flyingDiscsDestroyed = objectsDestroyed.map(object => (object.oppId));


  if (checkBadCollisions) { 
    // this.state = initialGameState;
  }

  
  const bef = flyingObjects.length;
  flyingObjects = flyingObjects.filter(flyingDisc => (flyingDiscsDestroyed.indexOf(flyingDisc.id)));
  // console.log("AFTER ---- ", (bef === flyingObjects.length));

  return {
    ...newState,
    gameState: {
      ...newState.gameState,
      flyingObjects,
    },
    leaderboard: state.leaderboard,
    x: x,
    y: y,
    r: state.r,
  };
}

export default moveObjects;