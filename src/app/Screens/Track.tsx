"use client"

import React, { useContext } from "react";
import { CartOrderContext } from "../context/cartContext";


const Track = () => {
    const context = useContext(CartOrderContext);
    if (!context) {
      return <div>Loading cart...</div>;
    }
    const { addedItem } = context;

    const totalPrice = addedItem.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

  return (
    <div className="p-4 max-w-md mx-auto mt-20 pt-10">
    <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
    {addedItem.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {context?.addedItem.map((item, index) => (
          <li key={index} className="mb-3 border rounded p-3">
            <h2 className="text-xl font-semibold">{item.offer}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
    )}

    <div>
    ${totalPrice.toFixed(2)}
    </div>
  </div>
  );
};

export default Track;
