"use client"

import Image from "next/image";
import { dataOne, dataTwo, dataThree, Images } from "../config/summaryData";

export const FooterEnd = () => {
    return (
        <>
         {/* Summary with links */}
                <summary>
                    <div className="bg-grey1 h-full grid grid-cols-3 mt-12 max-sm:block px-8 py-2">
                        <div className="mt-10 py-4 pl-2">
                            {dataOne.map((items, index) => (
                                <div key={index}>
                                    <Image 
                                    src={items.image1}
                                    alt="logo"
                                    width={268}
                                    height={66}
                                    className="my-4"
                                    /> 
                                    <Image 
                                    src={items.image2}
                                    alt="google play"
                                    width={180}
                                    height={53}
                                    className="cursor-pointer"
                                    />
                                    <p className="w-[300px] h-[46px] text-sm my-4">{items.text}</p>
                                </div>
                            ))}
                        </div>
        
                        <div className="mt-10 max-sm:text-center">
                            {dataTwo.map((items, index) => (
                                <div key={index}>
                                    <h3 className="font-bold text-blue1 my-4">{items.head}</h3>
                                    <input type="text" 
                                    placeholder="youremail@gmail.com"
                                    className="bg-grey1 w-[381px] h-[59px] border border-blue1 rounded-full pl-5 outline-none max-sm:w-[280px]"
                                    />
                                    <p className="text-sm pl-3 my-3">{items.text}</p>
                                </div>
                            ))}
                            <div className="flex gap-3 pl-6">
                                {Images.map((items, index) => (
                                    <div key={index}>
                                        <Image 
                                        src={items.image}
                                        alt="social images"
                                        width={45}
                                        height={45}
                                        className="cursor-pointer"
                                        /> 
                                    </div>
                                ))}
                            </div>
                        </div>
        
                        <div className="grid grid-cols-2 mt-10 max-sm:block">
                            {dataThree.map((items, index) => (
                                <div key={index}>
                                    <h3 className="font-bold text-blue1 my-4">{items.head}</h3>
                                    <p className="underline cursor-pointer">{items.text1}</p>
                                    <p className="underline my-2 cursor-pointer">{items.text2}</p>
                                    <p className="underline cursor-pointer">{items.text3}</p>
                                    <p className="underline my-2 cursor-pointer">{items.text4}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </summary>
        
                <footer>
                    <div className="bg-blue1 h-[73px] flex justify-between text-white py-7 px-8">
                        <h3 className="text-sm font-medium">
                        Order.uk Copyright 2024, All Rights Reserved.
                        </h3>
        
                        <ul className="foot flex gap-8 text-sm font-light max-sm:hidden">
                            <li>Privacy Policy</li>
                            <li>Terms</li>
                            <li>Pricing</li>
                            <li> Do not sell or share my personal information</li>
                        </ul>
                    </div>
                </footer>
        </>
    )
}
