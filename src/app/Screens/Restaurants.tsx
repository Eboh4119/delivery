import Image from "next/image"
import { RestData } from "../config/restuarantsdata"
import { Order } from "../order"

export default function Restuarants () {
    return (
        <>
        {/* 1st Section */}
        <section className="bg-blue2 h-[80vh] max-w-[1200px] rounded-md mx-auto flex pt-6 max-sm:max-w-[400px] mt-24 items-center justify-between px-6 max-sm:block">
            <div className="text-white">
                {RestData.map((items, index) => (
                    <div key={index}>
                        <p className="max-sm:hidden">{items.text}</p>
                        <h3 className="text-[54px] font-semibold mb-2 max-sm:text-[30px] max-sm:justify-self-center max-sm:text-center">{items.location}</h3>
                        <div className="flex gap-4 max-sm:block max-sm:justify-self-center">
                            <button className="flex items-center py-2 px-4 border border-white gap-4 rounded-full my-2">
                                <Image 
                                src={'/Order Completed.svg'}
                                alt="image"
                                height={34}
                                width={34}
                                />
                                {items.button1}
                            </button>

                            <button className="flex items-center py-2 px-4 border border-white gap-4 rounded-full my-2">
                            <Image 
                                src={'/Motocross.svg'}
                                alt="image"
                                height={34}
                                width={34}
                                />
                                {items.button2}
                            </button>
                        </div>
                    </div>
                ))}

                <div className="bg-orange1 text-white flex gap-4 py-2 w-[335px] px-3 absolute max-sm:relative bottom-4 rounded-md items-center max-sm:justify-self-center max-sm:mt-8">
                    <Image 
                    src={'/Clock.svg'}
                    alt="clock"
                    width={29}
                    height={29}
                    /> 
                    Open until 3:00 AM
                </div>
            </div>

            <div className="relative my-2">
                    <Image 
                    src={'/burgerKing.png'}
                    alt="burger"
                    width={481}
                    height={361}
                    />

                <div className="absolute bottom-0 left-[-40px] max-sm:left-[-20px] max-sm:bottom-3">
                    <Image 
                    src={'/review.png'}
                    alt="image"
                    width={100}
                    height={100}
                    /> 
                </div>
            </div>
        </section>

        {/* 2nd Section */}
        <section>
            <div className="flex justify-around my-14 items-center">
                <h3 className="font-bold sm:text-[32px] text-[26px] max-sm:text-center">All Offers from McDonald’s East London</h3>

                <input type="text" 
                placeholder="Search from menu"
                className="px-3 h-[50px] w-[300px] rounded-full text-black border border-black max-sm:hidden"
                />
            </div>

            {/* RestScreen Folder contains the component for the nav */}
            <Order /> 
        </section>
        </>
    )
}