import React from "react";

import { useAddItem, useDecreaseItem, useRemoveItem } from '../store';


const CartButtons = ({ item }) => {
  const add = useAddItem();
  const remove = useRemoveItem();
  const decrease = useDecreaseItem();

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
