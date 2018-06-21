import React from 'react';
import classes from './BuildControls.scss';
import BuildControl from './BuildControl/BuildControl';
// import PropTypes from 'prop-types';

const propTypes = {

};

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: {props.totalPrice.toFixed(2)}</p>
      { controls.map(control => {
        return <BuildControl 
          key={control.label} 
          label={control.label} 
          type={control.type}
          ingredientAdded={() => props.ingredientAdded(control.type)}
          ingredientRemoved={() => props.ingredientRemoved(control.type)}
          disabled={props.disabled[control.type]}
        />
      })}
      <button 
        className={classes.OrderButton} 
        disabled={!props.purchasable}
        onClick={props.ordered}
        >ORDER NOW</button>
    </div>
  );
};

buildControls.propTypes = propTypes;

export default buildControls;
