"use client"

import React, { useContext, useState } from "react";
import { CartOrderContext } from "../context/cartContext";
import Image from "next/image";

const Track = () => {
    const [payNow, setPayNow] = useState (false)
    const context = useContext(CartOrderContext);
    if (!context) {
      return <div>Loading cart...</div>;
    }
    const { addedItem } = context;

    // Discounts and Delivery Price
    const discounts = 3.00
    const delivery = 2.50

    // handle cart calculation for sub-total amount
    const totalPrice = addedItem.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // handle total amount and delivery fee
    const totalAmount = addedItem.reduce(
      (sum, item) => sum + item.price + item.delivery * item.quantity - discounts, 0
    );

    // handle Payment
    const handlePay = () => {
      if(totalAmount < 0){
        setPayNow(false)
        console.log('Add item to cart')
      }else if (totalAmount > 0){
        setPayNow((prevPay) => !prevPay)
      }
    }

  return (
    <div className="p-4 max-w-md mx-auto mt-20 pt-10">
      <div className="bg-green1 text-white1 flex items-center justify-around py-3">
        <Image 
        src={'/Full Shopping Basket.svg'}
        alt="cart"
        width={50}
        height={50}
        /> 
        <h1 className="text-3xl font-bold">Your Cart</h1>
      </div>
    {addedItem.length === 0 ? (
      <p className="justify-center flex text-xl font-semibold">Your cart is empty.</p>
    ) : (
      <ul>
        {context?.addedItem.map((item, index) => (
          <li key={index} className="mb-3 border rounded p-3 flex justify-between items-center">
            <h2 className="text-white text-2xl rounded-full bg-orange1 font-bold px-4 py-4">{item.quantity}X</h2>
            <div className="text-center">
              <p className="text-green1 font-semibold text-xl">${item.price}</p>
              <p className="text-xl font-bold">{item.offer}</p>
            </div>
            <Image 
            src={item.image}
            alt="image"
            width={40}
            height={40}
            /> 
          </li>
        ))}

        <div className="cart">
          <p>Sub Total: <span>${totalPrice}</span></p>
          <p>Discounts: <span>-{discounts}</span></p>
          <p>Delivery: <span>{delivery}</span></p>
        </div>
      </ul>
    )}

    <div className="border-t border-black py-4 border-b ">
      <div className="justify-between flex bg-orange1 text-white items-center py-3 px-6 rounded-md">
        <p className="text-lg font-semibold">Total to pay</p>
        <p className="font-bold text-2xl">${totalAmount.toFixed(2)}</p>
      </div>
    </div>


      <div className={`my-2 py-4 px-4 text-center text-white text-2xl font-bold capitalize rounded ${payNow ? ' bg-green-400 cursor-not-allowed' : 'bg-green1 cursor-pointer'}`} onClick={handlePay}>
        {payNow ? 'Processing Transaction...' : 'Pay Now'}
      </div>

  </div>
  );
};

export default Track;
