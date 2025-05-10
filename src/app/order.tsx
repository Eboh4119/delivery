import { useState, useEffect } from "react";
import { Burgers, Desert, Drinks, Fries, HotDrinks, Meals, Orbits, Salads, Sauces, Snacks } from "./MenuScreens/RestScreen";
import { Offers } from "./OfferScreen/OfferScreen";

interface InformationOptions {
    id : number
    options : string
    content : React.JSX.Element
}

export const Order = () => {
    const [selectedOption, setIsSelectedOption] = useState<InformationOptions | null>(null)
    const [isActive, setIsActive] = useState <InformationOptions | null> (null)
    const [InfoOption, setInfoOption] = useState <InformationOptions[]> ([
        {
            id : 1,
            options : 'Offers',
            content : <Offers />
        },
        {
            id : 2,
            options : 'Burgers',
            content : <Burgers /> 
        },
        {
            id : 3,
            options : 'Fries',
            content : <Fries /> 
        },
        {
            id : 4,
            options : 'Snacks',
            content : <Snacks /> 
        },
        {
            id : 5,
            options : 'Salads',
            content : <Salads /> 
        },
        {
            id : 6,
            options : 'Drinks',
            content : <Drinks /> 
        },
        {
            id : 7,
            options : 'Meal',
            content : <Meals /> 
        },
        {
            id : 8,
            options : 'Desert',
            content : <Desert /> 
        },
        {
            id : 9,
            options : 'Wines',
            content : <HotDrinks /> 
        },
        {
            id : 10,
            options : 'Sauces',
            content : <Sauces /> 
        },
        {
            id : 11,
            options : 'Orbits',
            content : <Orbits /> 
        },
    ]);

    useEffect(() => {
        if(InfoOption.length > 0){
            setIsSelectedOption(InfoOption[0])
        }
    }, [InfoOption]);

    const handleClick = (menu : React.SetStateAction<InformationOptions | null>) => {
        setIsSelectedOption(menu)
        setIsActive(menu)
    };

    return (
        <section>
            <div className="flex justify-between bg-orange1 py-3 px-12 mx-auto my-2">
                <div className="flex items-center overflow-x-auto scrollable">
                    {InfoOption.map((items, index) =>  (
                        <ul key={index} className="items-center gap-1 px-8 text-sm font-medium">
                            <li onClick={() => handleClick(items)}  className={`${isActive?.options === items.options ? ' text-white rounded-full py-2 px-4 bg-blue1' : ""} cursor-pointer font-bold text-white`}>
                                {items.options}
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
            <main className="sm:max-w-[1200px] mx-auto">
                {selectedOption?.content}
            </main>
        </section>
    )
}