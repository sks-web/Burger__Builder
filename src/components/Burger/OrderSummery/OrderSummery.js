import React, { Component } from "react";

import Aux from "../../../hoc/Auxiliary/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummery extends Component {
  // This could be the a function component 
  // componentDidUpdate() {
  //   console.log("[OrderSummery] will update");
  // }


  render() {
    const ingredientSummery = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A dilicious burger with the following ingredients:</p>
        <ul>{ingredientSummery}</ul>
        <p>Continue to Checkout?</p>
        <p>
          <strong>Total Price: ${this.props.totalPrice.toFixed(2)}</strong>
        </p>
        <Button btnType={"Danger"} clicked={this.props.purchasedCancel}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clicked={this.props.purchasedContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummery;
