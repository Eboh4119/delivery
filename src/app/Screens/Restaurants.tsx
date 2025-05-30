import Image from "next/image"
import { RestData, DeliveryInformation, ContactText, OperationaTimes } from "../config/restuarantsdata"
import { Restaurant } from "../config/data"
import { Order } from "../order"
import { FooterEnd } from "../Components/Footer"
import Link from "next/link"

export default function Restuarants () {
    return (
        <>
        {/* 1st Section detailing each section for easy access */}
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

            {/* Order.tsx contains the component for the nav and display */}
            <Order /> 
        </section>

        {/* 3rd section */}
        <section className="grid grid-cols-3 bg-grey1 max-w-[1200px] mx-auto shadow-lg shadow-black my-10 rounded-lg max-sm:block">
            <div className="py-14 px-6 max-sm:py-8">
               <div className="flex gap-x-6 items-center">
                <Image 
                src={'/Tracking.svg'}
                alt="location"
                width={50}
                height={50}
                /> 
                <h1 className="text-2xl font-bold text-blue1">Delivery Information</h1>
               </div>

               <div className="ml-2 my-3">
                {DeliveryInformation.map((items, index) => (
                    <ul key={index}>
                        <li className="font-bold my-4">{items.date} <span className="font-normal">{items.time}</span></li>
                    </ul>
                ))}
               </div>
            </div>

            <div className="py-14 px-6">
                <div className="flex gap-x-6 items-center">
                    <Image 
                    src={'/ID Verified.svg'}
                    alt="verified"
                    width={50}
                    height={50}
                    /> 
                    <h1 className="text-2xl font-bold text-blue1">Contact Information</h1>
                </div>

                <div className="ml-2 my-3">
                    <p className="leading-[40px]">{ContactText}</p>
                    <p className="font-semibold my-4">Phone Number 
                        <span className="block font-normal my-1">+93344433-43</span>
                    </p>
                    <p className="font-semibold">Website 
                        <Link href={'http://mcdonalds.uk'} className="block font-normal mt-1">http://mcdonalds.uk</Link>
                    </p>
                </div>
            </div>

            <div className="bg-blue1 text-white py-14 px-6">
                <div className="flex gap-x-6 items-center">
                    <Image 
                    src={'/Clock.svg'}
                    alt="clock"
                    width={50}
                    height={50}
                    />
                    <h1 className="text-2xl font-bold">Operational Times</h1>
                </div>

                <div className="ml-2 my-3">
                    {OperationaTimes.map((items, index) => (
                        <ul key={index}>
                            <li className="font-semibold my-4 ">{items.date} <span className="font-normal">{items.time}</span></li>
                        </ul>
                    ))}
                </div>
            </div>
        </section>

        <section style={{
            backgroundImage: `url(/GoogleMap.png)`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            maxWidth: '1200px',
            height: '659px'
            }}
            className="mx-auto py-12 flex justify-around items-center"
            >
                <div className="bg-blue1 h-[539px] w-[466px] max-sm:w-[361px] text-white py-12 px-8 rounded-lg">
                    <h1 className="text-3xl font-bold">McDonalds <span className="text-orange1 block mt-1 font-semibold text-lg">South London</span></h1>
                    <div className="mt-6">
                        <p>Tooley St, London Bridge, London SE1 2TF,United Kingdom</p>
                        <p className="font-semibold my-4">Phone Number 
                            <span className="block font-normal my-1 text-orange1">+93344433-43</span>
                        </p>
                        <p className="font-semibold">Website 
                            <Link href={'http://mcdonalds.uk'} className="block font-normal mt-1 text-orange1">http://mcdonalds.uk</Link>
                        </p>
                    </div>
                </div>

                <div className="bg-white h-[73px] w-[231px] relative max-sm:hidden">
                    <h1 className="font-bold px-4 py-4">McDonalds <span className="block font-semibold">South London</span></h1>
                    <div className="w-[73px] h-[73px] bg-blue1 rounded-full absolute ml-10 left-28 bottom-8">
                        <Image 
                        src={'/Previous Location.svg'}
                        alt="map detail"
                        width={45}
                        height={45}
                        className="justify-self-center py-4"
                        />
                    </div>
                </div>
        </section>

        <section>
                    <div className="max-w-[1200px] mx-auto overflow-x-auto">
                        <div className="my-4 font-bold text-xl py-2 max-sm:text-center">
                            Similar Restuarants
                        </div>
        
                        <div className="grid grid-cols-6 gap-3 my-4 text-center overflow-y-auto max-sm:grid-cols-2 max-sm:h-[300px]">
                            {Restaurant.map((items, index) => (
                                <div key={index} className="">
                                    <Image 
                                    src={items.image}
                                    alt="image"
                                    width={238}
                                    height={203}
                                    className="object-contain"
                                    />
                                    <div className="bg-orange1 py-3 px-2 rounded-b-lg">
                                        <p className="text-white font-bold text-md">{items.name}</p>
                                    </div> 
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer>
                    <FooterEnd />
                </footer>
        
        </>
    )
}