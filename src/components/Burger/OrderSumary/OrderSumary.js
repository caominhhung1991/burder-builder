import React, { Component } from 'react';
import Button from './../../../components/UI/Button/Button';
import Aux from '../../../hoc/Aux/Aux';

class orderSumary extends Component {
  componentWillUpdate() {
    console.log('[OrderSumary] WillUpdate!');
  }

  render() {
    const ingredientSumany = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}><span style={{ textTransform: 'capitalize' }}>
            {igKey}</span>: {this.props.ingredients[igKey]}
          </li>);
      })

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSumany}
        </ul>
        <p><strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUES</Button>
      </Aux>)
  }
}

export default orderSumary;
