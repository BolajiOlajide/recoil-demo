import React from "react";

const CartButtons = ({ item }) => {
  const add = console.log;
  const remove = console.log;
  const decrease = console.log;

  return (
    <section className="ui buttons mini">
      <button onClick={() => decrease(item)} className="ui button">
        -
      </button>
      <button onClick={() => add(item)} className="ui button positive">
        +
      </button>
      <button onClick={() => remove(item)} className="ui button negative">
        x
      </button>
    </section>
  );
};

export default CartButtons;
