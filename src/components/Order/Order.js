import React from "react";

import classes from "./Order.module.css";

const order = (props) => {
  const ing = [];
  for (let ingridentName in props.ingridents) {
    ing.push({
      name: ingridentName,
      amount: props.ingridents[ingridentName],
    });
  }


  let ingridentOutput = ing.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
      >
        {ig.name}({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingridents: {ingridentOutput}</p>
      <p>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
