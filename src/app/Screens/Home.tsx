"use client"

import { useState, useEffect } from "react"
import Image from "next/image";
import { OrderOption, categories, Restaurant, PartnerData, SuccessData } from "../config/data";
import { Other, Pizza, Sushi, Vegan } from "../MenuScreens/menuScreens";
import { Kyc } from "../Kyc";
import { FooterEnd } from "../Components/Footer";

interface menuOptions {
    id : number
    options : string
    content : React.JSX.Element
};

interface countData {
    digit : number
    title : string
}

function Home () {
    const [searchValue, setSearchValue] = useState (''); 
    const [selectedOption, setIsSelectedOption] = useState <menuOptions | null> (null) 
    const [isActive, setIsActive] = useState<menuOptions |null>(null)
    const [orderOption, setOrderOption] = useState <menuOptions[]> ([
        {
            id : 1,
            options: 'Segan',
            content: <Vegan /> 
        },
        {
            id : 2,
            options: 'Sushi',
            content: <Sushi /> 
        },
        {
            id : 3,
            options: 'Pizza',
            content: <Pizza /> 
        },
        {
            id : 4,
            options: 'Other',
            content: <Other /> 
        },
    ]);
   
    useEffect(() => {
            if(orderOption.length > 0) {
                setIsSelectedOption(orderOption[0])
            }
        }, [orderOption]);

        const handleClick = (menu : React.SetStateAction<menuOptions | null>) => {
            setIsSelectedOption(menu)
            setIsActive(menu)
        };

    return (
        <>
        <div>
            <div  className="bg-blue1 h-[60vh] max-w-[1200px] rounded-md mx-auto flex pt-6 max-sm:max-w-[400px] mt-24">
                <div className="text-white w-[1000px] px-4 py-14 tagline max-sm:text-center">
                    <p className="text-sm max-sm:mb-4">Order Restaurant food, takeaway and groceries</p>
                    <span className="text-5xl max-sm:text-4xl font-bold">Feast Your Senses,</span>
                    <span className="text-orange1 text-5xl max-sm:text-4xl font-bold block">Fast and Fresh</span>

                    <div className="pt-6">
                        <p className="text-sm pb-3">Enter a postcode to see what we offer</p>

                        <div className="justifly-center">
                        <input type="text" 
                        onChange={(e) => setSearchValue(e.target.value)}
                        value={searchValue}
                        placeholder="e.g. EC4RJTE"
                        className="rounded-full py-4 px-7 text-black font-medium outline-none border-none"
                        />
                        {/* <button type="submit" className="bg-orange1 rounded-full py-4 px-8 bottom-2">Search</button>  */}
                        </div> 
                    </div>
                </div>

                {/* second image */}
                <div className="flex px-10 pt-5 w-[805px] max-sm:hidden">
                    <Image 
                    src={'/Untitled-1 1.png'}
                    alt="burger-image"
                    width={300}
                    height={500}
                    className="object-cover z-4 tagline"
                    /> 
                    <Image 
                    src={'/Untitled-2 1.png'}
                    alt="burger"
                    width={465}
                    height={500}
                    className="z-10 object-cover mr-8 pt-12 jumpin"
                    />
                </div>

                {/* end part of content */}
                <div className="pt-1 max-sm:hidden">
                    <div className="bg-orange1 h-[56vh] w-[450px] pt-3 rounded-l-full jumpin">
                        {OrderOption.map((order, index) => (
                            <div key={index} className="flex justify-end pr-4">
                                <div className="bg-white py-2 my-4 px-2 rounded-md flex fadein">
                                    <div>
                                        <Image 
                                        src={order.logo}
                                        alt="logo"
                                        width={50}
                                        height={100}
                                        /> 
                                        <p className="text-[12px] font-medium">{order.text}</p>
                                        <span className="text-[14px]">{order.accept}</span>
                                    </div>
                                    <Image 
                                    src={order.num}
                                    alt="num"
                                    width={10}
                                    height={20}
                                    /> 
                                    <p className="mb-2 text-[12px] font-medium">{order.not}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* menu items */}
        <main>
            <div className="flex justify-between px-10 max-w-[1200px] mx-auto my-6">
                <div className="font-bold text-xl  max-sm:hidden py-2">
                    Up to -40% 🎊 Order.uk exclusive deals
                </div>
                
                <div className="flex items-center overflow-x-auto scrollable">
                    {orderOption.map((items, index) =>  (
                        <ul key={index} className="items-center gap-1 px-8 text-sm font-medium">
                            <li onClick={() => handleClick(items)}  className={`${isActive?.options === items.options ? ' text-orange1 rounded-full py-2 px-6 border-2 border-orange1' : ""} cursor-pointer`}>
                                {items.options}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
                    <section className="mx-14">
                        {selectedOption?.content}
                    </section>
        </main>

        {/* order sections */}
        <section>
            <div className="max-w-[1200px] mx-auto">
                <div className="my-4 font-bold text-xl py-2 max-sm:text-center">
                    Order.uk Popular Categories 🤩
                </div>

                <div className="grid grid-cols-6 gap-5 my-4 max-sm:grid-cols-2 mx-2">
                    {categories.map((items, index) => (
                        <div key={index} className="w-[179px]">
                            <Image 
                            src={items.image}
                            alt="image"
                            width={238}
                            height={203}
                            className="object-contain"
                            />
                            <div className="bg-blue1 py-3 px-2 rounded-b-lg">
                                <p className="text-orange1 font-bold text-md">{items.name}</p>
                                <p className="text-sm font-normal text-white">{items.location}</p>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* restuarants sections */}
        <section>
            <div className="max-w-[1200px] mx-auto overflow-x-auto">
                <div className="my-4 font-bold text-xl py-2 max-sm:text-center">
                    Popular Restuarants
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

        {/* Ordering section */}
        <section className="my-10 max-w-[1200px] rounded-md mx-auto flex max-sm:block">
            <div className="bg-grey1 max-w-[1563px] max-sm:max-w[1200px] h-[511px] flex rounded-xl shadow-md shadow-gray-900 max-sm:block max-sm:h-full">
                <Image 
                src={'/friends2.svg'}
                alt="friends"
                width={532}
                height={651}
                className="z-4 mt-16 pt-8 pl-3"
                /> 

                <div className="text-center my-24 max-sm:my-0 pt-10 max-sm:hidden px-14">
                    <div className="flex items-center">
                        <Image 
                        src={'/LOGO 1.png'}
                        alt="logo"
                        width={268}
                        height={66}
                        />
                        <span className="text-[50px] font-bold text-blue1">ing is more</span>
                    </div>
                    <h3 className="text-[30px] font-medium bg-blue1 py-2 px-2 rounded-full text-white"><span className="text-orange1 underline">Personalised</span> & Instant</h3>
                    <p className="font-normal text-[24px] my-2">Download the Order.uk app for faster ordering</p>
                    <div>
                        <Image 
                        src={'/GooglePlay.svg'}
                        alt="play"
                        width={206}
                        height={61}
                        className="justify-self-center my-2 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Partner and Ride section */}
        <section className="max-w-[1200px] flex gap-6 mx-auto mb-4 max-sm:block">
            {PartnerData.map((items, index) => (
                <div className="w-[600px] h-[400px] rounded-xl max-sm:w-[361px] max-sm:h-[233px] max-sm:my-4 max-sm:mx-auto" 
                style={{
                backgroundImage:`url(${items.image})`, 
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }}>
                    <p className="w-[288px] h-[63] max-sm:w-[191px] max-sm:h-[33px] max-sm:text-sm bg-white font-bold textlg py-3 px-2 rounded-b-lg text-center ml-6">{items.tag}</p>
                    <div className="mt-20 pt-24 pl-10 max-sm:pt-4 max-sm:mt-12">
                        <p className="font-medium text-sm text-orange1">{items.tag2}</p>
                        <h2 className="text-3xl text-white font-bold max-sm:text-xl">{items.details}</h2>
                        <button className="py-2 px-6 bg-orange1 text-white text-lg rounded-full">{items.button}</button>
                    </div>
                </div>
            ))}
        </section>

        {/* Information/Kyc Section on a different component */}
        <section>
           < Kyc /> 
        </section>

        {/* Order.uk Success Details */}
        <section>
            <div className="sm:max-w-[1200px] bg-orange1 h-full grid grid-cols-4 mx-auto rounded-md max-sm:grid-cols-1 py-4 my-8 max-w-[356px]">
                {SuccessData.map((items, index) => (
                    <div key={index} className="mx-auto text-center text-white my-auto sm:border-l sm:border-l-grey1 px-3 py-4 max-sm:border-b max-sm:border-b-grey1">
                        <h3 className="font-light text-6xl py-2">{items.digit}</h3>
                        <p className="text-[24px] font-bold">{items.title}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Footter section */}
        <footer>
            <FooterEnd /> 
        </footer>
        </>
    )
}

export default Home