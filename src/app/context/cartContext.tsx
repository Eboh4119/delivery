"use client";
import { createContext, useState, ReactNode } from "react";
import { CartItem } from "../OfferScreen/OfferScreen";

type UserContextType = {
    addedItem: CartItem[];
    setAddedItem: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

type UserContextProviderProps = {
    children: ReactNode;
};

export const CartOrderContext = createContext<UserContextType | null > (null);

export const CartContextProvider = ({ children }: UserContextProviderProps) => {
    const [addedItem, setAddedItem] = useState<CartItem[]>([]);

    return (
        <CartOrderContext.Provider value={{ addedItem, setAddedItem }}>
            {children}
        </CartOrderContext.Provider>
    );
};
