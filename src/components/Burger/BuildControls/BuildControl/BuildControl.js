import React from 'react';
// import PropTypes from 'prop-types';
import classes from './BuildControl.scss';

const propTypes = {
  
};

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.ingredientRemoved} disabled={props.disabled}>Less</button>
      <button className={classes.More} onClick={props.ingredientAdded}>More</button>
    </div>
  );
};

buildControl.propTypes = propTypes;

export default buildControl;
