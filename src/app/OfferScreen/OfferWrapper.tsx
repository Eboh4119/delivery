
"use client"

import { CartContextProvider } from "../context/cartContext";
import Track from "../Screens/Track";
import { Offers } from "./OfferScreen";

export default function OfferWrapper() {
  return (
    <CartContextProvider>
      <Offers />
      <Track />
    </CartContextProvider>
  );
}