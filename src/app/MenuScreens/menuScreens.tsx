"use client"

import Image from "next/image";
import { Order } from "../config/data";

// vegan screen
export const Vegan = () => {
    return(
        <div className="my-4 grid grid-cols-3 gap-2 overflow-y-auto max-sm:block max-sm:h-[350px] mx-auto scrollable">
            {Order.map((items, index) => (
                <div key={index} style={{
                    backgroundImage:`url(${items.url})`, 
                    backgroundPosition:'center', 
                    backgroundSize:'cover', 
                    }} 
                    className="rounded-lg h-[200px] w-[350px] max-sm:my-2">
                    <p className="justify-self-end py-2 px-2 bg-blue1 text-white font-medium mr-3 rounded-b-md">{items.percent}</p>
                    <div className="mt-16 p-6">
                        <h3 className="text-orange1 text-md font-medium">{items.option}</h3>
                        <h2 className="text-white font-bold text-lg">{items.location}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
};

// sushi screen
export const Sushi = () => {
    return(
        <div className="my-4 grid grid-cols-3 gap-2 overflow-x-auto max-sm:block max-sm:h-[350px] mx-auto scrollable">
        {Order.map((items, index) => (
            <div key={index} style={{
                backgroundImage:`url(${items.url})`, 
                backgroundPosition:'center', 
                backgroundSize:'cover', 
                }} 
                className="rounded-lg h-[200px] w-[350px] max-sm:my-2">
                <p className="justify-self-end py-2 px-2 bg-blue1 text-white font-medium mr-3 rounded-b-md">{items.percent}</p>
                <div className="mt-16 p-6">
                    <h3 className="text-orange1 text-md font-medium">{items.option}</h3>
                    <h2 className="text-white font-bold text-lg">{items.location}</h2>
                </div>
            </div>
        ))}
    </div>
    )
};

// sushi screen
export const Pizza = () => {
    return(
        <div className="my-4 grid grid-cols-3 gap-2 overflow-x-auto max-sm:block max-sm:h-[350px] mx-auto scrollable">
            {Order.map((items, index) => (
                <div key={index} style={{
                    backgroundImage:`url(${items.url})`, 
                    backgroundPosition:'center', 
                    backgroundSize:'cover', 
                    }} 
                    className="rounded-lg h-[200px] w-[350px] max-sm:my-2">
                    <p className="justify-self-end py-2 px-2 bg-blue1 text-white font-medium mr-3 rounded-b-md">{items.percent}</p>
                    <div className="mt-16 p-6">
                        <h3 className="text-orange1 text-md font-medium">{items.option}</h3>
                        <h2 className="text-white font-bold text-lg">{items.location}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
};

// others screen
export const Other = () => {
    return (
        <div className="my-4 grid grid-cols-3 overflow-y-auto max-sm:block max-sm:h-[350px] scrollable">
            {Order.map((items, index) => (
                <div key={index} style={{backgroundImage:`url(${items.url})`, backgroundPosition:'center', backgroundSize:'cover', height:'200px', width:'350px'}} className="rounded-lg my-2">
                    <p className="justify-self-end py-2 px-2 bg-blue1 text-white font-medium mr-3 rounded-b-md">{items.percent}</p>
                    <div className="mt-16 p-6">
                        <h3 className="text-orange1 text-md font-medium">{items.option}</h3>
                        <h2 className="text-white font-bold text-lg">{items.location}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
};