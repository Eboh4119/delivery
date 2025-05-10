"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Home from "../Screens/Home"
import Special from "../Screens/Special"
import Track from "../Screens/Track"
import Restuarants from "../Screens/Restaurants"
import NotificationBadge from "../NotificationBadge"

interface NavOptions {
    id : number
    options : string
    location : React.JSX.Element
}


function Header () {
    const [isActive, setIsActive] = useState<NavOptions | null>(null)
    const [selectedOption, setIsSelectedOption] = useState <NavOptions | null> (null);
    const [isShow, setIsShow] = useState(false)
    const [menuOptions, setIsMenuOption] = useState<NavOptions[]>([
        {
            id: 1,
            options: 'Home',
            location: <Home />  
        },
        {
            id : 3,
            options: 'Restuarants',
            location: <Restuarants />  
        },
        {
            id : 2,
            options: 'Special Offers',
            location: <Special />  
        },
        {
            id : 4,
            options: 'Track Orders',
            location: <Track /> 
        }
    ]);

    const router = useRouter()

    useEffect(() => {
        if(menuOptions.length > 0) {
            setIsSelectedOption(menuOptions[0])
        }
    }, [menuOptions]);

    const handleClick = (menu : React.SetStateAction<NavOptions | null>) => {
        setIsSelectedOption(menu)
        setIsActive(menu)
    };

    const handleLogin = () => {
        router.push('/Login')
    };

    return (
        <header>
            <nav className=" fixed flex justify-evenly items-center top-0 bg-white1  w-full max-sm:hidden z-40">
                <div className="font-semibold">
                    Get 5% off your first order. 
                    <span className="text-orange1 underline cursor-pointer">Promo: ORDERS</span>
                </div>

                <div className="flex gap-2 font-medium">
                    <Image 
                    src={'/Location.svg'}
                    alt="image"
                    width={25}
                    height={25}
                    /> 
                    Regent Street <span className="underline">A4</span> A401 London
                    <span className="text-orange1 underline cursor-pointer">change location</span>
                </div>

                <div className="bg-green1 flex items-center text-white1">
                    <Image 
                    src={'/Full Shopping Basket.svg'}
                    alt="basket"
                    width={43}
                    height={43}
                    className="py-2 px-2 border-r border-white1 border-opacity-15 cursor-pointer"
                    />
                    <p className="py-3 px-3 border-r border-white1 border-opacity-15">233</p>
                    <p className="py-3 px-3 border-r border-white1 border-opacity-15">GPB 79.89</p>
                    <Image 
                    src={'/Forward Button.svg'}
                    alt="forward"
                    width={38}
                    height={38}
                    className="py-2 px-2 cursor-pointer"
                    /> 
                </div>
            </nav>

            <nav className=" fixed bg-white top-8 z-40 w-full flex justify-around max-sm:justify-end items-center px-6 py-3 sm:my-4 max-sm:top-0">
                <Image 
                src={'/LOGO 1.png'}
                alt="Logo"
                width={215}
                height={53}
                />

                <div className="flex max-sm:hidden">
                    {menuOptions.map((items, index) =>  (
                        <ul key={index} className="flex items-center gap-1 px-8 text-[18px] font-medium">
                                <li onClick={() => handleClick(items)}  className={`${isActive?.id === items.id ? 'bg-orange1 text-white rounded-full py-2 px-6' : ""} cursor-pointer`}>
                                    {items.options}
                                </li>
                        </ul>
                    ))}
                    <NotificationBadge />
                </div>

                
                <div className="flex gap-1 bg-blue1 py-2 px-4 rounded-full text-white text-[18px] cursor-pointer max-sm:hidden" onClick={handleLogin}>
                    <Image 
                    src={'/Male User.svg'}
                    alt="login"
                    width={30.97}
                    height={27}
                    />
                    Login/Signup 
                </div>
                
                {/* Menu Options for Mobile Screen */}
                <div className={`md:hidden cursor-pointer fixed left-4 top-4 z-50`} onClick={() => setIsShow(prevShow => !prevShow)}>
                    <Image 
                    src={'/bars.svg'}
                    alt="bars"
                    width={40}
                    height={40}
                    /> 
                    {isShow && 
                        <div className={`bg-blue1 h-[530px] w-72 transition-transform duration-300 ease-in-out rounded-md py-3 mt-4 ${isShow ? 'translate-x-0' : '-translate-x-full'}`}>
                            {menuOptions.map((items, index) =>  (
                                <ul key={index} className="flex items-center gap-1 px-4 text-[18px] font-medium my-4 max-sm:text-white">
                                        <li onClick={() => handleClick(items)}  className={`${isActive?.id === items.id ? 'bg-orange1 text-white rounded-full py-2 px-3' : ""} cursor-pointer max-sm:rounded-md`}>
                                            {items.options}
                                        </li>
                                </ul>
                            ))}
                        </div>
                    }
                </div>
            </nav>

            {/* Overlay for mobile when sidebar is open */}
            {isShow && (
                <div
                className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                onClick={() => setIsShow(prevShow => !prevShow)}
                ></div>
            )}

            <main>
                {selectedOption?.location}
            </main>
        </header>
    )
}

export default Header