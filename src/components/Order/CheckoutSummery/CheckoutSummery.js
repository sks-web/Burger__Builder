import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummery.module.css"

const checkoutSummery = (props) => {
    console.log("In Checkout Summery");
    console.log(props.ingridents);
  return (
    <div className={classes.CheckoutSummery}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingridents} />
      </div>
        <Button btnType="Danger" clicked={props.onCheckoutCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.onCheckoutContinued}>CONTINUE</Button>
    </div>
  );
};

export default checkoutSummery;
